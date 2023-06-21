import { Fragment, useEffect , useState} from 'react'
import { BASE_URL } from '../../../../configs/api/url';
import { Row, Col, Card, CardBody, CardTitle, CardText , Table , Button} from 'reactstrap'

const Valid = () => {
  const [users,setUsers] = useState([]);
  const [action,setAction] = useState(false);

  useEffect(() => {
    ( async () => {
      fetch(`${BASE_URL}/user/pending`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json()).then(data => setUsers(data)).catch(error => console.error(error));
    }) ();
  },[action])

  return (
    <Row>
      <Col md='12' sm='12'>
        <Card title = { "Listes des denandes de creation de compte " } >
          <Table>
            <thead>
              <tr>
                <th>Nom </th>
                <th>Prenom</th>
                <th>Fonction</th>
                <th>Entite</th>
                <th>Email</th>
                <th>Numero Tel</th>
                <th>Adresse</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((item,index) => (
                <tr key={index}>
                  <td>{item.nom}</td>
                  <td>{item.prenom}</td>
                  <td>{item.fonction}</td>
                  <td>{item.entite}</td>
                  <td>{item.email}</td>
                  <td>{item.numero}</td>
                  <td>{item.adresse}</td>
                  <td>
                   <Button  onClick={() => {( 
                    async () => { fetch(`${BASE_URL}/user/validate/${item._id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json', 'x-auth-token' : localStorage.getItem("token") }
                      }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
                    }) ();

                    setAction(!action);
                   }} > Valider </Button>
                
                  </td>
                  <td>
                   < Button onClick={() => { setAction(!action); }} > Refuser </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  )
}

export default Valid;
