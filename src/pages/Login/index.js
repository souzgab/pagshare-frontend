import React from 'react';
import './styles.css';
import { Col, Row, Container, InputGroup, FormControl, Form } from "react-bootstrap";
import { createMuiTheme } from '@material-ui/core/styles';
import styled from "styled-components";
import Background from "../../assets/images/login.jpg";
import { green } from '@material-ui/core/colors';
import { NavigationBar } from "../../components/NavigationBar";

const Styles = styled.div`
  background-color: #2D2D2D;
  height: 100vh;
`;

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontSize: 22,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

// const classes = useStyles();
export function SignInSide() {
  return <Styles>
    <NavigationBar/>
      <Container fluid>
          <Row> 
            <Col xs={true} sm={true} lg={true}>
            
            </Col>

            <Col xs={true} sm={true} lg={true}> 
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label className={styled}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            </Col>
          </Row>
      </Container>
    </Styles>
  ;
}

export default SignInSide;