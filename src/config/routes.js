import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Developers from "../components/Developers";
import HomePage from "../components/HomePage";
import Tutor from "../components/Tutor";
import Student from "../components/Student";
import Search from "../components/Search";

const routes = (
  <Router history={browserHistory}>
   <Route path="/" component={Main}>
    <Route path="Developers" component={Developers} />
    <Route path="Tutor" component={Tutor} />
    <Route path="Student" component={Student} />
    <Route path="Home" component={HomePage} />
    <Route path="Search" component={Search} />
    <IndexRoute component={HomePage} />
    </Route>
  </Router>
);

export default routes;
