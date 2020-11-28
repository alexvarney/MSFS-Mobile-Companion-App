import React from "react";
import { Switch, Route } from "react-router-dom";
import Map from "../states/map";
import Pane from "../atoms/pane";

const NavComponent = () => <p style={{ color: "#fff" }}>Nav</p>;

export default function StateRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Pane fullHeight noPadding>
          <Map />
        </Pane>
      </Route>
      <Route path="/nav">
        <Pane>
          <NavComponent />
        </Pane>
      </Route>
    </Switch>
  );
}
