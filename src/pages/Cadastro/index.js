import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import NavigationBar from '../../components/NavigationBar';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import LeftSvg from "../../assets/SVG/Frame2.svg";
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontSize: 22,
    Backgroundcolor: '#fff',
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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: '#414141',
  },
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LeftSvg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: '#202020',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Cadastro() {
  const classes = useStyles();
  const history = useHistory();

  //inicializa o formData com os valores default
  const [formData, setFormData] = useState(initialState);

  var initialState = () => {
    return {
      name: '',
      cpf: '',
      email: '',
      password: ''
    };
  }

  // ele vai pegar a ultimo evento dos inputs e seta para o formDate assim alterando o estado dele
  const onChange = (evento) => {
    const { value, name } = evento.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    })

    console.log("aqui caralho", JSON.stringify(formData))
  }

  //handleSubmit é responsável pela chamada do endpoint criação de lobby
  async function handleSubmit(event) {
    event.preventDefault();

    const { name, cpf, email, password, confirmPassword } = formData
    const URL = `https://paysharedev.herokuapp.com/v1/payshare/auth/signup`
    const data = {
      name,
      cpf,
      age:21,
      email,
      password
    };

    if (password == confirmPassword) {
      try {
        console.log(data)
        await axios.post(URL, data).then((result) => {
          console.log(result)
          return history.push('/login');
        }).catch((err) => {
          console.log(err)
        })
      } catch (e) {
        console.log(e)
      }
    } else {
      alert("Senha não correspondem")
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar title="Payshare" link="Inicio" to="/" />
      <Container maxWidth="xg" component="main" style={{ backgroundColor: "darkgray", height: "100vh", width: "100vw" }} className={classes.heroContent}>
        <Grid container component="main" className={classes.root}>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: '#202020' }}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{ color: '#fff' }}>
                Bem vindo, realize seu cadastro
                </Typography>
              <form className={classes.form} Validate onSubmit={handleSubmit}>
                <ThemeProvider theme={theme} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    color="#ffff"
                    onChange={onChange}
                    required
                    fullWidth
                    id="name"
                    label="Nome Completo"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={onChange}
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    autoComplete="cpf"
                    autoFocus
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={onChange}
                    name="email"
                    label="Email"
                    type="text"
                    id="email"
                    autoComplete="email"
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={onChange}
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={onChange}
                    name="confirmPassword"
                    label="Confirmar Senha"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onChange={onChange}
                    className={classes.submit}
                    color="primary"
                    style={{
                      color: "white",
                      fontWeight: 'lighter'
                    }}
                  >
                    Cadastrar
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Typography href="/cadastro" variant="body2"
                        style={{
                          color: "white",
                          fontWeight: 'lighter',
                          textDecoration: "none"
                        }}
                      >
                        {"Ao continuar você concorda com os termos de uso do Payshare."}
                      </Typography>
                    </Grid>
                  </Grid>
                </ThemeProvider>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Cadastro;