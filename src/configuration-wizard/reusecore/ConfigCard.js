import React from "react";
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
import TimerIcon from "@material-ui/icons/Timer";

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
  card: {
    position: "relative",
    width: "10rem",
    minWidth: "10rem",
    border: "1px solid gray",
    borderRadius: "0.75rem",
    top: "2rem",
    margin: "0rem 2rem 6rem 2rem",
    ["@media (max-width:1024px)"]: { //eslint-disable-line no-useless-computed-key
      margin: "0rem 2rem 6rem 0",
    },
  },
  cardChecked: {
    height: "15rem",
    marginBottom: "1rem",
  },
  cardUnchecked: {
    height: "10rem",
    //marginBottom: "1rem",
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
  topInputIcon: {
    position: "absolute",
    fontSize: "1.25rem",
    color: "lightgray",
    bottom: "3rem",
    left: "7.5rem",
    cursor: "pointer",
    zIndex: "99999",
    "&:hover": {
      color: 'grey'
    }
  }
});

const ConfigCard = ({
  handleSwitch,
  icon,
  name,
  topInputPlaceholder,
  TopInputIcon,
  bottomInputPlaceholder,
}) => {
  const [state, setState] = React.useState(false);
  const classes = useStyles();

  const handleChange = (e) => {
    setState(e.target.checked);
    if (handleSwitch) {
      handleSwitch(e.target.name, e.target.checked);
    }
  };
  return (
    <Card
      className={
        state
          ? `${classes.card} ${classes.cardChecked}`
          : `${classes.card} ${classes.cardUnchecked}`
      }
      variant="outlined"
    >
      <CardContent className={classes.cardContent}>
        <div
          className={
            state ? classes.contentTop : classes.contentTopUnchecked
          }
        >
          <FormControlLabel
            className={classes.contentTopSwitcher}
            control={<MeshySwitch checked={state} name={name} />}
            onChange={handleChange}
          />
          <div className={classes.iconContainer}>
            {icon === "timer" ? (
              <TimerIcon />
            ) : (
              <img
                className={classes.cardIcon}
                src={icon}
                alt={`${name} icon`}
              />
            )}
            <Typography className={classes.cardIconText} color="primary">
              {name}
            </Typography>
          </div>
        </div>
        <div
          className={
            state
              ? classes.contentBottomChecked
              : classes.contentBottomUnchecked
          }
        >
          {name === "Open Service Mesh" ||
            name === "Consul" ||
            name === "Linkerd" ? null : (
            <>{TopInputIcon ? <TopInputIcon className={classes.topInputIcon} /> : null}
              <Input
                placeholder={topInputPlaceholder}
                disableUnderline="false"
                className={classes.contentBottomInput}
              ></Input>
              <Input
                placeholder={bottomInputPlaceholder}
                disableUnderline="false"
                className={classes.contentBottomInput}
              ></Input>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfigCard;