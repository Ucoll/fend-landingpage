import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ProfileBiography from "./component/Profile-PageComponents/ProfileBiography/ProfileBiography.jsx";

import injectContext from "./store/appContext";

import HomePage from "./views/HomePage/HomePage.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import Register from "./views/LandingPage/RegisterSubview/Register.jsx";
import Messages from "./views/Messages/Messages.jsx";
import Profile from "./views/Profile/Profile.jsx";

/**
 * ! Layout component for the views
 * * Template Component
 */
const Layout = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <div>
          <CollConstructor />
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* <LandingPage/> */}
            {/* <HomePage/> */}
            {/* TODO: <Route exact path="/profile" component={Profile} /> */}
            {/* <Profile /> */}
            {/* <Register/> */}
            {/* <Messages/> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
