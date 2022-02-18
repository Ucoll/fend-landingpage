import React from "react";

import Navbar from "../../component/Navbar/Navbar.jsx";
import Coll from "../../component/Coll/Coll.jsx";
import ProfileSideMenu from "../../component/Menus/ProfileSideMenu.jsx";
import ColleaguesSideMenu from "../../component/Menus/ColleaguesSideMenu/ColleaguesSideMenu.jsx";

/**
 * ! View -> Home-Page
 * * AslanSN - 2022-02-18
 */
const HomeView = () => {
  <>
    <Navbar />
    <ul className="left-collapsables">
      <li className="menu">
        <ProfileSideMenu />
      </li>
      <li className="menu">
        <ColleaguesSideMenu />
      </li>
    </ul>
    <ul className="coll-ul">
      <li className="coll">
        <Coll />
      </li>
      <li className="coll">
        <Coll />
      </li>
      <li className="coll">
        <Coll />
      </li>
    </ul>
    <ul className="right-collapsables">
      <li className="menu">
        <ProfileSideMenu />
      </li>
      <li className="menu">
        <ColleaguesSideMenu />
      </li>
    </ul>
  </>;
};

export default HomeView;