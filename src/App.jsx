import React from "react";
import Component from "react-component-component";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";

const getUserFromLocalStorage = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      console.log("User: ", userStr);

      return JSON.parse(userStr);
    } catch (e) {
      console.warn("Cannot deserialize user", e);
      return null;
    }
  } else {
    return null;
  }
};

const setUserToLocalStorage = user => {
  if (user) {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.error(e.message);
    }
  } else {
    console.error("User is empty!");
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
          if (user) {
            setState({ user });
            setUserToLocalStorage(user);
          } else {
            setState({ user });
            localStorage.removeItem("user");
          }
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
