import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import HomePage from "./views/Home-Page/Home-Page.jsx";

/**
 * ! Layout component for the views
 * * Template Component
 */
const Layout = () => {

  return (
    <div>
      <BrowserRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
