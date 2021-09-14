import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 50,
    backgroundColor: "lightgreen",
    "& h1": {
      color: "blue",
    },
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>ヘッダーです</h1>
    </div>
  );
};

export default Header;
