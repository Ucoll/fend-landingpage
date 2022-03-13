import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import HomePage from "./views/HomePage/HomePage.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import Register from "./views/LandingPage/RegisterSubview/Register.jsx";
import Messages from "./views/Messages/Messages.jsx";
import MessageViewer from "./views/Messages/MessageViewer/MessageViewer.jsx";
import Profile from "./views/Profile/Profile.jsx";
import MessageEditor from "./views/Messages/MessageEditor/MessageEditor.jsx";


/**
 * ! Layout component for the views
 * * Template Component
 */
const Layout = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <div>
          {/* <CollConstructor /> */}
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* <LandingPage/> */}
            {/* <HomePage/> */}
            {/* TODO: <Route exact path="/profile" component={Profile} /> */}
            {/* <Profile /> */}
            {/* <Register/> */}
            {/* <Messages/> */}
            {/* <MessageViewer/> */}
            <MessageEditor/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
