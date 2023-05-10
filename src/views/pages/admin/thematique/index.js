import { Fragment, useEffect , useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle , Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form,FormGroup,Label,Input } from 'reactstrap';
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

const AddModal = (props) => {
  const { buttonLabel, className, modalData, onThematiqueAdded } = props;
  const [modal, setModal] = useState(false);
  const [nom, setNom] = useState("");

  const toggle = () => setModal(!modal);
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://bibliotheque-medical-back.vercel.app/thematique', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data); 
        setModal(false);
        onThematiqueAdded(); 
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajouter le nouveau thematique ici</ModalHeader>
        <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail"> Nom </Label>
                <Input id="exampleEmail" name="email" placeholder="entrer le nom ici" type="text" value={nom} onChange={e => setNom(e.target.value)} />
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


function UpdateModal({ Thematique, onThematiqueUpdated }) {
  const [modal, setModal] = useState(false);
  const [nom, setNom] = useState(Thematique.nom);

  const toggle = () => setModal(!modal);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://bibliotheque-medical-back.vercel.app/thematique/${Thematique._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token' : localStorage.getItem("token"),
        },
        body: JSON.stringify({ nom })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data); 
        setModal(false);
        onThematiqueUpdated(); // appeler la fonction de rappel ici
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




const Thematiques = () => {
  const [Thematiques,setThematiques] = useState([]);
  const getThematiques = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/thematique`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token" : localStorage.getItem("token"),
                }
        }).then((response) => response.json()).then((data) => { setThematiques(data); }).catch((error) => { console.error(error); })
  }
      
  useEffect(() => {
    getThematiques();
  },[])


  const deleteThematique = async (id) => {
    try {
      const response = await fetch(`https://bibliotheque-medical-back.vercel.app/thematique/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token' : localStorage.getItem("token"),
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        getThematiques();
      }
    } catch (error) {
      console.error(error);
    }
  }
  

        return (
          <Row>
            <Col md='12' sm='12'>
              <Card title={"Gestion des thematiques"} >
                    <AddModal buttonLabel="Ajouter nouveau" modalData="This is the data inside the modal" onThematiqueAdded={getThematiques} />
                    <br/>
              <Table>
                <thead>
                  <tr>
                    <th>N </th>
                    <th>Nom </th>
                   
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {Thematiques.map((Thematique, index) => (
                      <tr key={Thematique._id}>
                        <td>{index + 1}</td>
                        <td>{Thematique.nom}</td>
                        
                        <td>
                          <UpdateModal Thematique={Thematique} onThematiqueUpdated={getThematiques} />
                        </td>
                        <td>
                          <Button color="danger" onClick={() => deleteThematique(Thematique._id)}> Supprimer </Button>
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

export default Thematiques;
