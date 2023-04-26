import { Fragment, useEffect , useState  } from 'react'

import { Row, Col, CardBody, CardText , CardTitle , Table } from 'reactstrap'

import prism from 'prismjs'


import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'


const Pending = () => {

  const [notValidateFile,setNotValidateFile] = useState([]);
/*  const [validateFile,setValidateFile] = useState([]);
  const [visibleEntiteNonValidate,setVisibleEntiteNonValidate] = useState([]);
  const [visibleEntiteValidate,setVisibleEntiteValidate] = useState([]); */
  


  useEffect(() => {
    const getNotValidatedFile = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file/non-valides-par-user`, {
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
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Col>
  </Row>
  )
}

export default Pending;
