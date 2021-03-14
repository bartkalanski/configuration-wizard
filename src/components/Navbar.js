import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core/";
import BuildIcon from "@material-ui/icons/Build";
import PopUp from './PopUp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#647881",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 4rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  buildIcon: {
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" color="inherit">
              Meshery
            </Typography>
          </Link>
          <BuildIcon onClick={handleOpen} className={classes.buildIcon} />
          <PopUp open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
