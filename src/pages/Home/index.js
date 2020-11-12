import React from "react";
import Iphone from "../../assets/SVG/IphoneApp.svg";
import Google from "../../assets/SVG/flat-ui_google.svg";
import Apple from "../../assets/SVG/bx_bxl-apple.svg";
import NavigationBar from '../../components/NavigationBar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import * as mu from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: theme.palette.primary
  },
}));

export function Home() {
  const classes = useStyles();
  
  return (
  <React.Fragment>
    <CssBaseline />
        <NavigationBar title="Payshare" link="Login" to="/login"/>
          <Container maxWidth="xg" component="main" style={{backgroundColor: "darkgray", height: "100vh", width: "100vw"}} className={classes.heroContent}>
            <mu.Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Pricing
            </mu.Typography>
            <mu.Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
            >
              Quickly build an effective pricing table for your potential customers
              with this layout. It&apos;s built with default Material-UI components
              with little customization.
            </mu.Typography>
        </Container>
  </React.Fragment>
  );
}

export default Home;
