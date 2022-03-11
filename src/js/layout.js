import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import HomeView from "./views/Home-Page/Home-Page.jsx";

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
            <Route exact path="/" component={HomeView} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
