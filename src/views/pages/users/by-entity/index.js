import { Fragment, useEffect , useState  } from 'react'

import { Row, Col, CardBody, CardText , CardTitle , Table  , Button} from 'reactstrap'
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , Eye} from 'react-feather'


import prism from 'prismjs'

import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'
import HashLoader from 'react-spinners/HashLoader'

const ByEntity = () => {

  const [notValidateFile,setNotValidateFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getNotValidatedFile = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file/valides-par-mon-entite/${JSON.parse(localStorage.getItem("userData")).idEntite}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
      }).then((response) => response.json()).then((data) => { setNotValidateFile(data); setIsLoading(false);}).catch((error) => { console.error(error); })
    }
    getNotValidatedFile();

   

},[])


  return (
    <Row>
    <Col md='12' sm='12'>
      <Card title={"Fichiers partagé dans mon entite "} >
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
          {isLoading ? (
                <div className="spinner">
                  <HashLoader color="#123abc" loading={isLoading} size={50} />
                </div>
              ) : (notValidateFile.map((item,index) => (
                <tr key={index}>
                  <td>{item.dossier}</td>
                  <td>{item.fichier.titre}</td>
                  <td>{item.fichier.description}</td>
                  <td>{item.fichier.nom}</td>
                  <td>{item.fichier.date}</td>
                  <td>{item.fichier.user.nom}</td>
                  <td>
                      <a href={item.fichier.lien} download> <Eye size={20} /> </a>
                    </td>
                </tr>
              )))}
            
          </tbody>
        </Table>
      </Card>
    </Col>
  </Row>
  )
}

export default ByEntity;
