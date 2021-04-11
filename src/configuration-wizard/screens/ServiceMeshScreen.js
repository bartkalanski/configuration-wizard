import React from "react";
import {
  makeStyles,
  Container,
  Fade,
  Typography,
} from "@material-ui/core/";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

import ConfigCard from "../reusecore/ConfigCard";
import consulIcon from '../../icons/consulIcon.svg'
import linkerdIcon from '../../icons/linkerdIcon.svg'
import openServiceMeshIcon from '../../icons/openServiceMeshIcon.svg'

const useStyles = makeStyles({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "2rem 6rem",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
  },
  planeContainer: {
    marginTop: "2rem",
    marginLeft: "1rem",
  },
  planeIcon: {
    marginBottom: "-0.4rem",
    color: "#00B39F",
  },
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
          <ConfigCard handleSwitch={handleSwitch} name="openServiceMesh" icon={openServiceMeshIcon} />
          {!state.openServiceMesh ? null : (<div className={classes.planeContainer}>
            <Typography>
              Control Plane: 6{" "}
              <FiberManualRecordRoundedIcon
                className={classes.planeIcon}
              />
            </Typography>
            <Typography>
              Data Plane: 18
                <FiberManualRecordRoundedIcon
                className={classes.planeIcon}
              />
            </Typography>
          </div>)}
        </div>
        <div className={classes.dataContainer}>
          <ConfigCard handleSwitch={handleSwitch} name="consul" icon={consulIcon} />
          {!state.consul ? null : (<div className={classes.planeContainer}>
            <Typography>
              Control Plane: 3{" "}
              <FiberManualRecordRoundedIcon
                className={classes.planeIcon}
              />
            </Typography>
            <Typography>
              Data Plane: 9
                <FiberManualRecordRoundedIcon
                className={classes.planeIcon}
              />
            </Typography>
          </div>)}
        </div>
        <div className={classes.dataContainer}>
          <ConfigCard handleSwitch={handleSwitch} name="linkerd" icon={linkerdIcon} />
          {!state.linkerd ? null : (<div className={classes.planeContainer}>
            <Typography>
              Control Plane: 1{" "}
              <FiberManualRecordRoundedIcon
                className={classes.planeIcon}
              />
            </Typography>
            <Typography>
              Data Plane: 12
                <FiberManualRecordRoundedIcon
                className={classes.planeIcon}
              />
            </Typography>
          </div>)}
        </div>
      </Container>
    </Fade>
  );
};

export default ServiceMesh;
