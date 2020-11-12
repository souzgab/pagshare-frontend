import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/SVG/lblLogo.svg";
import profile from "../assets/SVG/gg_profile.svg"
import { Paper, Typography, Toolbar, AppBar, Grid, makeStyles, Container, Button } from "@material-ui/core";
import LoginIcon from '@material-ui/icons/AccountBox';

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
                  <Typography variant="h3" color="inherit" noWrap style={{color: "black", textDecoration: 'none'}}>
                    {props.title}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2}>
              <Link to={props.to}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{textJustify: "auto", WebkitTextSizeAdjust: "auto"}}
                    className={classes.button}
                    startIcon={<LoginIcon />}
                  >
                      {props.link}
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