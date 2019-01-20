import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import About from "./pages/about/About";
import Catalog from './pages/catalog/Catalog';

const Routes = ({ state, setUser }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Index {...{ ...props, ...state, setUser }} />}
      />
      <Route
        path="/about"
        render={props => <About {...{ ...props, ...state, setUser }} />}
      />
      <Route
        path='/catalog'
        render={ props => <Catalog {...{ ...props, ...state, setUser }} /> }
      />
    </Switch>
  );
};

export default Routes;
