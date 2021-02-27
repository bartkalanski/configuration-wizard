import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Modal, Button, Link as LinkStyle } from "@material-ui/core/";
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
  buildIcon: {
    cursor: "pointer",
  },
  modal: {
    position: "absolute",
    height: "15rem",
    padding: "2rem",
    width: 400,
    top: "50%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#00B39F",
    border: "none",
    boxShadow: theme.shadows[5],
  },
  text: {
    color: "fff",
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
          <Link to="/">
            <LinkStyle variant="h6" color="inherit">
              Meshery
            </LinkStyle>
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
                classes={{ colorTextPrimary: "#fff" }}
                gutterBottom="true"
                paragraph="true"
                id="simple-modal-title"
              >
                Configuration Wizard
              </Typography>
              <Typography
                gutterBottom="true"
                paragraph="true"
                id="simple-modal-description"
              >
                Welcome to configuration wizard, Meshery's unique feature. The
                configuration wizard represents an assembly of existing
                functionality and settings that you can configure.
              </Typography>
              <Button onClick={handleClose}>Skip</Button>
              <Button onClick={handleClose}>
                <Link to="/wizard">Get Started</Link>
              </Button>
            </div>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
