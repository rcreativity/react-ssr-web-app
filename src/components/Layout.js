import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes/index";

const Layout = () => {
  return (
    <div className="container">
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Layout;
