import { Fragment, useEffect , useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle , Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form,FormGroup,Label,Input } from 'reactstrap';
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

const AddModal = (props) => {
  const { buttonLabel, className, modalData, onEntityAdded } = props;
  const [modal, setModal] = useState(false);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const toggle = () => setModal(!modal);
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/entite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom, description })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data); 
        setModal(false);
        onEntityAdded(); 
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajouter le nouveau entite ici</ModalHeader>
        <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail"> Nom </Label>
                <Input id="exampleEmail" name="email" placeholder="entrer le nom ici" type="text" value={nom} onChange={e => setNom(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText"> Description </Label>
                <Input id="exampleText" name="text" type="textarea" value={description} onChange={e => setDescription(e.target.value)} />
              </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Annuler</Button>
          <Button color="secondary" onClick={handleSubmit}>Ajouter</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};


function UpdateModal({ entity, onEntityUpdated }) {
  const [modal, setModal] = useState(false);
  const [nom, setNom] = useState(entity.nom);
  const [description, setDescription] = useState(entity.description);

  const toggle = () => setModal(!modal);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/entite/${entity._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token' : localStorage.getItem("token"),
        },
        body: JSON.stringify({ nom, description })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data); 
        setModal(false);
        onEntityUpdated(); // appeler la fonction de rappel ici
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Mettre à jour l'entité</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nomField">Nom</Label>
            <Input id="nomField" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="descField">Description</Label>
            <Input id="descField" type="textarea" value={description} onChange={e => setDescription(e.target.value)} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Mettre à jour
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}




const Entities = () => {
  const [entities,setEntities] = useState([]);
  const getEntities = async () => {
        fetch(`http://localhost:4000/entite`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token" : localStorage.getItem("token"),
                }
        }).then((response) => response.json()).then((data) => { setEntities(data); }).catch((error) => { console.error(error); })
  }
      
  useEffect(() => {
    getEntities();
  },[])


  const deleteEntity = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/entite/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token' : localStorage.getItem("token"),
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        getEntities();
      }
    } catch (error) {
      console.error(error);
    }
  }
  

        return (
          <Row>
            <Col md='12' sm='12'>
              <Card title={"Gestion des entites"} >
                    <AddModal buttonLabel="Ajouter nouveau" modalData="This is the data inside the modal" onEntityAdded={getEntities} />
                    <br/>
              <Table>
                <thead>
                  <tr>
                    <th>N </th>
                    <th>Nom </th>
                    <th>Description </th>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {entities.map((entity, index) => (
                      <tr key={entity._id}>
                        <td>{index + 1}</td>
                        <td>{entity.nom}</td>
                        <td>{entity.description}</td>
                        <td>
                          <UpdateModal entity={entity} onEntityUpdated={getEntities} />
                        </td>
                        <td>
                          <Button color="danger" onClick={() => deleteEntity(entity._id)}> Supprimer </Button>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </Table>
          </Card>
      </Col>
    </Row>
  )
};

export default Entities;
