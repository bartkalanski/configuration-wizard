import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Modal,
  Button,
  Checkbox,
  Zoom,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "16.25rem",
    padding: "1rem",
    width: "500px",
    marginLeft: "-250px",
    left: "50%",
    bottom: "35%",
    backgroundColor: "#017374",
    border: "none",
    borderRadius: "1.25rem",
    boxShadow: theme.shadows[5],
  },
  text: {
    color: "white",
    fontWeight: "300",
    letterSpacing: ".05rem",
    textTransform: "none",
  },
  buttonContainer: {
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    marginTop: "1.5rem",
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
  getStartedButton: {
    padding: "0.5rem 2.25rem",
    background: "#455A64",
    textTransform: "none",
    fontWeight: "300",
    color: "white",
    "&:hover": {
      backgroundColor: "#607D8B",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },


}));

const ConfigurationWizardModal = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Zoom in={open}>
        <div className={classes.root}>
          <div className={classes.textContainer}>
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
              functionality and settings that you can configure
          </Typography>
          </div>
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
              <Button onClick={handleClose} className={classes.getStartedButton}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </Zoom>
    </Modal>
  );
};

export default ConfigurationWizardModal;
