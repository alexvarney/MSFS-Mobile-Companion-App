import React from "react";
import { Switch, Route } from "react-router-dom";
import Pane from "../atoms/pane";

//States
import Map from "../states/map";
import NavRadios from "../states/nav-radios";

export default React.memo(function StateRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Pane fullHeight noPadding>
          <Map />
        </Pane>
      </Route>
      <Route path="/nav">
        <Pane>
          <NavRadios />
        </Pane>
      </Route>
    </Switch>
  );
});
