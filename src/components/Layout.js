import React from "react";
import { Container } from "react-bootstrap";

const mystyle = {
    color: "white",
    backgroundColor: "blue",
    fontFamily: "Arial",
    width: 'auto'
};

export const Layout = (props) => <Container fluid style={mystyle}>{props.children}</Container>;
