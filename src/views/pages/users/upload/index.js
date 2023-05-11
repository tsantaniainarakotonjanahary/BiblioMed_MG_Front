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
  const hiddenFileInput = useRef(null);
  const [entities,setEntities] = useState([]);
  const [visibilite, setVisibilite] = useState([]);
  const [thematiques, setThematiques] = useState([]); // NEW: For storing all thematiques
  const [selectedThematique, setSelectedThematique] = useState(''); // NEW: For storing selected thematique
  const [sousThematiques, setSousThematiques] = useState([]); // NEW: For storing all sousThematiques
  const [filteredSousThematiques, setFilteredSousThematiques] = useState([]); // NEW: For storing sousThematiques based on selected thematique
  const [selectedSousThematique, setSelectedSousThematique] = useState('');

  // NEW: useEffect to fetch thematiques and sousThematiques
  useEffect(() => {
    const getThematiques = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/thematique`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
        }).then((response) => response.json()).then((data) => { setThematiques(data); }).catch((error) => { console.error(error); })
    }

    const getSousThematiques = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/sousThematique`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
        }).then((response) => response.json()).then((data) => { setSousThematiques(data); }).catch((error) => { console.error(error); })
    }

    getThematiques();
    getSousThematiques();
  }, [])

  useEffect(() => {
    
    const filtered = sousThematiques.filter(sousThematique => sousThematique.idThematique === selectedThematique.split("/")[0]);
    setFilteredSousThematiques(filtered);
  }, [selectedThematique, sousThematiques]);


  const handleSelectThematiqueChange = (event) => {
    console.log(event.target.value);
    setSelectedThematique(event.target.value);
  };


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
    const fileRef = ref(storage, `${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((fileUrl) => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-auth-token" : localStorage.getItem("token"), },
          body: JSON.stringify({
            lien: fileUrl,
            nom: fileUpload.name,
            titre : titre,
            description : description , 
            visibilite,
            thematique : selectedThematique.split("/")[1] ,
            idThematique : selectedThematique.split("/")[0],
            sousThematique : selectedSousThematique.split("/")[1],
            idSousThematique : selectedSousThematique.split("/")[0]
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

  const handleSelectSousThematiqueChange = (event) => {
    console.log('Selected option:', event.target.value);
    setSelectedSousThematique(event.target.value);
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


    console.log(thematiques);
  
    return (
      <div style={{width : "100%"}}>

          <FormGroup>
            <Label for="dropdownSelectThematique">Thematique :</Label>
            <Input type="select" name="dropdownSelectThematique" id="dropdownSelectThematique" onChange={handleSelectThematiqueChange}>
              <option value="">Sélectionnez une Thematique</option>
              {thematiques.map(({ _id, nom }) => (
                <option key={_id} value={_id+"/"+nom}>{nom}</option>
              ))}
            </Input>
          </FormGroup>

          // Updated FormGroup for Sous-thematique
          <FormGroup>
            <Label for="dropdownSelectSousThematique">Sous-thematique :</Label>
            <Input type="select" name="dropdownSelectSousThematique" id="dropdownSelectSousThematique" onChange={handleSelectSousThematiqueChange}>
              <option value="">Sélectionnez une sous-thematique</option>
              {filteredSousThematiques.map(({ _id, nom },index) => (
                <option key={index} value={_id+"/"+nom}>{nom}</option>
              ))}
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
        {fileUpload ? (
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

