import { useContext, useState, useEffect } from 'react'

import { List } from 'react-feather'

import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'

import { kFormatter } from '@utils'

import { ThemeColors } from '@src/utility/context/ThemeColors'

import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import {  Table } from 'reactstrap'

// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'

// ** Images
import jsonImg from '@src/assets/images/icons/json.png'

// ** Avatar Imports
import avatar6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar20 from '@src/assets/images/portrait/small/avatar-s-20.jpg'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsDashboard = () => {
  const [top10read, setTop10read] = useState([])
  const [fileCount, setFileCount] = useState(0)
  const [top10recent, setTop10recent] = useState([])

  useEffect(() => {
    fetch('https://bibliotheque-medical-back.vercel.app/file/top10read')
      .then(response => response.json())
      .then(data => setTop10read(data))
      .catch(error => console.error(`Error fetching top 10 most read files: ${error}`))

    fetch('https://bibliotheque-medical-back.vercel.app/file/filecount')
      .then(response => response.json())
      .then(data => setFileCount(data.fileCount))
      .catch(error => console.error(`Error fetching file count: ${error}`))

    fetch('https://bibliotheque-medical-back.vercel.app/file/top10recent')
      .then(response => response.json())
      .then(data => setTop10recent(data))
      .catch(error => console.error(`Error fetching top 10 most recent files: ${error}`))
  }, [])

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='6' sm='6'>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>File Count</CardTitle>
              <h1>{fileCount}</h1>
            </CardBody>
          </Card>
        </Col>
        <Col lg='6' sm='6'>
          <h1> search</h1>
        </Col>
      </Row>
     
      <Row className='match-height'>
        <Col lg='12' sm='12'>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Top 10 Most Recent Files</CardTitle>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Theme</th>
                    <th>Sub-Theme</th>
                    
                    <th>Date Uploaded</th>
                    <th></th>
                    
                  </tr>
                </thead>
                <tbody>
                  {top10recent.map((file, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{file.titre}</td>
                      <td>{file.description}</td>
                      <td>{file.thematique}</td>
                      <td>{file.sousThematique}</td>
  
                      <td>{file.date}</td>
                      <td>
                        <a href={file.lien} >voir</a>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </Table>

            </CardBody>
          </Card>
        </Col>
      
      </Row>
      <Row className='match-height'>
        <Col lg='12' sm='12'>
            <Card>
              <CardBody>
                <CardTitle tag='h5'>Top 10 Most Read Files</CardTitle>
                <Table>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Theme</th>
                    <th>Sub-Theme</th>
                    
                    <th>Date Uploaded</th>
                    <th>Nombre des lecteurs</th>
                    <th></th>
                    
                  </tr>
                  </thead>
                  <tbody>
                    {top10read.map((file, index) => (
                      <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{file.titre}</td>
                      <td>{file.description}</td>
                      <td>{file.thematique}</td>
                      <td>{file.sousThematique}</td>
  
                      <td>{file.date}</td>
                      <th>{file.readerCount}</th>
                      <td>
                        <a href={file.lien} >voir</a>
                      </td>
                      
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
