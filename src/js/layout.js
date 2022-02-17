import React from "react";
import { BrowserRouter } from "react-router-dom";

import injectContext from "./store/appContext";

import ColleaguesSideMenu from "./component/Menus/ColleaguesSideMenu/ColleaguesSideMenu.jsx";


import Navbar from "./component/Navbar/Navbar.jsx";
import Coll from "./component/Coll/Coll.jsx";
import Resource from "./component/Resources/Resource.jsx";
import ResourcesMenu from "./component/Resources/ResourcesMenu.jsx";
import Cover from "./component/Cover/Cover.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Cover/>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
