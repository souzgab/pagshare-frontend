import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import NavigationBar from '../../components/NavigationBar';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Frame2 from "../../assets/SVG/fotoCadastro.svg"
import validate from '../../components/validateInfo';
import useForm from '../../components/UseForm';


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
    backgroundImage: `url(${Frame2})`,
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

export function Cadastro({ submitForm }) {
  const { handleChange, handleSubmit, formData, errors } = useForm(
    submitForm,
    validate
  );
  const classes = useStyles();
  
    

  
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar title="Payshare" link="Inicio" to="/" />
      <Container maxWidth="xg" component="main" style={{ height: "100vh", width: "100vw" }} className={classes.heroContent}>
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
                    // error={formData.name === ""}
                    // helperText={formData.name === "" ? 'Campo Obrigatorio' : ''}
                    variant="outlined"
                    margin="normal"
                    color="#ffff"
                    onChange={handleChange}
                    required
                    fullWidth
                    id="name"
                    type="text"
                    label="Nome Completo"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={formData.name}
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                 
                  <TextField
                    // error={formData.cpf.length < 11}
                    // helperText={formData.cpf.length < 11 ? 'CPF  inválido' : ''}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    placeholder="000.000.000-00"
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    type="tel"
                    size="11"
                    type="cpf"
                    min="11"
                    autoComplete="cpf"
                    autoFocus
                    InputProps={{
                      style: {
                        color: '#fff', size: '11'
                      }
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                  <TextField
                    // error={formData.email === ""}
                    // helperText={formData.email === "" ? 'Campo Obrigatorio' : ''}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />

                  <TextField
                  //  error={formData.password.length < 6}
                  //  helperText={formData.password.length < 6 ? 'A senha precisa ter 6 caracteres ou mais' : ''}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />

                  <TextField
                    error={formData.password !== formData.confirmPassword}
                    helperText={formData.password !==  formData.confirmPassword ? 'As senhas não coincidem' : ''}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleChange}
                    name="confirmPassword"
                    label="Confirmar Senha"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    value={formData.confirmPassword}
                    InputProps={{ style: { color: '#fff' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onChange={handleChange}
                    className={classes.submit}
                    color="primary"
                    style={{
                      color: "white",
                      fontWeight: 'lighter',
                      fontSize: '17px'
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
  )
}

export default Cadastro;