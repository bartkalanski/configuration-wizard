import React from "react";
import { makeStyles, Container, Fade, Button, Typography } from "@material-ui/core/";

import grafanaIcon from "../../icons/grafana.svg";
import prometheusIcon from "../../icons/prometheus.svg";
import ConfigCard from "../reusecore/ConfigCard";

const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "35rem",
    padding: "2rem 6rem",
  },
  infoContainer: {
    boxSizing: "border-box",
    position: 'relative',
    width: '12rem',
    height: "8rem",
    padding: "1rem",
    marginTop: "3.5rem",
    boxShadow: '0px 1px 6px 1px rgba(0,0,0,0.75)',
  },
  infoContext: {
    display: "inline",
    padding: "0.25rem 0.5rem",
    fontSize: '.75rem',
    fontWeight: '300',
    background: "lightgray",
  },
  settingsButton: {
    position: 'absolute',
    bottom: "-2.5rem",
    left: '1rem',
    color: "#647881",
    border: "1px solid #647881",
    borderRadius: '.8rem',
    fontSize: '.8rem',
    fontWeight: '400',
  }
});

const External = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({});


  const handleSwitch = (name, checked) => {
    setState({...state, 
      [name]:checked})
  }

  return (
    <Fade timeout={{ enter: "500ms" }} in="true">
      <Container className={classes.container}>
        <div>
        <ConfigCard name="grafana" icon={grafanaIcon} topInputPlaceholder="URL" bottomInputPlaceholder="API Key" handleSwitch={handleSwitch}/>
        {state.grafana ? (
        <div className={classes.infoContainer}><Typography className={classes.infoContext}>Context</Typography></div>)
        : null}
        </div>
        <div>
        <ConfigCard name="prometheus" icon={prometheusIcon} topInputPlaceholder="" bottomInputPlaceholder="" handleSwitch={handleSwitch}/>
        {state.prometheus ? (<div className={classes.infoContainer}><Typography className={classes.infoContext}>Context</Typography></div>): null}
        </div>
        <Button className={classes.settingsButton}>Advanced Settings</Button>
      </Container>
    </Fade>
  );
};

export default External;
