import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import About from "./pages/about/About";
import Catalog from "./pages/catalog/Catalog";
import ItemPage from "./pages/item/ItemPage";
import AuthPage from "./pages/auth/AuthPage";

const Routes = ({ state, setUser }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Index {...{ ...props, ...state, setUser }} />}
      />
      <Route
        exact
        path="/about"
        render={props => <About {...{ ...props, ...state, setUser }} />}
      />
      <Route
        exact
        path="/catalog"
        render={props => <Catalog {...{ ...props, ...state, setUser }} />}
      />
      <Route
        exact
        path="/item/:id"
        render={props => (
          <ItemPage
            {...{ ...props, ...state, setUser, itemId: props.match.params.id }}
          />
        )}
      />
      <Route
        exact
        path="/auth"
        render={props => <AuthPage {...{ ...props, ...state, setUser }} />}
      />
    </Switch>
  );
};

export default Routes;
