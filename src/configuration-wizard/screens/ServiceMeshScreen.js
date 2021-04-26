import React from "react";
import {
  makeStyles,
  Container,
  Fade,
  Button
} from "@material-ui/core/";

import ConfigCard from "../reusecore/ConfigCard";
import consulIcon from '../../icons/consulIcon.svg'
import linkerdIcon from '../../icons/linkerdIcon.svg'
import openServiceMeshIcon from '../../icons/openServiceMeshIcon.svg'
import InfoContainer from "../reusecore/InfoContainer"

const useStyles = makeStyles({
  contentContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: "32.5rem",
    justifyContent: "space-evenly",
    padding: "2rem 6rem 0rem 6rem",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
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

const ServiceMesh = () => {
  const [state, setState] = React.useState({})
  const classes = useStyles();

  const handleSwitch = (name, value) => {
    console.log(state)
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <Fade timeout={{ enter: "500ms" }} in="true">
      <Container className={classes.contentContainer}>
        <div className={classes.dataContainer}>
          <ConfigCard handleSwitch={handleSwitch} name="openServiceMesh" icon={openServiceMeshIcon} topInputPlaceholder="URL" bottomInputPlaceholder="Context"/>
          {!state.openServiceMesh ? null : (
          <InfoContainer controlPlane="1" dataPlane="4"/>
          )}
        </div>
        <div className={classes.dataContainer}>
          <ConfigCard handleSwitch={handleSwitch} name="consul" icon={consulIcon} topInputPlaceholder="URL" bottomInputPlaceholder="Context"/>
          {!state.consul ? null : (
            <InfoContainer controlPlane="2" dataPlane="9"/>
          )}
        </div>
        <div className={classes.dataContainer}>
          <ConfigCard handleSwitch={handleSwitch} name="linkerd" icon={linkerdIcon} topInputPlaceholder="URL" bottomInputPlaceholder="Context"/>
          {!state.linkerd ? null : (
            <InfoContainer controlPlane="4" dataPlane="6"/>
          )}
        </div>
        <Button className={classes.settingsButton}>Advanced Settings</Button>
      </Container>
    </Fade>
  );
};

export default ServiceMesh;
