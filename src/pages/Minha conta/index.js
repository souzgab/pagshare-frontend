import React, { useState, useEffect } from 'react';
import LobbyBar from '../LobbyPage/components/LobbyBar'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const Profile = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState("");


    const urlDadosUser = `https://paysharedev.herokuapp.com/v1/payshare/user/${localStorage.getItem('id')}`


    useEffect(() => {
        try {
          
            const config = {
                headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
            };

            axios.get(urlDadosUser, config).then((result) => {
                if (result.status === 200) {
                    setEmail(result.data.email)
                    setEndereco(result.data.address);
                    setCidade(result.data.city);
                    setEstado(result.data.state);
                    setCep(result.data.cep);
                }
            })

        } catch (Error) {
            throw new Error();
        }
    }, []);

    const hist = useHistory();
    function logout() {
        localStorage.clear();
        hist.push("/login")
    }

    const Name = localStorage.getItem('name')
    return (
        <React.Fragment>
            <CssBaseline />
            <LobbyBar />
            <Container maxWidth="xg" style={{ backgroundColor: "#202020", height: '120vh', width: '100vw' }}>
                <Row>
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
                <Container style={{ marginTop: "7%" }}>
                    <Row>
                        <Col xs={12} style={{ backgroundColor: "" }}>
                            <Card className='shadow p mt-2' style={{ backgroundColor: '#2D2D2D', fontSize: '15px', margin: '10px', borderRadius: '10px' }}>
                                <Card.Title className="text-center text-white" style={{ fontSize: "20px" }}>
                                    Minha Conta
                                </Card.Title>
                                <Card.Body>
                                    <Card style={{ backgroundColor: '#2D2D2D', fontSize: '15px', margin: '10px', borderRadius: '10px' }}>
                                        <Card.Body>
                                            <Form className="text-white" style={{ fontFamily: "Roboto" }}>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control style={{ fontFamily: "Roboto" }} type="email" placeholder="Enter email" value={email} />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control style={{ fontFamily: "Roboto" }} type="password" placeholder="Password" />
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Group controlId="formGridAddress1">
                                                    <Form.Label>Endereço</Form.Label>
                                                    <Form.Control style={{ fontFamily: "Roboto" }} value={endereco}/>
                                                </Form.Group>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Label>Cidade</Form.Label>
                                                        <Form.Control style={{ fontFamily: "Roboto" }} value={cidade}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <Form.Label>Estado</Form.Label>
                                                        <Form.Control style={{ fontFamily: "Roboto" }} value={estado} />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridZip">
                                                        <Form.Label>Cep</Form.Label>
                                                        <Form.Control style={{ fontFamily: "Roboto" }} value={cep} />
                                                    </Form.Group>
                                                </Form.Row>
                                                <Button disabled="true" className="mt-5" variant="success" type="submit" style={{ width: "200px", fontFamily: "Roboto" }}>
                                                    Atualizar
                                                 </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </React.Fragment>
    )
}

export default Profile;