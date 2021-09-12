import Router from "./Routes/Router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    textAlign: "center",
    "& ul": {
      margin: 0,
      "& li": {
        listStyle: "none",
        padding: 0,
      },
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Router />
    </div>
  );
}

export default App;
