import React from "react";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import {
  makeStyles,
  withStyles,
  Switch,
  FormControlLabel,
  Input,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core/";

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
    position: "relative",
    left: "7.5rem",
    width: "14rem",
    borderRadius: "15%",
  },
  cardChecked: {
    bottom: "2.5rem",
    height: "14rem",
  },
  cardUnchecked: {
    bottom: "8.1rem",
    height: "8.4rem",
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
  contentBottomInput: {
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "0 0.5rem",
    marginBottom: "0.2rem",
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
          <Typography
            className={classes.contentTopImg}
            color={state.checked ? "error" : "textPrimary"}
          >
            SVG Goes Here
          </Typography>
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
  );
};

export default Kubernetes;
