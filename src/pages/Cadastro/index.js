import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import NavigationBar from '../../components/NavigationBar';
import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import LeftSvg from "../../assets/SVG/Frame2.svg";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontSize: 22,
    Backgroundcolor:'#fff',
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

  return (
    <React.Fragment>
    <CssBaseline />
    <NavigationBar title="Payshare" link="Inicio" to="/"/>
          <Container maxWidth="xg" component="main" style={{backgroundColor: "darkgray", height: "100vh", width: "100vw"}} className={classes.heroContent}>
          <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: '#202020' }}>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{color: '#fff'}}>
                  Bem vindo, realize seu cadastro
                </Typography>
                <form className={classes.form} noValidate>
                <ThemeProvider theme={theme} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    color="#ffff"
                    required
                    fullWidth
                    id="name"
                    label="Nome Completo"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    autoComplete="cpf"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="cpfDocument"
                    label="Email"
                    type="text"
                    id="cpfDocument"
                    autoComplete="cpfDocument"
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
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirmar Senha"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Cadastrar
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link href="/cadastro" variant="body2">
                        {"Ao continuar você concorda com os termos de uso do Payshare."}
                      </Link>
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