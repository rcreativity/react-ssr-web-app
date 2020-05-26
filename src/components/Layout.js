import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes/index";
import Header from './Header.js'

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Layout;
