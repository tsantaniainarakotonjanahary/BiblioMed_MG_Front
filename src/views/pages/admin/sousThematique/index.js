import { Fragment, useEffect , useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle , Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form,FormGroup,Label,Input } from 'reactstrap';
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

const AddModal = (props) => {

  const { buttonLabel, className, modalData, onSousThematiqueAdded } = props;
  const [modal, setModal] = useState(false);
  const [nom, setNom] = useState("");
  const [thematiques, setThematiques] = useState([]);
  const [selectedThematique, setSelectedThematique] = useState("");
  
  useEffect(() => {
    const fetchThematiques = async () => {
      try {
        const response = await fetch('http://localhost:4000/thematique', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const data = await response.json();
          setThematiques(data);
          setSelectedThematique(data[0]._id+"/"+data[0].nom); 
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchThematiques();
  }, []);

  const toggle = () => setModal(!modal);

  const handleSubmit = async () => {
      try {
        const response = await fetch(`http://localhost:4000/sousThematique/${selectedThematique.split("/")[0]}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nom, thematique: selectedThematique.split("/")[1] , idThematique : selectedThematique.split("/")[0] })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const data = await response.json();
          console.log(data);
          setModal(false);
          onSousThematiqueAdded();
        }
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajouter le nouveau sousThematique ici</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail"> Nom </Label>
              <Input id="exampleEmail" name="email" placeholder="entrer le nom ici" type="text" value={nom} onChange={e => setNom(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect"> Thematique </Label>
              <Input type="select" id="exampleSelect" value={selectedThematique} onChange={ e => {
                console.log(e.target.value);
                setSelectedThematique(e.target.value);  
              } } >
                {thematiques.map(thematique => (
                  <option key={thematique._id} value={thematique._id+"/"+thematique.nom}>{thematique.nom}</option>
                ))}
              </Input>
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


function UpdateModal({ SousThematique, onSousThematiqueUpdated }) {

  const [modal, setModal] = useState(false);
  const [nom, setNom] = useState(SousThematique.nom);
  const toggle = () => setModal(!modal);
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/sousThematique/${SousThematique._id}`, {
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
        setModal(false);
        onSousThematiqueUpdated();
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

const SousThematiques = () => {
      const [SousThematiques,setSousThematiques] = useState([]);
      const getSousThematiques = async () => {
            fetch(`http://localhost:4000/sousThematique`, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      "x-auth-token" : localStorage.getItem("token"),
                    }
            }).then((response) => response.json()).then((data) => { setSousThematiques(data); }).catch((error) => { console.error(error); })
      }

      useEffect(() => {
        getSousThematiques();
      },[])


      const deleteSousThematique = async (id) => {
        try {
          const response = await fetch(`http://localhost:4000/sousThematique/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token' : localStorage.getItem("token"),
            }
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            getSousThematiques();
          }
        } catch (error) {
          console.error(error);
        }
      }
  

        return (
          <Row>
            <Col md='12' sm='12'>
              <Card title={"Gestion des sousThematiques"} >
                    <AddModal buttonLabel="Ajouter nouveau" modalData="This is the data inside the modal" onSousThematiqueAdded={getSousThematiques} />
                    <br/>
              <Table>
                <thead>
                  <tr>
                    <th>N </th>
                    <th>Nom </th>
                    <th>Thematique </th>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {SousThematiques.map((SousThematique, index) => (
                      <tr key={SousThematique._id}>
                        <td>{index + 1}</td>
                        <td>{SousThematique.nom}</td>
                        <td>{SousThematique.thematique}</td>
                        <td>
                          <UpdateModal SousThematique={SousThematique} onSousThematiqueUpdated={getSousThematiques} />
                        </td>
                        <td>
                          <Button color="danger" onClick={() => deleteSousThematique(SousThematique._id)}> Supprimer </Button>
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

export default SousThematiques;
