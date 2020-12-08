import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(102, 102, 102, 0.2)',
    display: 'flex',
    height: 145,
    position: 'fixed',
    alignSelf: 'center',
    color: '#1CDC6E',
    
  },
  tabs: {
    borderLeft: `1px ${theme.palette.divider}`,
  },
  tab: {
    outline:'none',
    textDecoration: 'inherit',
    textDecorationLine: 'none',
    color: '#1CDC6E',
    textAnchor: 'none'
  }
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical"
        className={classes.tabs}
      >
        <Tab className={classes.tab} label="Inicio" href={props.obj.inicio} {...a11yProps(0)} />
        <Tab className={classes.tab} label="Visão" href={props.obj.visao} {...a11yProps(1)} />
        <Tab className={classes.tab} label="Equipe" href={props.obj.time} {...a11yProps(2)} />
      </Tabs>
    </div>
  );
}