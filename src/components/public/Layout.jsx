import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, user, setUser }) => (
  <Fragment>
    <Header user={user} setUser={setUser} />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
