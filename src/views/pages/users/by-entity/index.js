// ** React Importsnippet
import { Fragment, useEffect , useState  } from 'react'

// ** Reactstrap Imports
import { Row, Col, CardBody, CardText , CardTitle , Table  , Button} from 'reactstrap'

// ** Third Party Components
import prism from 'prismjs'


// ** Custom Components
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'


const ByEntity = () => {

  const [notValidateFile,setNotValidateFile] = useState([]);
/*  const [validateFile,setValidateFile] = useState([]);
  const [visibleEntiteNonValidate,setVisibleEntiteNonValidate] = useState([]);
  const [visibleEntiteValidate,setVisibleEntiteValidate] = useState([]); */
  


  useEffect(() => {
    const getNotValidatedFile = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file/valides-par-mon-entite/${JSON.parse(localStorage.getItem("userData")).idEntite}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
      }).then((response) => response.json()).then((data) => { setNotValidateFile(data); }).catch((error) => { console.error(error); })
    }
    getNotValidatedFile();

   /* const getValidatedFile = async () => {
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

},[])


  return (
    <Row>
    <Col md='12' sm='12'>
      <Card title={"Fichiers a valider"} >
        <h1> à valider</h1>
        <Table>
          <thead>
            <tr>
              <th>Repertoire et categorie </th>
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
                <td>{item.dossier}</td>
                <td>{item.fichier.titre}</td>
                <td>{item.fichier.description}</td>
                <td>{item.fichier.nom}</td>
                <td>{item.fichier.date}</td>
                <td>{item.fichier.user.nom}</td>
                <td>
                    <a href={item.fichier.lien} download> <Button>Voir</Button> </a>
                  </td>
                  <td>
                     <Button onClick={() => {
                        (async () => { fetch(`${BASE_URL}/file/${item._id}/${item.fichier._id}`, {
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

export default ByEntity;
