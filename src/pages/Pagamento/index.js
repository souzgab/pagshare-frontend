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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import moment from "moment"
import Form from 'react-bootstrap/Form'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useHistory } from 'react-router-dom'
import ModalShare from '../LobbyPage/components/ModalShare';
import Wallet from '../LobbyPage/components/Wallet';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
  const urlDadosUser = `https://paysharedev.herokuapp.com/v1/payshare/user/${localStorage.getItem('id')}`

  const config = {
    headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const hist = useHistory();
  // esta pegando  a lista de usuarios que tem na lobby
  const [userPfList, setUserPfList] = useState([]);
  // valor a ser pago na lobby
  const [lobbyAmount, setLobbyAmount] = useState();
  // valor total ja recebido
  const [lobbyAmountTotal, setAmountTotal] = useState();

  const [lobbyDescription, setLobbyDescription] = useState();

  const [lobbyCreatedAt, setLobbyCreatedAt] = useState()

  const [transactionLobby, setTransactionLobby] = useState([]);

  const [userAmountLobby, setUserAmountLobby] = useState();

  const [userAmount , setUserAmount] = useState();

  const [routePayment, setRoutePayment] = useState("");

  const [idLobby, setLobbyId] = useState();

  const amount = parseFloat(userAmountLobby)

  const [dadosLobby, setDadosLobby] = useState({});
  const url = {
    urlMercadoPago: `https://paysharedev.herokuapp.com/v1/payshare/transaction/${localStorage.getItem('id')}/${amount}`,
    urlWallet: `https://paysharedev.herokuapp.com/v1/payshare/transaction/wallet-lobby/${localStorage.getItem('id')}/${amount}`
  }

  const urlPath = () => {
    switch (routePayment) {
      case "1":
        return url.urlMercadoPago;
      case "2":
        return url.urlWallet;
      default:
        break;
    }
  }
  //handleSubmit é responsável pela chamada do endpoint criação de lobby
  async function handleSubmit(event) {
    event.preventDefault();

    var data = {}
    //setando auth bearer
    const config = {
      headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
    };

    try {
      axios.post(urlPath(), data, config).then((response) => {
        if (response.status === 200 && urlPath() === url.urlWallet) {
          handleClick();
          setTimeout(
            () => {
            return hist.push('/lobby')
            }, 3000
          )
        } else if (response.status === 200 && urlPath() === url.urlMercadoPago) {
          window.open(response.data.body.initPoint, '_blank');
        }
        localStorage.removeItem('idLobby');
      }).catch(e => {
        if (new String(e).indexOf("401")) {
          return alert(" Saldo Insuficiente")
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  function logout() {
    localStorage.clear();
    hist.push("/login")
  }

  function Profile() {
    hist.push("/profile")
  }

  const onChange = (evento) => {
    const { value, name } = evento.target;
    if (value > 0) {
      // setCanPay(false);
      setRoutePayment(value);
    } else {
      // setCanPay(true)
    }
  }

  function deleteLobby() {
    var data = {}

    const URLDELETE = `https://paysharedev.herokuapp.com/v1/payshare/lobby/deleteLobby/${idLobby}`


    //setando auth bearer
    const config = {
      headers: {
        Authorization: localStorage.getItem('token').replace(/['"]+/g, ''),
      }
    };

    axios.get(URLDELETE, config).then((result) => {
      if (result.status === 200) {
        alert("Lobby encerrada com sucesso, aproveite até mais!")
        hist.push('/lobby')
      } else if (result.status === 400) {
        alert("Não é possível encerrar a lobby neste momento tente novamente!")
      }
    }).catch((err) => {
      console.log(err)
      alert("Não é possível encerrar a lobby neste momento tente novamente!")
    })

  }

  useEffect(() => {
    try {

      axios.get(urlDadosUser, config).then((result) => {
        if (result.status === 200) {
          setUserAmountLobby(result.data.userAmountLobby)
          setUserAmount(result.data.userAmount.toFixed(2))
        }
      })

      axios.get(urlDadosLobby, config).then((result) => {
        if (result.status === 200) {
          setLobbyAmount(result.data.amount)
          setAmountTotal(result.data.amountTotal)
          setLobbyDescription(result.data.orderDescription)
          setLobbyCreatedAt(result.data.creationDate)
          setUserPfList(result.data.userPfList);
          setTransactionLobby(result.data.transactions)
          setLobbyId(result.data.id)
          setDadosLobby(result.data)
        }
      });
    } catch (Error) {
      throw new Error();
    }
  }, []);

  const classes = useStyles();

  const Name = localStorage.getItem('name')

  return (
    <React.Fragment>
      <CssBaseline />
      <LobbyBar />
      <Container maxWidth="xg" style={{ backgroundColor: "#202020", height: '120vh', width: '100vw' }}>
        <Snackbar message="Sucesso!" open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" style={{ fontSize: '14px'}}>
            Pagamento Efetuado com Wallet!
          </Alert>
        </Snackbar>
        <Row className="mb-5" style={{ marginTop: '1%' }}>
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
                    <Dropdown.Item onClick={Profile}>Minha conta</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
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
                            <div className="ml-2 mt-3 text-left" htmlFor="transaction" style={{ color: '#F7D147', fontSize: "20px", fontFamily: 'roboto' }}>R$ {lobbyAmount}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Card className="mt-5" style={{ backgroundColor: 'transparent', border: 'none', maxHeight: '50vh', overflow: 'auto', overflowX: 'hidden' }}>
                      <Card.Body>
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
                                {user.userAmountLobby === 0.00 ? <label className="mt-4" style={{ color: '#1CDC6E', fontSize: '15px' }}>Pago</label> : <label className="mt-4" style={{ color: '#F7D147', fontSize: '15px' }}>R$ {user.userAmountLobby.toFixed(2)}</label>}
                              </Col>
                              <Col xs={12}><hr style={{ width: '100%' }} /></Col>
                            </Row>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>

                    <Row style={{ backgroundColor: '',  width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                      <Col xs={6} style={{
                        backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        height: '100%', padding: '5px', width: '10%', alignItems: 'flex-start'
                      }}>
                        <div style={{ backgroundColor: '',  width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                          <Button
                            onClick={deleteLobby}
                            variant="success"
                            style={{
                              border: 'none',
                              fontFamily: 'roboto', fontSize: '15px', backgroundColor: 'transparent', color: '#1CDC6E', alignItems: 'center', justifyContent: 'center'
                            }}><HighlightOffIcon style={{ fontSize: '15px', color: '#ffff'}} /> Finalizar lobby
                          </Button>
                          <ModalShare texto="Compartilhar Lobby" idLobby={dadosLobby.id} obj={dadosLobby}/>
                        </div>
                      </Col>
                      <Col xs={6} className="text-right" style={{ fontSize: '15px' }}>
                        <div className="mt-5" style={{ backgroundColor: 'transparent' }}>
                          <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '15%' }}>Valor recebido:</label>
                          <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '5%', fontSize: '20px' }}>R$ {lobbyAmountTotal ? lobbyAmountTotal.toFixed(2) : '0.00'}</label>
                        </div>
                        <div className="mt-6" style={{ backgroundColor: 'transparent' }}>
                          <label className="mt-4" htmlFor="transaction" style={{ color: '#1CDC6E', marginLeft: '15%', fontSize: '12px' }}>Descrição: {lobbyDescription}</label>
                          <label className="mt-4" htmlFor="transaction" style={{ color: 'white', marginLeft: '5%', fontSize: '12px' }}>Data de criação: {moment(lobbyCreatedAt).format('ll')}</label>
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
                      {transactionLobby.map(transaction => (
                        <Card className="text-white shadow p mt-2" style={{ backgroundColor: '#2D2D2D', fontSize: '15px', margin: '10px', borderRadius: '10px' }}>
                          <Card.Body>
                            <Row>
                              <Col xs={6}>
                                <div className="" key={transaction.createdAt}>{moment(transaction.createdAt).format('ll')}</div>
                              </Col>
                              <Col xs={6}>
                                <div className="text-right" key={transaction.amount.toFixed(2)}><ArrowForwardIcon style={{ fontSize: 'large', color: '#1CDC6E' }} /> R$ {transaction.amount.toFixed(2)}</div>
                              </Col>
                            </Row>
                            <div className="text-left mt-2" style={{ color: '#1CDC6E' }} key={transaction.description}>{transaction.description}</div>
                            <div className="text-left mt-2" style={{ color: '#1CDC6E' }} key={transaction.cupomUser}>{transaction.cupomUser}</div>
                          </Card.Body>
                        </Card>
                      ))}
                    </Card.Body>
                  </Card>
                  <Container>
                    <form onSubmit={handleSubmit} onChange={onChange} defaultValue="0">
                      <Row style={{ backgroundColor: '' }}>
                        <Col xs={12} className="mb-5">
                          <Form.Group hidden={userAmountLobby === 0 ? true : false} controlId="exampleForm.ControlSelect1" style={{ backgroundColor: "" }}>
                          <h4 style={{ color: '#1CDC6E', fontSize: '12px' }}>Sua Wallet: <Wallet/></h4>
                            <Form.Label className="text-white mt-5" style={{ fontSize: '15px' }}>Forma de pagamento</Form.Label>
                            <Form.Control disabled={userAmountLobby === 0 ? true : false} name="select" as="select" style={{ border: 'solid 1px #1CDC6E', backgroundColor: "transparent", color: 'white' }}>
                              <option style={{color:'black'}} value="0">Selecione uma opção</option>
                              <option style={{color:'black'}} value="1">Mercado Pago</option>
                              <option style={{color:'black'}} value="2">Wallet</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="" style={{ backgroundColor: '' }}>
                        <Col xs={12} className="text-center">
                          <Button
                            type="submit"
                            variant="success"
                            hidden={userAmountLobby === 0 ? true : false}
                            style={{
                              fontFamily: 'Roboto', fontSize: '20px', backgroundColor: '#1CDC6E', color: '#ffff',
                              height: '100%',
                              width: '100%',
                            }}>Pagar
                         </Button>
                          <span style={{
                            fontFamily: 'Roboto', fontSize: '20px', color: '#ffff',
                            height: '100%',
                            width: '100%',
                          }} hidden={userAmountLobby === 0 ? false : true}>Obrigado, pagamento já efetuado!</span>
                        </Col>
                      </Row>
                    </form>
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

