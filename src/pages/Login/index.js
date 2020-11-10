import React from 'react';
import { Col, Row, Container, InputGroup, FormControl, Form, Image } from "react-bootstrap";
import styled from "styled-components";
import { NavigationBar } from "../../components/NavigationBar";
import Blobs from '../../assets/SVG/Blobs.svg'

const Styles = styled.div`
  background-color: #2D2D2D;
  height: 100vh;

  .side-img{
    width: 100%;
    height: 100%;
  }

  .col-1{

  }

  #page-login{
    
  }

  .input-main{
  }

  .input-in{
    max-height: 250px;
  }
`;

export function SignInSide() {
  return <Styles>
    <NavigationBar/>
      <Container fluid id="page-login">
          <Row> 
            <Col xs={8} sm={true} lg={true} className="col-1">
              <Image src={Blobs} className="side-img"/>
            </Col>

            <Col xs={true} sm={true} lg={true}> 
              <Form className="input-main">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label style={{
                    color: "white"
                  }}>
                    Email address
                  </Form.Label><Form.Control className="input-in" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Label style={{
                    color: "white"
                  }}>
                    Password 
                  </Form.Label><Form.Control className="input-in" type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
      </Container>
    </Styles>
  ;
}

export default SignInSide;