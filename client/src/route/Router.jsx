import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../page/Top";
import Input from "../page/Input";
import Total from "../page/Total";
import Templete from "../component/common/Templete";

const Router = () => {
  return (
    <BrowserRouter>
      <Templete>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/input" component={Input} />
          <Route exact path="/total" component={Total} />
        </Switch>
      </Templete>
    </BrowserRouter>
  );
};

export default Router;
