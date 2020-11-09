import React from "react";
import iphone from "../../assets/SVG/IphoneApp.svg";
import styled from "styled-components";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import { Jumbotron, Button } from "react-bootstrap";
import google from "../../assets/SVG/flat-ui_google.svg";
import apple from "../../assets/SVG/bx_bxl-apple.svg"



const Styles = styled.div`
  .jumbotron{
    background: transparent;
  }

  .h1Text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    color: #1CDC6E;
  }

  .textBody{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    color: #FFFFFF;
  }

  .btn-primary {
    background: rgba(28, 220, 110, 0.9);
    border-radius: 5px;   
  }
  .btn-secondary {
    background: #424242;
    border-radius: 5px;
    border-style : none;;
  }
  background-color: #2D2D2D;
`;
export function Home() {
  return <Styles>
    <Container>
      <Row>
        <Col sm={4} className="mt-5"><img className='img-fluid'
          src={iphone}
          width="380"
          height="575"
          alt="React Bootstrap logo"
        /></Col>
        <Col className="mt-5">
          <Jumbotron className="jumbotron mt-5">
            <h1 className="h1Text">Compartilhe seus pagamentos</h1>
            <p className="textBody">
              Crie sua lobby, convide seus amigos.<br />
              É fácil, rápido e seguro.
          </p>
            <p className="mt-5">
              <Button className="btn-secondary" variant="secondary"><img
                src={google}
                width="30"
                height="30"
                alt="React Bootstrap logo"
              /> Google Play</Button>
              <Button className="btn-secondary ml-3" variant="secondary"><img
                src={apple}
                width="30"
                height="30"
                alt="React Bootstrap logo"
              /> Apple Store</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </Styles>;
}

export default Home;
