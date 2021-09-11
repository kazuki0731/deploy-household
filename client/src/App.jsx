import Router from "./Routes/Router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    textAlign: "center",
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
