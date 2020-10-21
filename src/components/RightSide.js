import React from 'react';
import {Form, Button} from 'react-bootstrap';

const RightSide = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Digite seu email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Digite sua senha</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button type="submit"  >Entrar</Button>
            </Form>
        </div>
    )
}

export default RightSide;