import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LobbyBar from './components/LobbyBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
      margin: 'auto',
      height: "85vh",
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
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: "primary"
    }
  })
)

const LobbyPage = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xg" component="main" className={classes.heroContent}>
              <LobbyBar/>
                <Grid xs={12}>
                  <Paper className={classes.mainPaper}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} >xs=12 sm=6</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3} style={{height: "100%", backgroundColor: "darkgray", height: "30vh"}}> 
                        <Paper className={classes.paper} style={{height: "100%", backgroundColor: "#45464D", height: "100%"}}>xs=6 sm=3</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default LobbyPage;