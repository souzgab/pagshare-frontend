import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";
import iphone from "../assets/IphoneApp.svg";
const Styles = styled.div`
 
`;

export const Jumbo = () => (
  <Styles>
  <Jumbotron>
    <h1>Compartilhe seus pagamentos</h1>
    <img
            src={iphone}
            width="380"
            height="575"
            alt="React Bootstrap logo"
          />
    <p>
      Crie sua lobby, convide seus amigos.<br/>
      É fácil, rápido e seguro.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  </Styles>
);
