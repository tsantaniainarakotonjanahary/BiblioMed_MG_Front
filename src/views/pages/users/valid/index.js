import { Fragment, useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import { Row, Col, CardBody, CardText , CardTitle , Table , Button } from 'reactstrap'
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , Eye } from 'react-feather'

import prism from 'prismjs'

import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'




const Valid = () => {

  const [validateFile,setValidateFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getValidatedFile = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file/valides-par-user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
      }).then((response) => response.json()).then((data) => {
         setValidateFile(data);
          setIsLoading(false); 
      }).catch((error) => { console.error(error); })
    }
    getValidatedFile();
  },[])


  return (
    <Row>
      <Col md='12' sm='12'>
        <Card title={"Fichié validé par l'administrateur apres ajout "} >
        

         
            
            
              {isLoading ? (
                
                  <HashLoader


 color="#123abc" loading={isLoading} size={50} />
                
              ) : (
                <Table>
                <thead>
              <tr>
                
                <th>Titre</th>
                <th>Description</th>
                <th>Fichier</th>
                <th>Date d'ajout</th>
                <th>Utilisateur</th>
                <th></th>
              </tr>
            </thead>
              <tbody>
                {validateFile.map((item,index) => (
                <tr key={index}>
                  
                  <td>{item.titre}</td>
                  <td>{item.description}</td>
                  <td>{item.nom}</td>
                  <td>{item.date}</td>
                  <td>{item.user.nom}</td>
                  <td>
                      <a href={item.lien} download><Eye size={20} /></a>
                  </td>
                </tr>
              ))} 
            </tbody> 
            </Table>) }

            
         
        </Card>
      </Col>
    </Row>
  )
}

export default Valid;
