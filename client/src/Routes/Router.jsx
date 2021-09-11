import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../components/Top";
import Input from "../components/Input";
import Total from "../components/Total";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/input" component={Input} />
        <Route exact path="/total" component={Total} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
