import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Details from "../pages/Details";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
};

export default Routes;
