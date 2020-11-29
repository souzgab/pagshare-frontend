import React from "react";
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles} from '@material-ui/core/styles';
import moment from "moment";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import logoSvg from "../assets/SVG/lblLogo.svg";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      backgroundColor: theme.palette.primary
    },
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    font: {
      fontFamily: 'Roboto'
    }
  }));
  let users = [];

  function sortImage(){
    return 'url(https://source.unsplash.com/random)';
  }
  
const LobbyInstance = (props) => {
    const classes = useStyles();
    const dados = props.obj
    console.log(dados)
    dados.userPfList.map((usuario) => users.push(usuario.name))
   return (
        <Card style={{
            backgroundColor: '#2d2d2d',
            fontSize: '15px',
            borderRadius: '10px',
            height: '95%',
        }}>
          <Row style={{height: '98%'}}>
            <Col style={{backgroundColor: ''}}>
              <CardMedia
              component="img"
              height="100%"
              width="100%"
              className={classes.image}
              title="Payshare"
              style={{
                backgroundColor: '#2d2d2d',
                backgroundSize: 'center',
                backgroundAttachment: 'fixed',
                borderBottomLeftRadius: '10px',
                borderTopLeftRadius: '10px',
                margin: '1%'
              }}
            />
            </Col>
            <Col style={{backgroundColor: '', alignContent: 'center',}}>
              <CardActionArea style={{
                width: '98%',
                backgroundColor: 'purple',
                height: '90%'
              }}>
                <CardContent>
                  <Row>
                    <Col style={{backgroundColor: "red",
                    alignContent: 'center', justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center', fontFamily: 'Roboto'}}>
                      <h3>Parece que você esta participando de uma Lobby... {dados.lobbyDescription} que foi criada no dia, {moment(dados.creationDate).format('ll')}</h3>
                    </Col>
                    <Col sm={12} className={classes.font}
                    style={{backgroundColor: "red",
                    alignContent: 'center', justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center', fontFamily: 'Roboto'}}
                    >sua lobby ativa está com {dados.userPfList.length} pessoas, confira aqui!</Col>
                    <Col sm={12} style={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
                        Valor: {dados.amount === 0  ? <span>PAGO</span> : `R$ ${parseFloat(dados.amount).toFixed(2)}`}
                    </Col>
                  </Row>
                </CardContent>
              </CardActionArea>
              <CardActions style={{display: "flex", flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
                <Button size="sm"
                variant="success"
                style={{
                  fontFamily: 'roboto', fontSize: '12px'
                }} >
                  Compartilhar Lobby
                </Button>
                <Link to="/pagamento">
                        <Button
                          size="sm"
                          variant="success"
                          style={{
                            fontFamily: 'roboto', fontSize: '12px'
                          }}>Detalhar Lobby
                        </Button>
                      </Link>
              </CardActions>
            </Col>
          </Row>
      </Card>
   )
};

export default LobbyInstance;