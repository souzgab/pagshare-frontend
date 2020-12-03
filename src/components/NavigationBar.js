import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import logoSvg from "../assets/SVG/lblLogo.svg";
import { Toolbar, AppBar, Grid, makeStyles, Button } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    textAlign: 'center',
  }
})
);


function NavigationBar(props) {
  const classes = useStyles();

  const [logado, setLogado] = useState(true)
  const [deslogado, setDeslogado] = useState(true)

  const hist = useHistory();

  function logout() {
    localStorage.clear();
    hist.push("/login")
  }

  useEffect(() => {
    if (localStorage.getItem('token')){
      setLogado(false);
    }else {
      setDeslogado(false);
    }
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Link to="/">
                <img
                  src={logoSvg}
                  width="221"
                  height="51"
                  alt="React Bootstrap logo"
                />

              </Link>
            </Grid>
            <Grid className="text-right" item xs={4}>
              <Link to="/login" hidden={deslogado}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ textJustify: "22", WebkitTextSize: "22",   fontSize: '11px' }}
                  className={classes.button}
                >
                  Acessar conta
                </Button>
                
              </Link>
              <Link className="ml-2" to="/cadastro" hidden={deslogado}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ textJustify: "22", WebkitTextSize: "22" ,   fontSize: '11px'}}
                  className={classes.button}
                  
                >Registrar-se
                  
                </Button>
              </Link>
              <Link className="ml-2" to="/lobby" hidden={logado}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ textJustify: "22", WebkitTextSize: "22" ,   fontSize: '11px'}}
                  className={classes.button}
                  
                ><PersonIcon className="mr-2" style={{fontSize:"20px"}}/> Minha conta
                  
                </Button>
              </Link>
              <Link className="ml-2" to="/login" hidden={logado}>
                <Button
                  onClick={logout}
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ textJustify: "22", WebkitTextSize: "22" ,   fontSize: '11px'}}
                  className={classes.button}
                ><ExitToAppIcon className="mr-2" style={{fontSize:"20px"}}/> Sair
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar;