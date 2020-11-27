import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LobbyBar from '../LobbyPage/components/LobbyBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Form from 'react-bootstrap/Form'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    //   backgroundImage: `url(${FundoSVG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: "#20202033",
    height: "100vh",
    display: "flex",
    width: "100vw",
    justifyContent: "flex-start",
    alignItems: "center",
    direction: "row"

    // Alterar o background color acima para #202020 quando terminar a tela
  },

  mainPaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    height: "100vh",
    width: "100%",
    backgroundColor: "#202020"
  },

  image: {
    width: 128,
    height: 128,
  },
  headerPay: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  footerPay: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "primary"
  },
})
)


const PagamentoPage = () => {
  const urlDadosLobby = `https://paysharedev.herokuapp.com/v1/payshare/lobby/lobbyUser/${localStorage.getItem('id')}`;
  const config = {
    headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
  };


  const [userPfList, setUserPfList] = useState([]);

  useEffect(() => {
    try {
      axios.get(urlDadosLobby, config).then((result) => {
        if (result.status === 200) {
          console.log(result.data)
          setUserPfList(result.data.userPfList);
        }
      });
    } catch (Error) {
      throw new Error();
    }
  }, []);

  console.log(userPfList);

  const classes = useStyles();

  const Name = localStorage.getItem('name')

  return (
    <React.Fragment>
      <CssBaseline />
      <LobbyBar />
      <Container maxWidth="xg" style={{ backgroundColor: "#202020", height: '120vh', width: '100vw'}}>
        <Row style={{ marginTop: '6%' }}>
          <Col xs={4} style={{ backgroundColor: "transparent" }}>
            <Card className=" mb-5" style={{ backgroundColor: 'transparent', borderRadius: '10px', border: 'none' }}>
              <Card.Body style={{ height: '' }}>
                <Card.Title style={{ color: 'white' }}>PAYSHARE</Card.Title>
                <Card.Text style={{ color: '#1CDC6E', fontSize: '15px', fontFamily: 'Roboto' }}>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} style={{ backgroundColor: "transparent" }}>
            <Card className=" mb-5" style={{ backgroundColor: 'transparent', borderRadius: '10px', border: 'none' }}>
              <Card.Body style={{ height: '' }}>
                <Card.Text className="text-right" style={{ color: '#1CDC6E', fontFamily: 'Roboto' }}>
                  <Button
                    variant="success"
                    style={{
                      fontFamily: 'roboto', fontSize: '18px',
                    }}>Suporte
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} style={{ backgroundColor: "transparent" }}>
            <Card className="text-right mb-5" style={{ backgroundColor: 'transparent', borderRadius: '10px', border: 'none' }}>
              <Card.Body style={{ height: '' }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" style={{
                    fontFamily: 'roboto', fontSize: '18px'
                  }} id="dropdown-basic">
                    Bem vindo(a) {Name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Minha conta</Dropdown.Item>
                    <Dropdown.Item href="/login">Sair</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Card.Text style={{ color: '#1CDC6E', fontSize: '15px', fontFamily: 'Roboto' }}>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*Estrutura da lobby*/}
        <Container maxWidth="xg" style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <Row style={{ backgroundColor: "", height: '100%' }}>
            <Col xs={8} style={{ backgroundColor: "" }}>
              <Card className="shadow p" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', width: '100%' }}>
                <Container>
                  <Card.Body>
                    <Row style={{ backgroundColor: '' }}>
                      <Col xs={6}>
                        <Card.Title style={{ color: 'white', fontSize: '25px', fontFamily: 'roboto' }}>Sala de pagamento</Card.Title>
                      </Col>
                      <Col xs={6} className="text-right">
                        <Row>
                          <Col xs={8}>
                            <div className="ml-2 mt-3" htmlFor="transaction" style={{ color: 'white', fontSize: '20px', fontFamily: 'roboto' }}>Total a pagar: </div>
                          </Col>
                          <Col xs={4}>
                            <div className="ml-2 mt-3 text-left" htmlFor="transaction" style={{ color: '#F7D147', fontSize: "20px", fontFamily: 'roboto' }}>R$1300</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Card className="mt-5" style={{ backgroundColor: 'transparent', border: 'none', maxHeight: '50vh', overflow: 'auto', overflowX: 'hidden' }}>
                      <Card.Body>
                        {/* Aqui repete usuário */}
                        <div>
                          {userPfList.map(user => (
                            <Row className="mb-2" style={{ backgroundColor: '' }}>
                              <Col xs={6} style={{ backgroundColor: '', fontFamily: 'Roboto' }}>
                                <AccountCircleIcon style={{ fontSize: '50px', color: '#C4C4C4' }}>Icon </AccountCircleIcon>
                                <label className="mt-4 ml-5 text-white" style={{ fontSize: '15px' }}>{user.name}</label>
                              </Col>
                              <Col xs={2}>
                                <ShoppingCartIcon className="mt-3" style={{ fontSize: '25px', color: '#C4C4C4' }}>Icon </ShoppingCartIcon>
                              </Col>
                              <Col xs={4} style={{ backgroundColor: '' }}>
                                <label className="mt-4 mr-5" style={{ color: 'white', fontSize: '15px' }}>Valor a pagar:</label>
                                <label className="mt-4" style={{ color: '#F7D147', fontSize: '15px' }}>R$ {user.userAmountLobby}</label>
                              </Col>
                              <Col xs={12}><hr style={{ width: '100%' }} /></Col>
                            </Row>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>

                    <Row style={{ backgroundColor: '' }}>
                      <Col xs={6}>
                        <AttachFileIcon style={{ fontSize: '15px', color: '#ffff', marginTop: '10%' }} />
                        <Button
                          variant="success"
                          style={{
                            border: 'none',
                            fontFamily: 'roboto', fontSize: '15px', backgroundColor: 'transparent', color: '#1CDC6E',
                            marginTop: '10%'
                          }}>Compartilhar
                         </Button>
                      </Col>
                      <Col xs={6} className="text-right" style={{ fontSize: '15px' }}>
                        <div className="mt-5" style={{ backgroundColor: 'transparent' }}>
                          <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '15%' }}>Valor recebido:</label>
                          <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '5%', fontSize: '20px' }}>R$ 133,20</label>
                        </div>
                        <div className="mt-6" style={{ backgroundColor: 'transparent' }}>
                          <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '15%', fontSize: '12px' }}>Recebinte:</label>
                          <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '5%', fontSize: '12px' }}>Pizza Data: 12/11/2020 21:30</label>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Container>
              </Card>
            </Col>
            <Col xs={4} style={{ backgroundColor: "" }}>
              <Card className="shadow p mt-1" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', height: '80vh' }}>
                <Card.Title className="text-white ml-4">
                  <h3 className="text-left">Detalhes do pagamento</h3>
                </Card.Title>
                <Card.Body>
                  <Card className="shadow p mt-1" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', height: '40vh', maxHeight: '40vh', overflow: 'auto', margin: '10px' }}>
                    <Card.Title className="text-white ml-4">
                      <h5 className="text-left">Transações da lobby</h5>
                    </Card.Title>
                    <Card.Body>
                      <Card className="text-white shadow p mt-2" style={{ backgroundColor: '#2D2D2D', fontSize: '15px', margin: '10px', borderRadius: '10px' }}>
                        <Card.Body>
                          <Row>
                            <Col xs={6}>
                              <div className="">dwadawd</div>
                            </Col>
                            <Col xs={6}>
                              <div className="text-right"><ArrowForwardIcon style={{ fontSize: 'large', color: '#1CDC6E' }} />dawdaw</div>
                            </Col>
                          </Row>
                          <div className="text-left mt-2" style={{ color: '#1CDC6E' }}>dawd</div>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
                  <Container>
                  <Row style={{ backgroundColor: '' }}>
                    <Col xs={12} className="mb-5">
                      <Form.Group controlId="exampleForm.ControlSelect1" style={{backgroundColor:""}}>
                        <Form.Label className="text-white mt-5" style={{fontSize:'15px'}}>Forma de pagamento</Form.Label>
                        <Form.Control as="select" style={{border:'solid 1px #1CDC6E' , backgroundColor:"transparent" , color:'white'}}>
                          <option className="text-dark">Mercado Pago</option>
                          <option className="text-dark">Wallet</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="" style={{ backgroundColor: '' }}>
                    <Col xs={12} className="text-center">
                      <Button
                        variant="success"
                        style={{
                          fontFamily: 'Roboto', fontSize: '20px', backgroundColor: '#1CDC6E', color: '#ffff',
                          height: '100%',
                          width: '100%',
                        }}>Pagar
                         </Button>
                    </Col>
                  </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment >
  )
}

export default PagamentoPage;

