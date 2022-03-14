import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import CollConstructor from "./component/CollConstructor/CollConstructor.jsx"
import HomePage from "./views/HomePage/HomePage.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import Register from "./views/LandingPage/RegisterSubview/Register.jsx";
import Messages from "./views/Messages/Messages.jsx";
import MessageViewer from "./views/Messages/MessageViewer/MessageViewer.jsx";
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
<<<<<<< HEAD
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* <LandingPage/> */}
            {/* <HomePage/> */}
=======
            <Route exact path="/" component={HomePage} />
            {/* <LandingPage/> */}
            <HomePage/>
>>>>>>> 029789379d3d413ff8a071b46b22589a7b62d9e5
            {/* TODO: <Route exact path="/profile" component={Profile} /> */}
            <Profile />
            {/* <Register/> */}
            {/* <Messages/> */}
            {/* <MessageViewer/> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
