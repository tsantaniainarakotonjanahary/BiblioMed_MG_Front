// ** React Importsnippet
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, CardBody, CardText , CardTitle } from 'reactstrap'

// ** Third Party Components
import prism from 'prismjs'


// ** Custom Components
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'


const Valid = () => {


  return (
    <Row>
      <Col md='6' sm='12'>
        <Card title={"go"} >
          <h1>Valide</h1>
        </Card>
      </Col>
     
    </Row>
  )
}

export default Valid;
