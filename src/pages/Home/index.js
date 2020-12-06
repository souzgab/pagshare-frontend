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
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PublicIcon from '@material-ui/icons/Public';
import CardTime from "../../components/CardTime"
import VerticalMenu from '../../components/VerticalMenu'

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

  const objMenu = {
    inicio: "#inicio",
    visao: "#visao",
    time: "#time"
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar title="Payshare" link="Login" to="/login" />   
      <Container maxWidth="xg" component="main" style={{ height: "100vh", width: "100vw" }} className={classes.heroContent}>  
      <div style={{display: 'flex', flexDirection:"row-reverse", alignContent: 'flex-end', justifyContent: 'end', position: 'fixed', top: '35%', width: '90%'}}>
        <div>
          <VerticalMenu obj={objMenu} style={{zIndex: 9999}}/>
        </div>
      </div>
        <Container id="inicio" style={{ backgroundColor: "transparent", height: "100vh", width: "100vw", fontFamily: "Roboto" }}>
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
                  Crie sua lobby, convide seus amigos.<br />
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
        <Container id="visao">
          <Row>
            <Col xs={12} style={{ backgroundColor: "", height: "80vh" }}>
              <Row>
                <Col xs={6}>
                  <div className="text-white" style={{ marginTop: "15%" }}>
                    <div className="text-white">
                      <i class="ion-ios-speedometer-outline"></i>
                    </div>
                    <div class="content">
                      <TrendingUpIcon style={{ fontSize: '50px', color: '#1CDC6E' }} />
                      <h4 class="bottom-line">MISSÃO</h4>
                      <hr style={{ width: '100px' }}></hr>
                      <p style={{ fontSize: "15px" }}>Prover soluções de qualidade e sucesso em todos os projetos, impactando positivamente o
                            mercado de TI e financeiro, com foco nos resultados dos nossos clientes, colaboradores e parceiros.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-white" style={{ marginTop: "15%" }}>
                    <div className="text-white">
                      <i class="ion-ios-speedometer-outline"></i>
                    </div>
                    <div class="content">
                      <AssignmentIcon style={{ fontSize: '50px', color: '#1CDC6E' }} />
                      <h4 class="bottom-line">VALOR</h4>
                      <hr style={{ width: '100px' }}></hr>
                      <p style={{ fontSize: "15px" }}>Cremos e utilizamos preceitos de ética e governança que nos norteiam, através de valores que estão declarados em nosso Código de Ética e Comportamento, seriedade, valorização de nossos colaboradores.</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className="text-white" style={{ marginTop: "15%" }}>
                    <div className="text-white">
                      <i class="ion-ios-speedometer-outline"></i>
                    </div>
                    <div class="content">
                      <VisibilityIcon style={{ fontSize: '50px', color: '#1CDC6E' }} />
                      <h4 class="bottom-line mt-2">VISÃO</h4>
                      <hr style={{ width: '100px' }}></hr>
                      <p style={{ fontSize: "15px" }}>Ser uma das maiores empresas de tecnologia do país, levando conosco nossos clientes a ascensão contínua e buscando sempre a melhor tecnologia para atendê-los.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-white" style={{ marginTop: "15%" }}>
                    <div className="text-white">
                      <i class="ion-ios-speedometer-outline"></i>
                    </div>
                    <div class="content">
                      <PublicIcon style={{ fontSize: '50px', color: '#1CDC6E' }} />
                      <h4 class="bottom-line mt-2">OBJETIVO</h4>
                      <hr style={{ width: '100px' }}></hr>
                      <p style={{ fontSize: "15px" }}>Prover soluções de qualidade e sucesso em todos os projetos, impactando positivamente o
                            mercado de TI, com foco nos resultados dos nossos clientes, colaboradores e parceiros.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <h4 id="time"class="bottom-line mt-2 text-white" style={{ fontSize: '35px' }}>EQUIPE</h4>
          <hr style={{ width: '200px' }}></hr>
          <Row xs={12} style={{ justifyContent: 'center' }}>
            <Col lg={4} md={6} sm={12} style={{ marginTop: '25px' }} >
              <CardTime titulo='Fernanda Queiroz' img='https://avatars2.githubusercontent.com/u/53790904?s=400&u=45fe53550e0f04a88f6c10320bcbed57daffae82&v=4' link='fernandaqueirozbc'>colocar aqui sua frase</CardTime>
            </Col>
            <Col lg={4} md={6} sm={12} style={{ marginTop: '25px' }} >
              <CardTime titulo='Gabriel Souza' img='https://avatars2.githubusercontent.com/u/54115219?v=4' link='souzgab'>Developer at Safra Bank, enjoy a good beer and a nice meat.</CardTime>
            </Col>
            <Col lg={4} md={6} sm={12} style={{ marginTop: '25px' }} >
              <CardTime titulo='Lucas Monteiro' img='https://avatars3.githubusercontent.com/u/53584705?s=460&u=8dcb0d0e0dc8c2656808d178b4c4eaa9c991be9f&v=4t' link='lucasmonteirobandtec'>"A mente que se abre a uma ideia jamais voltará à seu tamanho original" - Eistein</CardTime>
            </Col>
            <Col lg={4} md={6} sm={12} style={{ marginTop: '25px' }} >
              <CardTime titulo='Talita Modesto' img='https://avatars3.githubusercontent.com/u/47605213?s=400&v=4' link='ThataMI'>colocar aqui sua frase</CardTime>
            </Col>
            <Col lg={4} md={6} sm={12} style={{ marginTop: '25px' }} >
              <CardTime titulo='Vinicius Alves' img='https://avatars0.githubusercontent.com/u/53584452?s=400&u=a485f18dedc3e477fd2078c08682198c195adb89&v=4' link='rodriguesvinicius'>colocar aqui sua frase</CardTime>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Home;