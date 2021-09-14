import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    display: "flex",
    justifyContent: "center",
    "& *": {
      margin: 5
    }
  },
});

const PageLink = () => {
  const classes = useStyles();
  return (
    <div className={classes.link}>
      <Link to="/">トップへ</Link>
      <Link to="/input">入力</Link>
      <Link to="/total">合計</Link>
    </div>
  );
};

export default PageLink;
