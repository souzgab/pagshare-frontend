import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import {Button} from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import styled from "styled-components";
import Background from "../../assets/images/login.jpg";
import { green } from '@material-ui/core/colors';
import { NavigationBar } from "../../components/NavigationBar";

const Styles = styled.div`

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



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#6EDC1C',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: '#202020',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const classes = useStyles();
export function SignInSide() {
  return <Styles>
    <NavigationBar/>
      <Container fluid>
          <Row> 
            <Col xs={6}> Coluna da imagem
            
            </Col>

            <Col xs={6}> Coluna do Form
            
            </Col>
          </Row>
      </Container>
    </Styles>
  ;
}

export default SignInSide;