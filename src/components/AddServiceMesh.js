import React from "react";
import {
  makeStyles,
  withStyles,
  Switch,
  FormControlLabel,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core/";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

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
  root: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    height: "14rem",
    width: "14rem",
    margin: "1rem 2rem -1rem 2rem",
    borderRadius: "15%",
  },
  cardUnchecked: {
    height: "8.4rem",
    width: "14rem",
    margin: "1rem 2rem 5.4rem 2rem",
    borderRadius: "35px 35px 0 0",
  },
  cardUncheckedTwo: {
    height: "8.4rem",
    width: "14rem",
    margin: "1rem 2rem 5.4rem 2rem",
    borderRadius: "35px",
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
    height: "60%",
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

  contentTopImg: {
    //color: "white",
  },
  contentTopSwitcher: {
    marginLeft: "0.5rem",
  },
  contentBottomChecked: {
    background: "white",
    height: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentBottomUnchecked: {
    display: "none",
  },
  contentBottomControlPlane: {},
  contentBottomDataPlane: {},
  contentBottomIcon: {
    marginBottom: "-0.4rem",
    color: "#00B39F",
  },
  contentBottomIconDisabled: {
    marginBottom: "-0.4rem",
  },
});

const AddServiceMesh = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container className={classes.root}>
      <Card
        className={state.checkedA ? classes.card : classes.cardUnchecked}
        variant="outlined"
      >
        <CardContent className={classes.cardContent}>
          <div
            className={
              state.checkedA ? classes.contentTop : classes.contentTopUnchecked
            }
          >
            <FormControlLabel
              className={classes.contentTopSwitcher}
              control={<MeshySwitch checked={state.checkedA} name="checkedA" />}
              onChange={handleChange}
            />
            <Typography
              className={classes.contentTopImg}
              color={state.checkedA ? "error" : "textPrimary"}
            >
              SVG Goes Here
            </Typography>
          </div>
          <div
            className={
              state.checkedA
                ? classes.contentBottomChecked
                : classes.contentBottomUnchecked
            }
          >
            <Typography className={classes.contentBottomControlPlane}>
              Control Plane: 6{" "}
              <FiberManualRecordRoundedIcon
                className={classes.contentBottomIcon}
              />
            </Typography>
            <Typography className={classes.contentBottomDataPlane}>
              Data Plane: 18
              <FiberManualRecordRoundedIcon
                className={classes.contentBottomIcon}
              />
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card
        className={state.checkedB ? classes.card : classes.cardUncheckedTwo}
        variant="outlined"
      >
        <CardContent className={classes.cardContent}>
          <div
            className={
              state.checkedB ? classes.contentTop : classes.contentTopUnchecked
            }
          >
            <FormControlLabel
              className={classes.contentTopSwitcher}
              control={<MeshySwitch checked={state.checkedB} name="checkedB" />}
              onChange={handleChange}
            />
            <Typography className={classes.contentTopImg} color={state.checkedB ? "error" : "textPrimary"}>
              SVG Goes Here
            </Typography>
          </div>
          <div
            className={
              state.checkedB
                ? classes.contentBottomChecked
                : classes.contentBottomUnchecked
            }
          >
            <Typography className={classes.contentBottomControlPlane}>
              Control Plane: 0{" "}
              <FiberManualRecordRoundedIcon
                className={classes.contentBottomIconDisabled}
                color="disabled"
              />
            </Typography>
            <Typography className={classes.contentBottomDataPlane}>
              Data Plane: 0
              <FiberManualRecordRoundedIcon
                className={classes.contentBottomIconDisabled}
                color="disabled"
              />
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.cardUncheckedTwo} variant="outlined">
        <CardContent className={classes.cardContent}>
          <div className={classes.contentTopUnchecked}>
            <FormControlLabel
              className={classes.contentTopSwitcher}
              control={<MeshySwitch checked={state.checkedC} name="checkedC" />}
              onChange={handleChange}
            />
            <Typography className={classes.contentTopImg} color={state.checkedC ? "error" : "textPrimary"}>
              SVG Goes Here
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddServiceMesh;
