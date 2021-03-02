import React from "react";
import {
  makeStyles,
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "7rem",
  },
  card: {
    height: "12rem",
    width: "12rem",
    margin: "1rem 2rem -1rem 2rem",
    borderRadius: "15%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  contentTop: {
      background: 'black',
      width: "100%",
  },
  contentBottom: {

  },
});

const AddServiceMesh = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card className={classes.card} raised="true" variant="outlined">
        <CardContent className={classes.cardContent}>
          <div className={classes.contentTop}>Top</div>
          <div className={classes.contentBottom}>Bottom</div>
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
