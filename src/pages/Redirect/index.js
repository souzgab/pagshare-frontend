import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import Card from 'react-bootstrap/Card'
import { Col, Image, Row } from "react-bootstrap";
import logoSvg from "../../assets/images/Logo-pequeno.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Redirect(props) {
    const config = {
        headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
    };
    let data = {}
    const [user, setUser] = useState("");
    const [lobby, setLobby] = useState("");
    const history = useHistory();
    useEffect(() => {
        try {
          
          localStorage.setItem('idlobby', props.computedMatch.params.idLobby)
          try {
            setUser(localStorage.getItem('id'))
            setLobby(localStorage.getItem('idlobby'))
            const urlAddUser = `https://paysharedev.herokuapp.com/v1/payshare/lobby/${localStorage.getItem('idlobby')}/${localStorage.getItem('id')}`;
            axios.post(urlAddUser, data, config)
            .then((result) => {
                if(result.status === 200){
                    setTimeout(() => {
                        history.push("/pagamento");
                    }, 3000)
                }
            })
          } catch (e) {
            console.log(e)
          }
        } catch (e) {
          console.log(e)
        }
      }, []);

    return(
        <Container maxWidth="xg" style={{backgroundColor: '#2d2d2d', width: '100vw', height: '100vh'}}>
            <Container  style={{backgroundColor: '#2d2d2d', display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '5%',height: '50%'}}>
                <Row style={{width: '100%', height: '100%'}}>
                    <Col style={{backgroundColor: "", border: 'none'}}>
                        <Card style={{backgroundColor: "darkgrey", border: '10px', width: '100%', height: '30%'}}>
                            <Card.Body className="text-center" style={{backgroundColor: "darkgrey", borderRadius: '15px', width: '100%', height: '100%'}}>
                            <Image src={logoSvg} />
                            <Card.Title style={{ color: 'white', fontFamily: 'Roboto' }}>PAYSHARE</Card.Title>
                                <Card.Text style={{ color: 'white', fontSize: '15px', fontFamily: 'Roboto' }}>
                                    Você está sendo redirecionado!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    )
}

export default Redirect;