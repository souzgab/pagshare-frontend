import React, {useState, useContext} from 'react';
import NavigationBar from '../../components/NavigationBar';
import { makeStyles, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import LeftSvg from "../../assets/SVG/Blobs.svg";
import { green } from '@material-ui/core/colors';
import {useHistory} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import StoreContext from '../../components/Storage/Context'
import Axios from 'axios'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const theme = createMuiTheme({
  palette: {
    primary: green,
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

const initialState = () =>{
  return {email: '', password: ''};
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: theme.palette.primary
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

async function logar({email, password}){
  if(email && password){
    const data = await Axios.post("https://paysharedev.herokuapp.com/v1/payshare/auth/login", {email, password})
    .then((response) => {
      return response.data;
    })
    .catch(e => console.log(e));
    // const data = {token: "2333", name: "Payshare", email: "admin@admin.com", id: 4}
    return data;
  }
  return {error: "Cannot Logon, Invalid Credentials"}
}



export function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();
  const [values, setValues] = useState(initialState);
  const history = useHistory();
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const onChange = (evento) => {
    const {value, name} = evento.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  async function onSubmit(evento){
    evento.preventDefault();
    const data = await logar(values);
    if(data.token){
      handleClick()
      setTimeout(
      () => {
          setToken(`Bearer ${data.token}`);
          localStorage.setItem("id", data.id);
          localStorage.setItem("email", data.email);
          localStorage.setItem("name", data.name);
          return history.push('/lobby');
      }  
      , 2000)
    }
    setError(error);
    setValues(initialState);
  }
 
  return (
    <React.Fragment>
    <CssBaseline />
        <NavigationBar title="Pasyshare" link="Cadastre-se" to="/cadastro"/>
          <Container maxWidth="xg" component="main" style={{backgroundColor: "darkgray", height: "100vh", width: "100vw"}} className={classes.heroContent}>
          <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: '#202020' }}>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{color: '#fff'}}>
                  Bem vindo, realize seu login
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                <ThemeProvider theme={theme} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={onChange}
                    InputProps={{ style: { color: '#fff' } }}
                    value={values.email}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{ style: { color: '#fff' } }}
                    onChange={onChange}
                    value={values.password}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <FormControlLabel style={{color: '#fff'}}
                    control={<Checkbox className="text-white" value="remember" color="primary" />}
                    label="Lembrar Login"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    color="primary"
                    style={{
                      color:"white",
                      fontWeight:'lighter'
                    }}
                  >
                    Entrar
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/senha" variant="body2"
                        style={{
                          color:"white",
                          fontWeight:'lighter',
                          textDecoration:"none"
                        }}
                      >
                        Esqueceu sua Senha?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/cadastro" variant="body2"
                        style={{
                          color:"white",
                          fontWeight:'lighter',
                          textDecoration:"none"
                        }}
                      >
                        {"Não tem uma conta ainda? cadastre-se"}
                      </Link>
                    </Grid>
                  </Grid>
                  </ThemeProvider>
                </form>
              </div>
            </Grid>
          </Grid>
          <Snackbar message="Sucesso!" open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Logado com Sucesso!
            </Alert>
          </Snackbar>
        </Container>
  </React.Fragment>
  );
}

export default Login;