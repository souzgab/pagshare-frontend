import React from "react";
import { Container } from "react-bootstrap";

const mystyle = {
    backgroundColor: "blue",
    width: '100vw'
};

export const Layout = (props) => {
   return <Container style={mystyle} fluid>
            {props.children}
       </Container>
};
