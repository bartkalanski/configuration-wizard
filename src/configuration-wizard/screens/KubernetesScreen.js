import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core/";
import BackupIcon from '@material-ui/icons/Backup';

import kubernetesIcon from "../../icons/kubernetes.svg";
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
    position: 'relative',
    left: '15rem',
    width: '20rem',
    padding: '2rem',
    marginTop: '2rem',
    boxShadow: '0px 1px 6px 1px rgba(0,0,0,0.75)',
  },
  infoContext: {
    fontSize: ".9rem"
  },
  infoKind: {
    fontSize: ".75rem",
    color: "#CACACA",
  },
});

const Kubernetes = ({ handleConnectToKubernetes }) => {
  const [state, setState] = React.useState(false);
  const classes = useStyles();

  const handleSwitch = (checked) => {
    setState(checked)
    if (handleConnectToKubernetes) {
      handleConnectToKubernetes(checked)
    }
  }

  return (
    <Container className={classes.cardContainer}>
      {" "}
      <ConfigCard handleSwitch={handleSwitch} name="Kubernetes" icon={kubernetesIcon} topInputPlaceholder="Upload" TopInputIcon={BackupIcon} bottomInputPlaceholder="Context" />
      {!state ? null : (<div className={classes.infoContainer}>
        <Typography className={classes.infoContext}>Context Name</Typography>
        <Typography className={classes.infoKind}>kind-kind</Typography>
        <Typography>{state ? "Kubernetes Selected" : null}</Typography>
      </div>)}
    </Container>
  );
};

export default Kubernetes;
