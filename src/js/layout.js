import React from "react";
import { BrowserRouter } from "react-router-dom";

import injectContext from "./store/appContext";

import LikeButtons from "./component/Buttons/Like/LikeButtons.jsx";
import ProfileSideMenu from "./component/HoverCollapsable/ProfileSideMenu.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ProfileSideMenu />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
