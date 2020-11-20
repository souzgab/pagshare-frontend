import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LobbyBar from './components/LobbyBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from './components/Modal'

const useStyles = makeStyles((theme) => ({
    heroContent: {
    //   backgroundImage: `url(${FundoSVG})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: "#20202033",
      height: "100vh",
      display: "flex",
      width: "100vw",
      justifyContent:"flex-start",
      alignItems:"center",
      direction: "row"

      // Alterar o background color acima para #202020 quando terminar a tela
    },

    mainPaper: {
      padding: theme.spacing(2),
      height: "100vh",
      width: "100%",
      backgroundColor: "#202020"
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    paper: {
      width: '100%',

      padding: '10px',
      textAlign: 'center',
      backgroundColor: "#2D2D2D"

    }
  })
)

const LobbyPage = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <CssBaseline />
              <LobbyBar/>
                <Grid xs={12}>
                  <Paper className={classes.mainPaper} square>
                    <Grid container spacing={3} style={{paddingTop: '5vh'}}>
                      <Grid item xs={6} sm={6}> 
                        <Modal/>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
        </React.Fragment>
    )
}

export default LobbyPage;