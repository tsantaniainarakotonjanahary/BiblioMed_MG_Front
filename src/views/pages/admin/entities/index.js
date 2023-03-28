// ** React Importsnippet
import { Fragment, useEffect , useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, CardBody, CardText , CardTitle , Table } from 'reactstrap'

// ** Third Party Components
import prism from 'prismjs'


// ** Custom Components
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'


const Entities = () => {

  const [entities,setEntities] = useState([]);


  useEffect(() => {
    const getEntities = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/entite`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
        }).then((response) => response.json()).then((data) => { setEntities(data); }).catch((error) => { console.error(error); })
    }
    getEntities();
},[])


  return (
    <Row>
      <Col md='6' sm='12'>
        <Card title={"go"} >
          <h1>Entities</h1>

          <Table>
            <thead>
              <tr>
                <th>Nom </th>
                
              </tr>
            </thead>
            <tbody>
            {entities.map(({ _id, nom }) => (
                 <tr key={_id}>
                 <th>{nom} </th>
                 
               </tr>
          ))}
              </tbody>
             </Table>

        


        </Card>
      </Col>
     
    </Row>
  )
}

export default Entities;
