import React, { useState, useRef, useEffect } from "react";
import { CardBody, CardText , CardTitle } from 'reactstrap'
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import toast from 'react-hot-toast'
import { FormGroup, Label, Input, Button ,Row, Col, } from 'reactstrap';
import Avatar from '@components/avatar'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X } from 'react-feather'
import { Upload } from 'react-feather';
import { storage } from "../../../../configs/firebase/firebase";

const ToastContent = ({ t, message }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between' >
          <X size = {12} className = 'cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <span>{message} </span>
      </div>
    </div>
  )
}



const UploadPage = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [directory, setDirectory] = useState("");
  const hiddenFileInput = useRef(null);
  const [entities,setEntities] = useState([]);
  const [visibilite, setVisibilite] = useState([]);

  console.log(visibilite);

  useEffect(() => {
      const getEntities = async () => {
          fetch(`https://bibliotheque-medical-back.vercel.app/entite`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "x-auth-token" : localStorage.getItem("token"),
              }
          }).then((response) => response.json()).then((data) => { setEntities(data); }).catch((error) => { console.error(error); })
      }
      getEntities();
  },[])
  
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const [description,setDescription] = useState("");
  const [titre,setTitre] = useState("");


  const handleUploadFile = () => {
    setIsLoadingUpload(true);
    if (fileUpload == null) return;
    const fileRef = ref(storage, `${directory}/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((fileUrl) => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem("token"),
          },
          body: JSON.stringify({
            dossier: directory,
            lien: fileUrl,
            nom: fileUpload.name,
            titre : titre,
            description : description , 
             visibilite,
            user: {
              nom: localStorage.getItem("userData").nom,
              prenom: localStorage.getItem("userData").prenom,
              profil: localStorage.getItem("userData").profil,
              iduser: localStorage.getItem("userData")._id,
              role: localStorage.getItem("userData").role,
              entite: localStorage.getItem("userData").entite,
              idEntite: localStorage.getItem("userData").idEntite,
            },
          }),
        }).then((response) => response.json()).then((data) => { console.log(data);  
          toast(t => (
              <ToastContent t={t} message={data.message}  />
          )) }).catch((error) => { console.error(error); })
      });
    });
  };
  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChangeUploadedFile = (event) => {
    const fileUploaded = event.target.files[0];
    setFileUpload(fileUploaded);
  };

  const handleSelectChange = (event) => {
    console.log('Selected option:', event.target.value);
  };

  const handleCheckboxChange = (event) => {
      const entityId = event.target.value;
      const isChecked = event.target.checked;
  
      if (isChecked) {
        setVisibilite([...visibilite, entityId]);
      } else {
        setVisibilite(visibilite.filter(id => id !== entityId));
      }
    }
  
    return (
      <div style={{width : "100%"}}>

    <FormGroup>
      <Label for="dropdownSelect">Thematique  :</Label>
      <Input type="select" name="dropdownSelect" id="dropdownSelect" onChange={handleSelectChange}>
        <option value="">Sélectionnez une Thematique</option>
        <option value="option1">Document technique</option>
        <option value="option2">Document stratégique</option>
        <option value="option3">Résultats des recherches</option>
        <option value="option3">Autres</option>
      </Input>
    </FormGroup>

    <FormGroup>
      <Label for="dropdownSelect">Sous-thematique :</Label>
      <Input type="select" name="dropdownSelect" id="dropdownSelect" onChange={handleSelectChange}>
        <option value="">Sélectionnez une sous-thematique </option>
        <option value="option1">Système d’information Sanitaire</option>
        <option value="option2">surveillance épidémiologique</option>
        <option value="option3">Médecine traditionnelle</option>
        <option value="option3">Paludisme</option>
        <option value="option3">Vaccination</option>
        <option value="option3">Santé de la mère et de l’enfant</option>
        <option value="option3">VIH/SIDA</option>
        <option value="option3">Tuberculose</option>
        <option value="option3">Autres</option>
      </Input>
    </FormGroup>

    <FormGroup>
      <Label>Visibilite par entite</Label>
      {entities.map(({ _id, nom }) => (
        <FormGroup check inline key={_id}>
          <Label check>
            <Input
              type="checkbox"
              id={_id}
              value={_id}
              checked={visibilite.includes(_id)}
              onChange={handleCheckboxChange}
            />
            {nom}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>

      <div>
          <DirectoryInputs directory={directory} setDirectory={setDirectory} />
        </div>

        <FormGroup>
    <Label for="description">Description</Label>
    <Input type="textarea" name="description" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
    </FormGroup>

    <FormGroup>
    <Label for="titre">Titre</Label>
    <Input type="textarea" name="titre" id="titre" rows="1" value={titre} onChange={(e) => setTitre(e.target.value)} />
    </FormGroup>

      <h3>Upload</h3>
        <Button onClick={handleClick} outline>
          <Upload size={16} />
          <span style={{ marginLeft: 10 }}>
            {fileUpload ? fileUpload?.name : "Choisissez un fichier à uploader ..."}
          </span>
        </Button>
        <br />
        <br />
        <br />
        <input type="file" ref={hiddenFileInput} style={{ display: "none" }} onChange={handleChangeUploadedFile} />
        {fileUpload && directory ? (
          <div>
              <Button
              disabled={isLoadingUpload}
              onClick={() => {
                  handleUploadFile();
              }}
              >
              {isLoadingUpload ? "LOADING" : <Upload />}
              </Button>
              <br/> <br/> 
          </div>
        ) : (
          <Button disabled style={{ backgroundColor: "#d7d7d7", color: "#9d9d9d" }}>
            <Upload />
          </Button>
        )}
    </div>
  )
}

export default UploadPage;



const DirectoryInput = ({ value, onChange }) => {
  return (
    <Input type="text" value={value} onChange={onChange} style={{ marginBottom: '10px' }} />
  );
};

const DirectoryInputs = ({ directory, setDirectory }) => {
  const elements = directory.split("/");
  const onChange = (index, value) => {
    elements[index] = value;
    setDirectory(elements.join("/"));
  };

  const onAddSubdirectory = () => {
    setDirectory(directory + "/");
  };

  return (
    <div>
      {elements.map((element, index) => (
        <DirectoryInput key={index} value={element} onChange={(e) => onChange(index, e.target.value)} />
      ))}
      <Button color="primary" onClick={onAddSubdirectory} style={{ marginTop: '10px' }}>
        Ajouter une categorie our sous categorie pour repertorier les fichier 
      </Button>
      <br/>
    </div>
  );
};

