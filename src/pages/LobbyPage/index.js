import React, { useState, useEffect } from 'react';
import LobbyBar from './components/LobbyBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ModalWallet from './components/ModalWallet';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import Modal from './components/Modal';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import history from "../../../src/assets/images/iconBar/codicon_history.svg"
import Room from "../../../src/assets/images/iconBar/cil_room.svg"
import moment from "moment"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid } from '@material-ui/core';
import LobbyInstance from '../../components/LobbyInstance'

async function findByUser() {
  const URL = `https://paysharedev.herokuapp.com/v1/payshare/user/${localStorage.getItem('id')}`
  //setando auth bearer
  const config = {
    headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
  };
  try {
    const data = await axios.get(URL, config).then((result) => {
      if (result.status === 200) {
        return result.data
      }
    }).catch((err) => {
      console.log(err)
    })
    return data
  } catch (e) {
    console.log(e)
  }
}

function handleBoolean(status){
  return status;
}

const LobbyPage = ({obj}) => {

  const hist = useHistory();

  function logout() {
    localStorage.clear();
    hist.push("/login")
  }
  const urls = {
    urlDadosLobby: `https://paysharedev.herokuapp.com/v1/payshare/lobby/lobbyUser/${localStorage.getItem('id')}`,
    urlDadosHistory: `https://paysharedev.herokuapp.com/v1/payshare/user/${localStorage.getItem('id')}`
  }

  useEffect(() => {
    let totalTransactionLobby = 0.00;
    let totalTransactionWallet = 0.00;
    try {
      
      //setando auth bearer
      const config = {
        headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
      };
      try {
        axios.get(urls.urlDadosHistory, config).then((result) => {
          console.log(result.data)
          if (result.status === 200) {
            // aqui mostra o total de transações
            setTransactionLength(result.data.transactionWallets.length + result.data.transactions.length)
            result.data.transactions.map(transaction => {
              if (transaction.status === "approved") {
                totalTransactionLobby += transaction.amount
              }
            })
            result.data.transactionWallets.map(transactionWallet => {
              if (transactionWallet.status === "approved") {
                totalTransactionWallet += transactionWallet.amount
              }
            })
            setHistoryTransaction(parseFloat(totalTransactionLobby).toFixed(2))
            setHistoryTransactionWallets(parseFloat(totalTransactionWallet).toFixed(2))

            setTransactionWallets(result.data.transactionWallets)
            setTransaction(result.data.transactions)

          }
        }).catch((err) => {
          console.log(err)
        })

        axios.get(urls.urlDadosLobby, config).then((result) => {
          if(result.status === 200){
            // console.log(result.data)
            //tratamento para remover botão de criação de lobby se ele tiver lobby ativa
            if(result.data.amount > result.data.amountTotal){
              const modalLobby = document.getElementById('lobby');
              modalLobby.style.height = '100%';
              setUserLobby(result.data);
            }
          }
        }).catch(e => console.log(e))
      } catch (e) {
        console.log(e)
      }
    } catch (e) {
      console.log(e)
    }
  }, []);

  const [dinheiro, setDinheiro] = useState("0,00")

  const [historyTransactionWallet, setHistoryTransactionWallets] = useState(0)
  const [historyTransaction, setHistoryTransaction] = useState(0)

  const [transactionWallets, setTransactionWallets] = useState([])
  const [userLobby, setUserLobby] = useState([])
  const [transaction, setTransaction] = useState([])

  const Name = localStorage.getItem('name')

  moment.locale('pt-BR')

  async function loadDatas() {
    const data = await findByUser();
    setDinheiro(data.userAmount.toFixed(2));
  }

  const [transactionLength, setTransactionLength] = React.useState(0)

  const [money, setMoney] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setMoney({ ...money, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    if (!money.showPassword) {
      loadDatas();
    }
    setMoney({ ...money, showPassword: !money.showPassword });
  }

  return (
    <React.Fragment >
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
                    <Dropdown.Item onClick={logout} >Sair</Dropdown.Item>
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
                      <Card.Title className="mb-3" style={{ color: '#45464D', fontSize: '15px' }}>Carteira</Card.Title>
                      <Card.Text style={{ color: '#45464D', fontSize: '15px', fontFamily: 'Roboto' }}>
                        <div className="text-white" style={{ marginTop: '10%', color: '#1CDC6E' }}>
                          <label className="ml-2" htmlFor="transaction" style={{ color: '#1CDC6E' }}>Saldo em conta</label>
                          <div><h3 className='ml-2 mt-4' style={{ color: '#1CDC6E' }}>
                            <Input
                              disabled
                              style={{ backgroundColor: 'transparent', color: '#ffff', fontSize: '20px', fontFamily: 'roboto', border: 'none' }}
                              id="standard-adornment-password"
                              type={money.showPassword ? 'text' : 'password'}
                              value={`R$ ${dinheiro}`}
                              onChange={handleChange('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    style={{ color: '#ffff' }}
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                  >
                                    {money.showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          </h3>
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="text-center mt-4">
                            <ModalWallet texto="Adicionar dinheiro" />
                          </div>
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
                          R$ {historyTransaction}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="text-white shadow p mt-3" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px' }}>
                      <Card.Body style={{ height: '165px' }}>
                        <Card.Title>Faça seus pagamentos com seu saldo da carteira</Card.Title>
                        <Card.Text>

                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Col>
                <Col className="ml-4" xs={4} style={{ backgroundColor: "transparent" }}>
                  <Row style={{ backgroundColor: "transparent" }}>
                    <Card className="shadow p" style={{ width: '280px', backgroundColor: '#1CDC6E', borderRadius: '10px' }}>
                      <Card.Body style={{ height: '102px' }}>
                        <Card.Title><img src={history} /> Histórico de adição</Card.Title>
                        <Card.Text className="text-left" style={{ fontSize: '15px' }}>
                          R$ {historyTransactionWallet}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className=" text-white mt-3 shadow p" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px' }}>

                      <Card.Body style={{ height: '165px' }}>
                        <Card.Title>Convide seus amigos e ganhe bônus 5%</Card.Title>
                        <Card.Text style={{ fontSize: '12px' }}>
                          Cada amigo que fizer um pagamento ou adicionar dinheiro a carteira
                          você ganha desconto no proximo pagamento.
                            <Button
                              size="sm"
                              variant="success"
                              style={{
                                fontFamily: 'roboto', fontSize: '12px'
                              }}>Compartilhar
                            </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="mt-4" xs={12} style={{ backgroundColor: "", height: '50vh' }}>
                  <Card className="" id='lobby' style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', fontFamily: 'roboto', width: '95%', height: '' }}>
                    {userLobby.amount >= userLobby.amountTotal ? <LobbyInstance obj={userLobby}/> : <Modal/>}
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs={4} style={{ backgroundColor: "" }}>
              <Card className="shadow p mt-1" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', height: '80vh' }}>
                <Card.Title className="text-white ml-4">
                  <h4 className="text-left">Históricos</h4>
                </Card.Title>
                <Card className="shadow p mt-1" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', height: '40vh', maxHeight: '40vh', overflow: 'auto', margin: '10px' }}>
                  <Card.Title className="text-white ml-4">
                    <h5 className="text-left">Transações da carteira</h5>
                  </Card.Title>
                  <Card.Body>
                    {transactionWallets.map(transactionWallet => (
                      <Card className="text-white shadow p mt-2" style={{ backgroundColor: '#2D2D2D', fontSize: '15px', margin: '10px', borderRadius: '10px' }}>
                        <Card.Body>
                          <Row>
                            <Col xs={6}>
                              <div className="" key={transactionWallet.createdAt}>{moment(transactionWallet.createdAt).format('ll')}</div>
                            </Col>
                            <Col xs={6}>
                              <div className="text-right" key={transactionWallet.amount.toFixed(2)}><ArrowForwardIcon style={{ fontSize: 'large', color: '#1CDC6E' }} /> R$ {transactionWallet.amount.toFixed(2)}</div>
                            </Col>
                          </Row>
                          <div className="text-left mt-2" style={{ color: '#1CDC6E' }} key={transactionWallet.description}>{transactionWallet.description}</div>
                        </Card.Body>
                      </Card>
                    ))}
                  </Card.Body>
                </Card>
                <Card className="shadow p mt-1" style={{ backgroundColor: '#2D2D2D', borderRadius: '10px', height: '40vh', maxHeight: '40vh', overflow: 'auto', margin: '10px' }}>
                  <Card.Title className="text-white ml-4">
                    <h5 className="text-left">Transações lobby</h5>
                  </Card.Title>
                  <Card.Body>
                    {transaction.map(transaction => (
                      <Card className="text-white shadow p mt-2" style={{ backgroundColor: '#2D2D2D', fontSize: '15px', margin: '10px', borderRadius: '10px' }}>
                        <Card.Body>
                          <Row>
                            <Col xs={6}>
                              <div className="" key={transaction.createdAt}>{moment(transaction.createdAt).format('ll')}</div>
                            </Col>
                            <Col xs={6}>
                              <div className="text-right" key={transaction.amount.toFixed(2)}><ArrowBackIcon style={{ fontSize: 'large', color: '#E74C3C' }} /> R$ {transaction.amount.toFixed(2)}</div>
                            </Col>
                          </Row>
                          <div className="text-left mt-2" style={{ color: '#1CDC6E' }} key={transaction.description}>{transaction.description}</div>
                        </Card.Body>
                      </Card>
                    ))}
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  )
}

export default LobbyPage;