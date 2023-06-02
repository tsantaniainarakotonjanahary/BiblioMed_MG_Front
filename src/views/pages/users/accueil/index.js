import { useContext, useState, useEffect } from 'react'
import Downshift from 'downshift'
import { List } from 'react-feather'

import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'

import { kFormatter } from '@utils'

import { ThemeColors } from '@src/utility/context/ThemeColors'

import { Row, Col, Card, CardHeader, CardTitle, CardBody , Form , FormGroup , Label , Input , Button} from 'reactstrap'
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

  const [allFiles, setAllFiles] = useState([])



  const searchFields = ['thematique', 'sousThematique', 'nom']


const getFilteredItemsByNom = (value) => {
  if (!value) {
    return []
  }

  return allFiles.filter(file => file['nom']?.toLowerCase().includes(value.toLowerCase()))
}




  useEffect(() => {
    fetch('https://bibliotheque-medical-back.vercel.app/file/allfiles')
    .then(response => response.json())
    .then(data => setAllFiles(data))
    .catch(error => console.error(`Error fetching all files: ${error}`))

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
              <CardTitle tag='h5'>Nombre de fichier disponible</CardTitle>
              <h1>{fileCount}</h1>
              </CardBody>
          </Card>
        </Col>
        <Col lg='6' sm='6'>
        <Card>
            <CardBody>
              <CardTitle tag='h5'>Recherche</CardTitle>


              <Downshift onChange={selection => console.log('selected item', selection)} itemToString={item => (item ? `${item.nom}` : '')} >
  {({
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
    getRootProps
  }) => (
    <div {...getRootProps({}, {suppressRefError: true})}>
      <Form>
        <FormGroup>
          <Label {...getLabelProps()}>Recherche par Nom de fichier</Label>
          <Input {...getInputProps()} />
        </FormGroup>
      </Form>
      <Table {...getMenuProps({ refKey: '' })}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Thematique</th>
            <th>Sous-Thematique</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isOpen &&
            getFilteredItemsByNom(inputValue).map((item, index) => (
              <tr
                {...getItemProps({
                  key: item._id,
                  index,
                  item,
                  style: {
                    backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                    fontWeight: selectedItem === item ? 'bold' : 'normal',
                  },
                })}
              >
                <td>
                  {item.nom}
                </td>
                <td>
                  {item.thematique}
                </td>
                <td>
                  {item.sousThematique}
                </td>
                <td>
                  <Button color="primary" href={item.lien} target="_blank">View</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )}
</Downshift>

            </CardBody>
          </Card>
        </Col>
      </Row>
     
      <Row className='match-height'>
        <Col lg='12' sm='12'>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>10 fichiers le plus recents</CardTitle>
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
                <CardTitle tag='h5'>10 fichiers le plus lu </CardTitle>
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
