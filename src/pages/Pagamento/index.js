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
import Grid from '@material-ui/core/Grid';
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
  headerPay:{
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "red"
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


const LobbyPage = () => {
  const urlDadosLobby = `https://paysharedev.herokuapp.com/v1/payshare/lobby/lobbyUser/${localStorage.getItem('id')}`;
  const config = {
    headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
  };

  
  const [userPfList, setUserPfList] = useState([]);

  useEffect(() => {
    try{
      axios.get(urlDadosLobby, config).then((result) => {
        if(result.status === 200){
          console.log(result.data)
          setUserPfList(result.data.userPfList);
        }
      });
    }catch(Error){
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
        <Container maxWidth="xg" style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <Row style={{ backgroundColor: "yellow", height: '100%' }}>
            <Col xs={8} style={{ backgroundColor: "green",display: 'grid', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Card className="shadow p" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', width: '100%' }}>
                <Card.Body>
                  
                  <Grid className={classes.headerPay}>
                    <Card.Title style={{ color: 'white', fontSize: '20px',width: '40%' }}>Sala de pagamento</Card.Title>
                      <div className="text-white" style={{ color: '#1CDC6E', width: '40%', backgroundColor: 'blue'}}>
                        <div className="ml-2" htmlFor="transaction" style={{ color: 'white' }}>Total a pagar: </div>
                        <div className="ml-2" htmlFor="transaction" style={{ color: 'yellow', fontSize: "20px", fontFamily: 'roboto' }}>R$ 200.00</div>
                      </div>
                  </Grid>

                  <Card.Text style={{ backgroundColor: 'white', fontSize: '15px', fontFamily: 'Roboto' }}>
                    
                    {/* Aqui repete usuário */}
                    <div>
                      {userPfList.map(user => (
                        <div className="mt-5" style={{ backgroundColor: 'transparent', height: '10vh', width: '65vw' }}>
                          <AccountCircleIcon style={{ fontSize: 40, color: '#C4C4C4' }}>Icon </AccountCircleIcon>
                            <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>{user.name}</label>
                              <ShoppingCartIcon style={{ fontSize: 20, color: '#C4C4C4', marginLeft:'20%' }}>Icon </ShoppingCartIcon>
                              <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>Valor a pagar:</label>
                            <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '10%' }}>{user.userAmountLobby}</label>
                          <hr style={{ marginTop: '1%', width: '90%' }} />
                        </div>
                      ))}
                        <div className="mt-5" style={{ backgroundColor: 'transparent', height: '10vh', width: '65vw' }}>
                          <AccountCircleIcon style={{ fontSize: 40, color: '#C4C4C4' }}>Icon </AccountCircleIcon>
                            <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>x</label>
                              <ShoppingCartIcon style={{ fontSize: 20, color: '#C4C4C4', marginLeft:'20%' }}>Icon </ShoppingCartIcon>
                              <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>Valor a pagar:</label>
                            <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '10%' }}>x</label>
                          <hr style={{ marginTop: '1%', width: '90%' }} />
                        </div>
                        <div className="mt-5" style={{ backgroundColor: 'transparent', height: '10vh', width: '65vw' }}>
                          <AccountCircleIcon style={{ fontSize: 40, color: '#C4C4C4' }}>Icon </AccountCircleIcon>
                            <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>x</label>
                              <ShoppingCartIcon style={{ fontSize: 20, color: '#C4C4C4', marginLeft:'20%' }}>Icon </ShoppingCartIcon>
                              <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>Valor a pagar:</label>
                            <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '10%' }}>x</label>
                          <hr style={{ marginTop: '1%', width: '90%' }} />
                        </div>
                        <div className="mt-5" style={{ backgroundColor: 'transparent', height: '10vh', width: '65vw' }}>
                          <AccountCircleIcon style={{ fontSize: 40, color: '#C4C4C4' }}>Icon </AccountCircleIcon>
                            <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>x</label>
                              <ShoppingCartIcon style={{ fontSize: 20, color: '#C4C4C4', marginLeft:'20%' }}>Icon </ShoppingCartIcon>
                              <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>Valor a pagar:</label>
                            <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '10%' }}>x</label>
                          <hr style={{ marginTop: '1%', width: '90%' }} />
                        </div>
                        <div className="mt-5" style={{ backgroundColor: 'transparent', height: '10vh', width: '65vw' }}>
                          <AccountCircleIcon style={{ fontSize: 40, color: '#C4C4C4' }}>Icon </AccountCircleIcon>
                            <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>x</label>
                              <ShoppingCartIcon style={{ fontSize: 20, color: '#C4C4C4', marginLeft:'20%' }}>Icon </ShoppingCartIcon>
                              <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '10%' }}>Valor a pagar:</label>
                            <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '10%' }}>x</label>
                          <hr style={{ marginTop: '1%', width: '90%' }} />
                        </div>

                    </div>

                    <Button
                      variant="success"
                      style={{
                        fontFamily: 'roboto', fontSize: '12px', backgroundColor: 'transparent', color: '#1CDC6E', marginTop: '5%', marginLeft: '4%'
                      }}>Compartilhar
                  </Button>
                    <div className="mt-6" style={{ backgroundColor: 'transparent', height: '10vh', width: '30vw', marginLeft: '65%', marginTop: '-7%' }}>
                      <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '15%' }}>Valor recebido:</label>
                      <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '5%' }}>R$ 133,20</label>
                    </div>
                    <div className="mt-6" style={{ backgroundColor: 'transparent', height: '10vh', width: '30vw', marginLeft: '60%', marginTop: '-3%', }}>
                      <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '15%', fontSize: '12px' }}>Recebinte:</label>
                      <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '5%', fontSize: '12px' }}>Pizza Data: 12/11/2020 21:30</label>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4} style={{ backgroundColor: "red" }}>

            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  )
}

export default LobbyPage;

