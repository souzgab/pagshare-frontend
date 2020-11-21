import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LobbyBar from './components/LobbyBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from './components/Modal';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import history from "../../../src/assets/images/iconBar/codicon_history.svg"
import Room from "../../../src/assets/images/iconBar/cil_room.svg"
import mercadoPago from "../../assets/images/mercado-pago-logo-4.png"

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
  }
})
)



const LobbyPage = () => {

  const [number, setNumber] = useState()
  const classes = useStyles();
  let rows = []

  function somar() {
    return setNumber(number + 1)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <LobbyBar />
      <Container maxWidth="xg" style={{ backgroundColor: "#202020", height: '120vh', width: '100vw' }}>
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
                      fontFamily: 'roboto',
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
                    fontFamily: 'roboto'
                  }} id="dropdown-basic">
                    Bem vindo(a) Vinicius Alves
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
        <Container style={{ marginTop: '2%' }}>
          <Row>
            <Col xs={8} style={{ backgroundColor: "transparent" }}>
              <Row style={{ backgroundColor: "transparent" }}>
                <Col xs={4} style={{ backgroundColor: "transparent" }}>
                  <Card className="shadow p" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px' }}>
                    <Card.Body style={{ height: '280px' }}>
                      <Card.Title style={{ color: '#45464D' }}>Overview</Card.Title>
                      <Card.Text style={{ color: '#45464D', fontSize: '15px', fontFamily: 'Roboto' }}>
                        <div className="text-white" style={{ marginTop: '10%', color: '#1CDC6E' }}>
                          <label className="ml-2" htmlFor="transaction" style={{ color: '#1CDC6E' }}>Saldo em conta</label>
                          <div><h3 className='ml-2 mt-4' style={{ color: '#1CDC6E' }}>
                            <Button
                              style={{
                                backgroundColor: 'transparent', color: '#1CDC6E',
                                fontFamily: 'roboto',
                                fontSize: "25px",
                                border: '2px dashed #1CDC6E',
                                boxSizing: 'border-box'
                              }}>R$ 1600.00
                              </Button>
                          </h3>
                          </div>
                        </div>
                        <div className="mt-5">
                          <label className="mt-4" htmlFor="transaction">Transações</label>
                          <h4 id='transaction' className='text-left text-white mt-2'>120</h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={3} style={{ backgroundColor: "transparent" }}>
                  <Row style={{ backgroundColor: "transparent" }}>
                    <Card className="shadow p" style={{ width: '240px', backgroundColor: '#1CDC6E', borderRadius: '10px' }}>
                      <Card.Body style={{ height: '102px' }}>
                        <Card.Title><img src={Room} /> Histórico de lobby</Card.Title>
                        <Card.Text className="text-left" style={{ fontSize: '15px' }}>
                          R$870.60
                    </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="text-white shadow p mt-3" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px' }}>
                      <Card.Body style={{ height: '165px' }}>
                        <Card.Title>Faça seus pagamentos com segurança</Card.Title>
                        <Card.Text>
                         
                    </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Col>
                <Col className="ml-4" xs={4} style={{ backgroundColor: "transparent" }}>
                  <Row style={{ backgroundColor: "transparent" }}>
                    <Card className="shadow p" style={{ width: '240px', backgroundColor: '#1CDC6E', borderRadius: '10px' }}>
                      <Card.Body style={{ height: '102px' }}>
                        <Card.Title><img src={history} /> Histórico de adição</Card.Title>
                        <Card.Text className="text-left" style={{ fontSize: '15px' }}>
                          R$460.78
                    </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className=" text-white mt-3 shadow p" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px' }}>

                      <Card.Body style={{ height: '165px' }}>
                        <Card.Title>Convide seus amigos e ganhe bônus 5%</Card.Title>
                        <Card.Text>
                          Cada amigo que se registrar na plataforma e fizer um pagamento ou adicionar dinheiro a carteira
                          você ganha 5% de desconto no proximo pagamento
                          <div className="text-center mt-4">
                          <Button
                          size="sm"
                            variant="success"
                            style={{
                              fontFamily: 'roboto',
                            }}>Compartilhar
                         </Button>
                         </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="mt-4" xs={12} style={{ backgroundColor: "transparent" }}>
                  <Card className="" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', fontFamily: 'roboto', width: '95%' }}>
                    <Card.Body className="text-center">
                      <Modal />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs={4} style={{ backgroundColor: "" }}>
              <Card className="shadow p mt-1" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', height: '80vh' }}>
                <Card.Title className="text-white ml-4">
                  Transações
                </Card.Title>
                <Card.Body>
                  <Card.Text style={{ color: '#1CDC6E', fontSize: '15px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque voluptates vero repellat autem maiores porro illo maxime cumque sit,
                    soluta in saepe eveniet minus cupiditate praesentium doloremque natus ullam?
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  )
}

export default LobbyPage;