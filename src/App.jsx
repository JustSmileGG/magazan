import React, { Fragment } from "react";
import Component from "react-component-component";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";

const getUserFromLocalStorage = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      console.warn("Cannot deserialize user", e);
      return null;
    }
  } else {
    return null;
  }
};

const App = () => {
  return (
    <Component
      initialState={{
        user: getUserFromLocalStorage()
      }}
    >
      {({ state, setState }) => {
        const setUser = user => {
          setState({ user });
        };

        return (
          <Router>
            <Routes state={state} setUser={setUser} />
          </Router>
        );
      }}
    </Component>
  );
};

export default App;
