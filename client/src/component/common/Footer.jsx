import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 50,
    backgroundColor: "black",
    "& h1": {
      color: "white",
    },
  },
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>フッターです</h1>
    </div>
  );
};

export default Footer;
