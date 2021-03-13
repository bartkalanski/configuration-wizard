import React from "react";
import {
  makeStyles,
  withStyles,
  Switch,
  FormControlLabel,
  Input,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core/";

import mesheryOperatorIcon from "../icons/meshery-operator-dark.svg";
import kubernetesIcon from "../icons/Kubernetes.svg";

const MeshySwitch = withStyles({
  switchBase: {
    color: "grey",
    "&$checked": {
      color: "#00B39F",
    },
    "&$checked + $track": {
      backgroundColor: "#00B39F",
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "2rem 6rem",
  },
  card: {
    position: "relative",
    width: "10rem",
    border: "1px solid gray",
    borderRadius: "0.75rem",
    margin: "1rem 2rem 5rem 2rem",
  },
  cardChecked: {
    height: "15rem",
    marginBottom: "0rem",
  },
  cardUnchecked: {
    height: "10rem",
  },
  cardContent: {
    background: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    margin: "-1rem 0 0 -1rem",
  },
  contentTop: {
    background: "#434343",
    height: "12rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  contentTopUnchecked: {
    background: "#434343",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  contentTopSwitcher: {
    marginLeft: "0.5rem",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardIcon: {
    width: "3rem",
  },
  cardIconText: {
    color: "white",
    fontSize: "0.85rem",
  },
  contentBottomChecked: {
    background: "white",
    height: "6rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentBottomUnchecked: {
    display: "none",
  },
  contentBottomInput: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    width: "9rem",
    height: "2rem",
    marginBottom: "0.15rem",
    fontSize: "0.75rem",
    padding: "0.50rem",
  },
});

const Kubernetes = () => {
  const [state, setState] = React.useState({
    checked: false,
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container className={classes.cardContainer}>
      {" "}
      <Card
        className={
          state.checked
            ? `${classes.card} ${classes.cardChecked}`
            : `${classes.card} ${classes.cardUnchecked}`
        }
        variant="outlined"
      >
        <CardContent className={classes.cardContent}>
          <div
            className={
              state.checked ? classes.contentTop : classes.contentTopUnchecked
            }
          >
            <FormControlLabel
              className={classes.contentTopSwitcher}
              control={<MeshySwitch checked={state.checked} name="checked" />}
              onChange={handleChange}
            />
            <div className={classes.iconContainer}>
              <img
                className={classes.cardIcon}
                src={kubernetesIcon}
                alt="kubernetes icon"
              />
              <Typography className={classes.cardIconText} color="primary">
                Kubernetes
              </Typography>
            </div>
          </div>
          <div
            className={
              state.checked
                ? classes.contentBottomChecked
                : classes.contentBottomUnchecked
            }
          >
            <Input
              placeholder="Upload"
              disableUnderline="false"
              className={classes.contentBottomInput}
            ></Input>
            <Input
              placeholder="Context"
              disableUnderline="false"
              className={classes.contentBottomInput}
            ></Input>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Kubernetes;
