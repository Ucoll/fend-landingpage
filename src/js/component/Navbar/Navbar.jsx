import React from "react";
import { Icon } from "@iconify/react";

import UCollLogo from "../Buttons/UCollLogo/UCollLogo.jsx";
import FeedClass from "../Buttons/Feed/FeedClass.jsx";
import FeedCollege from "../Buttons/Feed/FeedCollege.jsx";
import FeedGlobal from "../Buttons/Feed/FeedGlobal.jsx";
import NewPost from "../Buttons/NewPost/NewPost.jsx";
import SearchBar from "../Buttons/SearchBar/SearchBar.jsx";

import "./Navbar.scss";
import Portrait from "../Profiles/Portrait/Portrait.jsx";

/**
 * ! Creates the Navbar component
 * * OvidioSantoro - 2022-02-14
 * @returns React Component
 */
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-home">
        <div className="navbar-logo-div">
          {/* TODO: Solve the responsiveness problem when zooming in & out */}
          <UCollLogo className="navbar-logo" />
        </div>
      </div>
      <div className="navbar-filters">
        <FeedClass />
        <FeedCollege />
        <FeedGlobal />
      </div>
      <div className="navbar-action">
        <NewPost />
        {/* TODO: Fix the Searchbar animation */}
        <SearchBar />
      </div>
      <div className="navbar-avatar">
        <Portrait/>
      </div>
    </div>
  );
};

export default Navbar;
