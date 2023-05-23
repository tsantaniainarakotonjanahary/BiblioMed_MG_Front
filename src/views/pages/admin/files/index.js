import { Fragment, useEffect , useState , useContext} from 'react'
import { BASE_URL } from '../../../../configs/api/url';
import { Download } from 'react-feather';
import { Row, Col, CardBody, CardText , CardTitle  , Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

const Files = () => {
  const [notValidateFile, setNotValidateFile] = useState([]);
  const [action, setAction] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [thematiques, setThematiques] = useState([]);
  const [selectedThematique, setSelectedThematique] = useState('');
  const [sousThematiques, setSousThematiques] = useState([]);
  const [filteredSousThematiques, setFilteredSousThematiques] = useState([]);
  const [selectedSousThematique, setSelectedSousThematique] = useState('');
  const [entities, setEntities] = useState([]);
  const [visibilite, setVisibilite] = useState([]);
  const [description, setDescription] = useState("");
  const [titre, setTitre] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    getThematiques();
    getSousThematiques();
    getEntities();
  }, [])

const getThematiques = async () => {
  fetch(`https://bibliotheque-medical-back.vercel.app/thematique`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token" : localStorage.getItem("token"),
    }
  })
  .then((response) => response.json())
  .then((data) => { 
    setThematiques(data); 
  })
  .catch((error) => { 
    console.error(error); 
  });
}

const getSousThematiques = async () => {
  fetch(`https://bibliotheque-medical-back.vercel.app/sousThematique`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token" : localStorage.getItem("token"),
    }
  })
  .then((response) => response.json())
  .then((data) => { 
    setSousThematiques(data); 
  })
  .catch((error) => { 
    console.error(error); 
  });
}

const getEntities = async () => {
  fetch(`https://bibliotheque-medical-back.vercel.app/entite`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token" : localStorage.getItem("token"),
    }
  })
  .then((response) => response.json())
  .then((data) => { 
    setEntities(data); 
  })
  .catch((error) => { 
    console.error(error); 
  });
}


useEffect(() => {
  const filtered = sousThematiques.filter(sousThematique => sousThematique.idThematique === selectedThematique.split("/")[0]);
  setFilteredSousThematiques(filtered);
}, [selectedThematique, sousThematiques]);

useEffect(() => {
  setSelectedSousThematique("");
}, [selectedThematique]);


// Handlers
const handleSelectThematiqueChange = (event) => {
  setSelectedThematique(event.target.value);
}

const handleSelectSousThematiqueChange = (event) => {
  setSelectedSousThematique(event.target.value);
}

  const handleCheckboxChange = (event) => {
    const entityId = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setVisibilite([...visibilite, entityId]);
    } else {
      setVisibilite(visibilite.filter(id => id !== entityId));
    }
  }

  
  const getNotValidatedFile = async () => {
    fetch(`https://bibliotheque-medical-back.vercel.app/file/non-valides`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token" : localStorage.getItem("token"),
        }
  }).then((response) => response.json()).then((data) => { setNotValidateFile(data); }).catch((error) => { console.error(error); })
  }

  useEffect(() => {
    getNotValidatedFile();
  },[action])

  const toggleModal = (file) => {
    setModalOpen(!modalOpen);
    setSelectedFile(file);
  }

  const handleUpdate = () => {
    selectedFile.titre = titre;
    selectedFile.description = description;
    selectedFile.thematique = selectedThematique.split("/")[1];
    selectedFile.idThematique = selectedThematique.split("/")[0];
    selectedFile.sousThematique = selectedSousThematique.split("/")[1];
    selectedFile.idSousThematique = selectedSousThematique.split("/")[0];
    selectedFile.visibilite = visibilite;
    console.log(selectedFile);

    fetch(`${BASE_URL}/file/${selectedFile._id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem("token"),
      },
      body: JSON.stringify(selectedFile)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setAction(!action);
      setModalOpen(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  

  return (
    <Row>
      <Col md='12' sm='12'>
        <Card title={"Fichiers a valider"} >
          <h1> à valider</h1>
          <Table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Fichier</th>
                <th>Date d'ajout</th>
                <th>Utilisateur</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {notValidateFile.map((item,index) => (
                <tr key={index}>
                  <td>{item.titre}</td>
                  <td>{item.description}</td>
                  <td>{item.nom}</td>
                  <td>{item.date}</td>
                  <td>{item.user.nom}</td>
                  <td>
                    <a href={item.lien} download> <Button>Voir</Button> </a>
                  </td>
                  <td>
                    <Button onClick={() => toggleModal(item)}>Modifier</Button> 
                  </td>
                  <td>
                     <Button onClick={() => {
                        (async () => { fetch(`${BASE_URL}/file/validate/${item._id}`, {
                              method: 'PUT',
                              headers: { 'Content-Type': 'application/json', 'x-auth-token' : localStorage.getItem("token") }
                          }).then(response => response.json()).then(data => setAction(!action) ).catch(error => console.error(error));
                        }) ();
                     }}>Valider</Button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>

        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Update File</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="titre">Titre</Label>
              <Input type="textarea" name="titre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="dropdownSelectThematique">Thematique :</Label>
              <Input type="select" name="dropdownSelectThematique" id="dropdownSelectThematique" onChange={handleSelectThematiqueChange}>
                <option value="">Sélectionnez une Thematique</option>
                {thematiques.map(({ _id, nom }) => (
                  <option key={_id} value={_id+"/"+nom}>{nom}</option>
                ))}
              </Input>
            </FormGroup>
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>
            <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Col>
    </Row>
  )
}

export default Files;
