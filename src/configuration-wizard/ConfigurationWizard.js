import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Container,
  Button,
  Typography,
  Fade,
} from "@material-ui/core/";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Kubernetes from "./screens/Kubernetes";
import MesheryOperator from "./screens/MesheryOperator";
import AddServiceMesh from "./screens/AddServiceMesh";
import External from "./screens/External";
import svgIcons from "../icons/icons";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      background: "#00B39F",
      transition: "all 1s ease-in",
    },
  },
  completed: {
    "& $line": {
      background: "#00B39F",
      transition: "all 1s ease-in",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    transition: "all 0.5s ease-out ",
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    border: ".2rem solid #ccc",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    background: "#fff",
    color: "#3C494E",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    border: ".2rem solid #00B39F",
    transition: "all 0.5s ease-in",
  },
  completed: {
    border: ".2rem solid #00B39F",
    background: "#00B39F",
    transition: "all 0.5s ease-in",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = svgIcons(props.completed, props.active);

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "32.5rem",
    margin: "5rem auto",
    background: "white",
    boxShadow: "lightgrey 0px 0px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    textAlign: "right",
    paddingBottom: "5rem",
    marginRight: "11.5rem",
  },
  button: {
    marginRight: theme.spacing(1),
    padding: "0.5rem 2rem",
    textDecoration: "none",
    background: "white",
    color: "#647881",
    border: "1.5px solid #647881",
    "&:hover": {
      backgroundColor: "#647881",
      color: "white",
    },
  },
  backButton: {
    background: "white",
    color: "lightgray",
  },
  skipButton: {
    color: "#647881",
  },
  linkButton: {
    textDecoration: "none",
  },
  completed: {
    textAlign: "center",
  },
  checkCircleIcon: {
    color: "#00B39F",
    padding: "1rem",
    height: "auto",
    width: "4rem",
  },
}));

function getSteps() {
  return ["Kubernetes", "Meshery Operator", "Service Mesh", "External"];
}

const ConfigurationWizard = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleStep = (step) => {
    switch (step) {
      case 0:
        return <Kubernetes />;
      case 1:
        return <MesheryOperator />;
      case 2:
        return <AddServiceMesh />;
      case 3:
        return <External />;
      default:
        return null;
    }
  };

  return (
    <Container className={classes.container}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Fade timeout={{ enter: "1500ms" }} in="true">
        <div>
          {activeStep === steps.length ? (
            <Fade timeout={{ enter: "500ms" }} in="true">
              <div className={classes.completed}>
                <CheckCircleIcon className={classes.checkCircleIcon} />
                <Typography
                  variant="h4"
                  gutterBottom="true"
                  className={classes.instructions}
                >
                  Configuration done
                </Typography>
                <Typography
                  variant="subtitle1"
                  paragraph="true"
                  gutterBottom="true"
                  className={classes.instructions}
                >
                  Your configuration was successful
                </Typography>
                <div className={classes.buttonContainer}>
                  <Link to="/" className={classes.linkButton}>
                    <Button
                      className={classes.button}
                    >
                      Done
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>
          ) : (
            <>
              <div>{handleStep(activeStep)}</div>
              <div className={classes.buttonContainer}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={(classes.button, classes.backButton)}
                >
                  Back
                </Button>
                {activeStep === 1 || activeStep === 2 ? (
                  <Button onClick={handleNext} className={classes.skipButton}>
                    Skip
                  </Button>
                ) : null}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </>
          )}
        </div>
      </Fade>
    </Container>
  );
};

export default ConfigurationWizard;
