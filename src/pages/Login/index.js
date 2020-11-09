import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Background from "../../assets/images/login.jpg";
import { green } from '@material-ui/core/colors';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40vh',

    
  },
  image: {
    backgroundImage: `url(${Background})`,
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
    width: '100%', 
    marginTop: theme.spacing(1),
    backgroundColor: '#202020',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
   
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} resizeMode="contain"/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor: '#202020'}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
         
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
          <ThemeProvider theme={theme} >
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            </ThemeProvider>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre me"
            />
            <ThemeProvider theme={theme} >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
            
              <Grid item>
                <Link to="/cadastro" variant="body2">
                  Ainda não tem conta?{"criar"}
                </Link>
              </Grid>
            </Grid>
           </ThemeProvider>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}