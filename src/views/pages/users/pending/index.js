import { Fragment, useEffect , useState  } from 'react'
import { Row, Col, CardBody, CardText , CardTitle , Table } from 'reactstrap'
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , Eye } from 'react-feather'
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'
import HashLoader from 'react-spinners/HashLoader'

const Pending = () => {

  const [notValidateFile,setNotValidateFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log( localStorage.getItem("token"));

  useEffect(() => {
    setIsLoading(true);
    const getNotValidatedFile = async () => {
        fetch(`http://localhost:4000/file/non-valides-par-user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
      }).then((response) => response.json()).then((data) => { setNotValidateFile(data);  setIsLoading(false);}).catch((error) => { console.error(error); })
    }
    getNotValidatedFile();

},[])


  return (
    <Row>
    <Col md='12' sm='12'>
      <Card title={" Fichiers en attente de validation par l'administrateur "} >
        <h1></h1>
        <Table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Fichier</th>
              <th>Date d'ajout</th>
              <th>Utilisateur</th>
            </tr>
          </thead>
          <tbody>
          {isLoading ? (
                
                  <HashLoader color="#123abc" loading={isLoading} size={50} />
               
              ) : (notValidateFile.map((item,index) => (
                <tr key={index}>
                  <td>{item.titre}</td>
                  <td>{item.description}</td>
                  <td>{item.nom}</td>
                  <td>{item.date}</td>
                  <td>{item.user.nom}</td>
                </tr>
            )))}
          </tbody>
        </Table>
      </Card>
    </Col>
  </Row>
  )
}

export default Pending;
