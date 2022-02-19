import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import HomePage from "./views/Home-Page/Home-Page.jsx";
import Profile from "./views/Profile/Profile.jsx";
import ScrapProfile from "./views/Profile/ScrapProfileView/ScrapProfile.jsx";


/**
 * ! Layout component for the views
 * * Template Component
 */

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  // const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename="/">
        <div>
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* TODO: <Route exact path="/profile" component={Profile} /> */}
            <ScrapProfile/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
