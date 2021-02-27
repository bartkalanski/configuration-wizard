import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
      background: "#647881",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 4rem',
  },
  buildIcon: {
      cursor: 'pointer',
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            Meshery
          </Typography>
          <BuildIcon className={classes.buildIcon}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar