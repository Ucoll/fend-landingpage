import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import NewPostVideo from "./component/Buttons/NewPostButtons/NewPostVideo.jsx";
import NewPostLink from "./component/Buttons/NewPostButtons/NewPostLink.jsx";
import NewPostSurvey from "./component/Buttons/NewPostButtons/NewPostSurvey.jsx";
import NewPostText from "./component/Buttons/NewPostButtons/NewPostText.jsx";
import SearchBar from "./component/Buttons/SearchBar/SearchBar.jsx";
import NewPost from "./component/Buttons/NewPost/NewPost.jsx";
import Share from "./component/Buttons/Share/Share.jsx";

import Favorite from "./component/Buttons/Favorite/Favorite.jsx";
import UCollLogo from "./component/Buttons/UCollLogo/UCollLogo.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>				    
				<NewPostVideo />
				<NewPostLink />
				<NewPostSurvey />
				<NewPostText />
				<NewPost />
				<SearchBar />
				<Share />	
				<Favorite />				
				<UCollLogo />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
