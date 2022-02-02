import React from "react";
import { BrowserRouter } from "react-router-dom";

import injectContext from "./store/appContext";



import { NewPostVideo } from "./component/Buttons/NewPostButtons/NewPostVideo.jsx";
import LikeButton from "./component/Buttons/Like/LikeButton.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
		  <NewPostVideo/>
        <LikeButton/>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
