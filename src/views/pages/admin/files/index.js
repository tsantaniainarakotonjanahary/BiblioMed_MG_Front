// ** React Importsnippet
import { Fragment, useEffect , useState , useContext} from 'react'
import { BASE_URL } from '../../../../configs/api/url';

import { Download } from 'react-feather';

// ** Reactstrap Imports
import { Row, Col, CardBody, CardText , CardTitle  , Table, Button} from 'reactstrap'

// ** Third Party Components
import prism from 'prismjs'


// ** Custom Components
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'


const Files = () => {

  const [notValidateFile,setNotValidateFile] = useState([]);
  const [action,setAction] = useState(false);

  console.log(notValidateFile);
  /*const [validateFile,setValidateFile] = useState([]);
  const [visibleEntiteNonValidate,setVisibleEntiteNonValidate] = useState([]);
  const [visibleEntiteValidate,setVisibleEntiteValidate] = useState([]); */
  

  useEffect(() => {
    const getNotValidatedFile = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file/non-valides`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
      }).then((response) => response.json()).then((data) => { setNotValidateFile(data); }).catch((error) => { console.error(error); })
    }
    getNotValidatedFile();
/*
    const getValidatedFile = async () => {
      fetch(`https://bibliotheque-medical-back.vercel.app/file/valides-par-user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem("token"),
          }
      }).then((response) => response.json()).then((data) => { setValidateFile(data); }).catch((error) => { console.error(error); })
    }
    getValidatedFile();

    const getVisibleEntiteNonValidate = async () => {
      fetch("https://bibliotheque-medical-back.vercel.app/file/non-valides-par-visibilite/"+ JSON.parse(localStorage.getItem("userData")).idEntite, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem("token"),
          }
      }).then((response) => response.json()).then((data) => { setVisibleEntiteNonValidate(data); }).catch((error) => { console.error(error); })
    }
    getVisibleEntiteNonValidate();

    const getVisibleEntiteValidate = async () => {
      fetch("https://bibliotheque-medical-back.vercel.app/file/valides-par-visibilite/"+ JSON.parse(localStorage.getItem("userData")).idEntite, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem("token"),
          }
      }).then((response) => response.json()).then((data) => { setVisibleEntiteValidate(data); }).catch((error) => { console.error(error); })
    }
    getVisibleEntiteValidate();

    */

},[action])


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
                     <Button onClick={() => {
                        (async () => { fetch(`${BASE_URL}/file/${item._id}`, {
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
      </Col>
    </Row>
  )
}

export default Files;
