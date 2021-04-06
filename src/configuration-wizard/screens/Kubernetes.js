import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core/";

import kubernetesIcon from "../../icons/Kubernetes.svg";
import ConfigCard from "../reusecore/ConfigCard";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "2rem 6rem",
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: "2rem",
    marginLeft: "1rem",
  },
  infoContext: {
    fontSize: ".9rem"
  },
  infoKind: {
    fontSize: ".75rem",
    color: "#CACACA",
  },
});

const Kubernetes = () => {
  const [state, setState] = React.useState(false);
  const classes = useStyles();

  const handleSwitch = (checked) => setState(checked)

  return (
    <Container className={classes.cardContainer}>
      {" "}
      <ConfigCard handleSwitch={handleSwitch} name="Kubernetes" icon={kubernetesIcon} topInputPlaceholder="Upload" bottomInputPlaceholder="Context"/>
      <div  className={classes.infoContainer}>
        <Typography className={classes.infoContext}>Context Name</Typography>
        <Typography className={classes.infoKind}>kind-kind</Typography>
        <Typography>{state ? "Kubernetes Selected": null }</Typography>
      </div>
    </Container>
  );
};

export default Kubernetes;
