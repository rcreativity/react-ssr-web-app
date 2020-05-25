import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes/index";

const Layout = () => {
  const [title] = useState("Welcome to React SSR!");
  return (
    <div className="container">
      <h1>{title}</h1>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Layout;
