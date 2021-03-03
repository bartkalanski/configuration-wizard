import React from "react";
import {
  makeStyles,
  withStyles,
  Switch,
  FormControlLabel,
  Container,
  Card,
  CardActions,
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
    marginBottom: "7rem",
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
    margin: "1rem 2rem -1rem 2rem",
    borderRadius: "35px 35px 0 0",
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
    alignItems: "center"
  },

  contentTopImg: {
    color: "white",
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
});

const AddServiceMesh = () => {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const handleChange = (e) => (!checked ? setChecked(true) : setChecked(false));

  return (
    <Container className={classes.root}>
      <Card
        className={
          checked
            ? classes.card
            : classes.cardUnchecked
        }
        variant="outlined"
      >
        <CardContent className={classes.cardContent}>
          <div className={
              checked
                ? classes.contentTop
                : classes.contentTopUnchecked
            }>
            <FormControlLabel
              className={classes.contentTopSwitcher}
              control={<MeshySwitch name="checkedA" />}
              onChange={handleChange}
            />
            <Typography className={classes.contentTopImg}>
              SVG Goes Here
            </Typography>
          </div>
          <div
            className={
              checked
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
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Card 2
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Card 3
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddServiceMesh;
