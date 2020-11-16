import React from "react";

import Grid from '@material-ui/core/Grid';

import NavigationBar from '../../components/NavigationBar';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import * as mu from "@material-ui/core";
import FundoSVG from "../../assets/SVG/fundo.svg";
import iphone from "../../assets/SVG/IphoneApp.svg";
import google from "../../assets/SVG/flat-ui_google.svg";
import apple from "../../assets/SVG/bx_bxl-apple.svg";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `url(${FundoSVG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
  typography: {
    fontSize: 22,
    color: '#fff',
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

export function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
       <NavigationBar title="Payshare" link="Login" to="/login" /> 
      <Container maxWidth="xg" component="main" style={{ backgroundColor: "darkgray", height: "100vh", width: "100vw" }} className={classes.heroContent}>
     
        <Grid sm={4} className="mt-5"><img className='img-fluid'
          src={iphone}
          width="380"
          height="575"
          alt="React Bootstrap logo"
        /></Grid>
        <Grid className="mt-5">
          
        </Grid>
     
      </Container>
    </React.Fragment>
  );
}

export default Home;
