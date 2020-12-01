import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import Card from 'react-bootstrap/Card'
import { Col, Image, Row } from "react-bootstrap";
import logoSvg from "../../assets/images/Logo-pequeno.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Redirect(props) {
    
    const [user, setUser] = useState("");
    const [lobby, setLobby] = useState("");
    const history = useHistory();
    useEffect(() => {
        try {
          const config = {
            headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
          };
          
          localStorage.setItem('idlobby', props.computedMatch.params.idLobby)
          try {
            setUser(localStorage.getItem('id'))
            setLobby(localStorage.getItem('idlobby'))
            const urlAddUser = `https://paysharedev.herokuapp.com/v1/payshare/lobby/${lobby}/${user}`;
            axios.post(urlAddUser, config)
            .then((result) => {
                if(result.status === 200){
                    history.push("/pagamento");
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
            <Container  style={{backgroundColor: '#2d2d2d', display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '5%'}}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className="text-center">
                            <Image src={logoSvg} />
                            <Card.Title style={{ color: 'white' }}>PAYSHARE</Card.Title>
                                <Card.Text style={{ color: '#1CDC6E', fontSize: '15px', fontFamily: 'Roboto' }}>
                                    Você está sendo Redirecionado!
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