import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ProfileBiography from "./component/Profile-PageComponents/ProfileBiography/ProfileBiography.jsx";

import injectContext from "./store/appContext";

// import HomePage from "./views/HomePage/Home-Page.jsx.js";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import Register from "./views/LandingPage/RegisterSubview/Register.jsx";
import Messages from "./views/Messages/Messages.jsx";
// import Profile from "./views/Profile/Profile.jsx";
// import ScrapProfile from "./views/Profile/ScrapProfileView/ScrapProfile.jsx";


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
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* TODO: <Route exact path="/profile" component={Profile} /> */}
            {/* <ScrapProfile/> */}
            {/* <LandingPage/> */}
            {/* <Register/> */}
            <Messages/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
