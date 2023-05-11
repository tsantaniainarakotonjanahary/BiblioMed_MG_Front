import { Fragment, useEffect , useState  } from 'react'
import { Row, Col, CardBody, CardText , CardTitle , Table  , Button} from 'reactstrap'
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , Eye} from 'react-feather'
import Modal from 'react-bootstrap/Modal';

import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'
import HashLoader from 'react-spinners/HashLoader'

import FileViewer from 'react-file-viewer';

const ByEntity = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentFile, setCurrentFile] = useState({ file: '', type: '' });
  const [notValidateFile,setNotValidateFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShowModal(false);

  const fileTypes = {
    'png': 'png',
    'jpeg': 'jpeg',
    'jpg': 'jpeg',
    'gif': 'gif',
    'bmp': 'bmp',
    'pdf': 'pdf',
    'csv': 'csv',
    'xlsx': 'xlsx',
    'docx': 'docx',
    'mp4': 'mp4',
    'webm': 'webm',
    'mp3': 'mp3',
    // Add more if needed
  };

  const getTypeFromLink = (link) => {
    const fileName = link.split('?')[0];  
    const extensionWithExtra = fileName.split('.').pop();
  
    let extension = extensionWithExtra.substring(0, 3);
  
    if (['xlsx', 'docx'].includes(extensionWithExtra.substring(0, 4))) {
      extension = extensionWithExtra.substring(0, 4);
    }
    
    return fileTypes[extension];
  };
  
  

  useEffect(() => {
    setIsLoading(true);
    const getNotValidatedFile = async () => {
      console.log(`https://bibliotheque-medical-back.vercel.app/file/valides-par-mon-entite/${JSON.parse(localStorage.getItem("userData")).idEntite}`);
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


    const markAsRead = async (fileId, fileLink, fileType) => {
      console.log(fileId);
      try {
        const response = await fetch(`https://bibliotheque-medical-back.vercel.app/file/read/${fileId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token" : localStorage.getItem("token"),
          }
        });

        if (!response.ok) {
          throw new Error('Failed to mark the file as read');
        }

        setCurrentFile({ file: fileLink, type: fileType }); // set current file to be viewed
        setShowModal(true); // show the modal with the FileViewer

      } catch (error) {
        console.error(error);
      }
    }


  return (
    <Row>
    <Col md='12' sm='12'>
      <Card title={"Fichiers partagé dans mon entite "} >
          <Modal show={showModal} onHide={handleClose} fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title>File Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FileViewer
          fileType={currentFile.type}
          filePath={currentFile.file}
        />
      </Modal.Body>
    </Modal>


      <Table>
          <thead>
            <tr>
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
              <tr>
                <td colSpan="7">
                  <div className="spinner">
                    <HashLoader color="#123abc" loading={isLoading} size={50} />
                  </div>
                </td>
              </tr>
            ) : (
              notValidateFile.map((item, index) => (
                <tr key={index}>
                  <td>{item.titre}</td>
                  <td>{item.description}</td>
                  <td>{item.nom}</td>
                  <td>{item.date}</td>
                  <td>{item.user.nom}</td>
                  <td>
                    <Button onClick={() => markAsRead(item._id, item.lien, getTypeFromLink(item.lien))}>
                      <Eye size={20} />
                    </Button>
                    
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Col>
  </Row>
  )
}

export default ByEntity;

