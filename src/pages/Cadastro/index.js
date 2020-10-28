import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


import LeftSvg from "../../assets/cad2.png";

import { green } from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    width:  'auto',
},


image: {
  backgroundImage: `url(${LeftSvg})`,
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundSize: 'cover',
  backgroundPosition: '0vh',
},

paper: {
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
},
avatar: {
  margin: theme.spacing(1),
  backgroundColor: '#6EDC1C',
},
form: {
  width: '100%', // Fix IE 11 issue.
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
    <Grid container component="main" className={classes.root} >
          <div style={{backgroundColor:'#202020', height: '100%'}}></div>
          

      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor: '#202020'}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
         
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar
          </Typography>
          <form className={classes.form} noValidate>
            <ThemeProvider theme={theme} >
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome"
                name="username"
                type="username"
                

              />

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="cpf"
                label="CPF"
                name="cpf"
                type="cpf"
              />

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                type="email"
              />

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                name="password"
                type="password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Confirmar Senha"
                name="password"
                type="password"
              />
            </ThemeProvider>

            <Link to="/login">
              <ThemeProvider theme={theme}>
                <Button
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mt-md-4">
                  Cadastrar
                 </Button>
                 <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
            
              <Grid item>
                <Link href="#" variant="body2">
                  Ainda não tem conta?{"criar"}
                </Link>
              </Grid>
            </Grid>
              </ThemeProvider>
            </Link>
            </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Cadastro;

