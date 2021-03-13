import React from "react";
import {
  makeStyles,
  withStyles,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core/";

import TimerIcon from '@material-ui/icons/Timer';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

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
  contentBottomIcon: {
    marginBottom: "-0.4rem",
    color: "#00B39F",
  },
});

const External = () => {
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
    <Container className={classes.cardContainer}>
      <Card
        className={
          state.checkedA
            ? `${classes.card} ${classes.cardChecked}`
            : `${classes.card} ${classes.cardUnchecked}`
        }
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
            <div className={classes.iconContainer}>
              <TimerIcon className={classes.cardIcon} />
              <Typography className={classes.cardIconText} color="primary">
                Open Service <br />
                Mesh
              </Typography>
            </div>
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
        className={
          state.checkedB
            ? `${classes.card} ${classes.cardChecked}`
            : `${classes.card} ${classes.cardUnchecked}`
        }
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
            <div className={classes.iconContainer}>
              <TimerIcon className={classes.cardIcon} />
              <Typography className={classes.cardIconText} color="primary">
                Consul
              </Typography>
            </div>
          </div>
          <div
            className={
              state.checkedB
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
        className={
          state.checkedC
            ? `${classes.card} ${classes.cardChecked}`
            : `${classes.card} ${classes.cardUnchecked}`
        }
        variant="outlined"
      >
        <CardContent className={classes.cardContent}>
          <div
            className={
              state.checkedC ? classes.contentTop : classes.contentTopUnchecked
            }
          >
            <FormControlLabel
              className={classes.contentTopSwitcher}
              control={<MeshySwitch checked={state.checkedC} name="checkedC" />}
              onChange={handleChange}
            />
            <div className={classes.iconContainer}>
              <TimerIcon className={classes.cardIcon} />
              <Typography className={classes.cardIconText} color="primary">
                Linkered
              </Typography>
            </div>
          </div>
          <div
            className={
              state.checkedC
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
    </Container>
  );
};

export default External;
