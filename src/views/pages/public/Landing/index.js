import { Fragment, useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import { Row, Col, CardBody, CardText , CardTitle , Table , Button } from 'reactstrap'
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , Eye } from 'react-feather'

import prism from 'prismjs'

import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

const Landing = () => {

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
        <Card title={"Dashboard"} >

        </Card>
      </Col>
    </Row>
  )
}

export default Landing;
