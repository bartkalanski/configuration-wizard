import React from "react";
import {
  makeStyles,
  Container,
  Fade,
  Typography
} from "@material-ui/core/";

import mesheryOperatorIcon from "../../icons/meshery-operator-dark.svg";
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

const MesheryOperator = () => {
  const classes = useStyles();

  return (
    <Fade timeout={{ enter: "500ms" }} in="true">
      <Container className={classes.cardContainer}>
        {" "}
        <ConfigCard name="Meshery Operator" icon={mesheryOperatorIcon} topInputPlaceholder="URL" bottomInputPlaceholder="" />
        <div className={classes.infoContainer}>
          <Typography className={classes.infoContext}>Context Name</Typography>
          <Typography className={classes.infoKind}>kind-kind</Typography>
        </div>
      </Container>
    </Fade>
  );
};

export default MesheryOperator;
