import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Modal,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core/";
import BuildIcon from "@material-ui/icons/Build";

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
  modal: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "20rem",
    padding: "1rem",
    width: 500,
    top: "50%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#017374",
    border: "none",
    boxShadow: theme.shadows[5],
  },
  buttonContainer: {
    alignSelf: "flex-end",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
  },
  label: {
    fontSize: "0.75rem",
    color: "lightgray",
    marginRight: "7rem",
  },
  startButton: {
    padding: "0.5rem 2.25rem",
    background: "#455A64",
    color: "white",
    "&:hover": {
      backgroundColor: "#607D8B",
    },
  },
  text: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={classes.modal}>
              <Typography
                variant="h4"
                gutterBottom="true"
                paragraph="true"
                className={classes.text}
                id="simple-modal-title"
              >
                Configuration Wizard
              </Typography>
              <Typography
                variant="body2"
                gutterBottom="true"
                paragraph="true"
                className={classes.text}
                id="simple-modal-description"
              >
                Welcome to configuration wizard, Meshery's unique feature. The
                configuration wizard represents an assembly of existing
                functionality and settings that you can configure.
              </Typography>
              <div className={classes.buttonContainer}>
                <div className={classes.checkbox}>
                  <Checkbox color="default" />
                  <Typography className={classes.label}>
                    Don't show this again
                  </Typography>
                </div>
                <Button onClick={handleClose} className={classes.text}>
                  Skip
                </Button>
                <Link to="/wizard" className={classes.link}>
                  <Button onClick={handleClose} className={classes.startButton}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
