import React from "react";
import "../../assets/styles/form.css";
import { Jumbotron, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavigationBar from '../../components/NavigationBar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FundoSVG from "../../assets/SVG/fundo.svg";
import iphone from "../../assets/SVG/IphoneApp.svg";
import google from "../../assets/SVG/flat-ui_google.svg";
import apple from "../../assets/SVG/bx_bxl-apple.svg";

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
  margin: {
    marginTop: "15vh"
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar title="Payshare" link="Login" to="/login" />
      <Container maxWidth="xg" component="main" style={{ height: "100vh", width: "100vw" }} className={classes.heroContent}>
        <Container style={{ backgroundColor: "transparent", height: "100vh", width: "100vw", fontFamily:"Roboto"}}>
          <Row style={{ backgroundColor: "transparent" }}>
            <Col xs={4} style={{ backgroundColor: "transparent" }}>
              <img className={classes.margin}
                src={iphone}
                width="500px"
                height="500px"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col xs={6} style={{ backgroundColor: "transparent" }}>
              <Jumbotron className="jumbotron" style={{ marginTop: "110px" }}>
                <h1 className="h1Text" style={{ color: "#1CDC6E" }}>Compartilhe seus pagamentos</h1>
                <p className="textBody">
                  Crie sua lobby, convide seus amigos.<br/>
              É facil é rapido e seguro.
          </p>
                <p className="mt5">
                  <Button className="btn-secondary" variant="secondary" style={{ fontFamily: "Roboto" }}><img
                    src={google}
                    width="30"
                    height="30"
                    alt="React Bootstrap logo"
                  /> Google Play</Button>
                  <Button className="btn-secondary ml-3" variant="secondary" style={{ fontFamily: "Roboto" }}><img
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
      </Container>
    </React.Fragment>
  );
}

export default Home;
