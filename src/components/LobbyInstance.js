import React from "react";
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles} from '@material-ui/core/styles';
import moment from "moment";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import logoSvg from "../assets/images/Logo-pequeno.png";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Image } from "react-bootstrap";
import ModalShare from '../../src/pages/LobbyPage/components/ModalShare';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      backgroundColor: theme.palette.primary
    },
    root: {
      height: '90%',
      width: '100%',
      fontFamily: 'Roboto'
    },
    image: {
      backgroundImage: sortImage,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
    font: {
      fontFamily: 'Roboto',
      fontSize: '1.3rem',
      color: 'whitesmoke'
    }
  }));
  let users = [];

  function sortImage(){
    return 'url(https://images.unsplash.com/photo-1592151450086-0eb3e435c48e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)';
  }
  
const LobbyInstance = (props) => {
    const classes = useStyles();
    const dados = props.obj
    dados.userPfList.map((usuario) => users.push(usuario.name))
   return (
        <Card style={{
            backgroundColor: '#2d2d2d',
            fontSize: '15px',
            borderRadius: '10px',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
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
                backgroundColor: '',
                backgroundSize: 'center',
                backgroundAttachment: 'scroll',
                borderBottomLeftRadius: '10px',
                borderTopLeftRadius: '10px',
                margin: '1%',
                filter: 'grayscale(100%)'
              }}
            />
            </Col>
            <Col style={{backgroundColor: 'transparent',height: '100%',width: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
              <Card elevation={0} style={{
                width: '100%',
                backgroundColor: '#2d2d2d',
                height: '80%',alignContent: 'center', alignItems: 'center',justifyContent: 'center'
              }}>
                  <Row style={{backgroundColor: 'transparent',height: '100%',width: '100%',alignContent: 'center', alignItems: 'center',justifyContent: 'center'}}>
                    <Col style={{display: "flex", flexDirection: 'column', justifyContent: 'space-around'}}>
                      <List className={classes.root}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <Image src={logoSvg}/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText style={{color: 'white'}} primary={<Typography variant="h6" style={{ color: '#1CDC6E' }}>{dados.lobbyDescription}</Typography>} secondary={<Typography variant="h6" style={{ color: '#1CDC6E' }}>{moment(dados.creationDate).format('ll')}</Typography>}/>
                      </ListItem>
                        <ListItem style={{fontSize: '220px', color:'white'}}>
                          <ListItemText   />
                        </ListItem>
                        <Divider component="li" />
                        <li>
                          <Typography
                            className={classes.dividerFullWidth, classes.font}
                            color="textSecondary"
                            display="block"
                            variant="h6"
                            style={{textAlign: 'justify', padding: '2%'}}
                          >
                            O importante é dividir e compartilhar, sua lobby está ativa e ja recebeu R$ {dados.amountTotal} reais.
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            className={classes.dividerFullWidth, classes.font}
                            color="textSecondary"
                            display="block"
                            variant="h6"
                            style={{textAlign: 'justify', padding: '2%'}}
                          >
                            Existem {dados.userPfList.length} pessoas na lobby {dados.lobbyDescription}
                          </Typography>
                        </li>
                        <Divider component="li" variant="inset" />
                      </List>
                      <CardActions style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>
                        <ModalShare texto="Compartilhar Lobby" idLobby={dados.id} obj={dados}/>
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
            </Col>
          </Row>
      </Card>
   )
};

export default LobbyInstance;