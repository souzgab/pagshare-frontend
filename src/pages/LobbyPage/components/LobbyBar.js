import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import logoSvg from "../../../assets/images/Logo-pequeno.png";
import dash from "../../../assets/images/iconBar/dash.svg";
import wallet from "../../../assets/images/iconBar/Vector.svg"
import Room from "../../../assets/images/iconBar/cil_room.svg"
import Card from "../../../assets/images/iconBar/card.svg"
import history from "../../../assets/images/iconBar/codicon_history.svg"
import settings from "../../../assets/images/iconBar/settings.svg"
import ButtomMessage from "../../../assets/images/iconBar/buttonMessage.svg"
import { Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  heroContent: {
    //   backgroundImage: `url(${FundoSVG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbar2: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  oi: {
    backgroundColor: '#2D2D2D'
  }
}));

const LobbyBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenClose = () => {
    if (open) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  }



  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant='permanent'
        className={
          clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })
        }
        classes={{
          paper: clsx(classes.oi, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          }),
        }}
      ><List >
          <div className={classes.toolbar}>
            <img src={logoSvg} onClick={handleOpenClose} />
          </div>
          <div className="text-white text-center">
            <Link to="/" className="text-white">
              <ListItem className="ml-2 mb-3" button style={{ marginTop: '60px' }}>
                <ListItemIcon><img src={dash} /></ListItemIcon>
                <ListItemText primary='ÍNICIO' />
              </ListItem>
            </Link>
            <Link to="/lobby" className="text-white">
              <ListItem className="ml-2 mb-3" button>
                <ListItemIcon><img src={wallet} /></ListItemIcon>
                <ListItemText primary='MINHA CARTEIRA' />
              </ListItem>
            </Link>
            <Link to="/pagamento" className="text-white">
              <ListItem className="ml-2 mb-3" button>
                <ListItemIcon><img src={Room} /></ListItemIcon>
                <ListItemText primary='SALA DE PAGAMENTO' />
              </ListItem>
            </Link>
            <ListItem className="ml-2 mb-3" button>
              <ListItemIcon><img src={Card} /></ListItemIcon>
              <ListItemText primary="MEUS CARTÕES" />
            </ListItem>
            <ListItem className="ml-2 mb-3" button>
              <ListItemIcon><img src={history} /></ListItemIcon>
              <ListItemText primary='HISTÓRICOS' />
            </ListItem>
            <Link to="/profile" className="text-white">
            <ListItem className="ml-2" button>
              <ListItemIcon><img src={settings} /></ListItemIcon>
              <ListItemText primary='CONFIGURAÇÕES' />
            </ListItem>
            </Link>
          </div>
        </List>
      </Drawer>
    </div>
  )
}

export default LobbyBar;