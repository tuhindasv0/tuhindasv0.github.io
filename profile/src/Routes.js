import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Homepage";
import Certificates from "./components/Certificates";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/certifications" exact component={Certificates} />
        </Switch>
      </Router>
    );
  }
}
