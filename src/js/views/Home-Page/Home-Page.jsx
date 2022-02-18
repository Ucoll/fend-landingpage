import React from "react";

import Navbar from "../../component/Navbar/Navbar.jsx";
import Coll from "../../component/Coll/Coll.jsx";
import ProfileSideMenu from "../../component/Menus/ProfileSideMenu/ProfileSideMenu.jsx";
import ColleaguesSideMenu from "../../component/Menus/ColleaguesSideMenu/ColleaguesSideMenu.jsx";
import ResourcesMenu from "../../component/Menus/Resources/ResourcesMenu.jsx";
import DemoCalendar from "./CalendarSideMenuDemo.png";

import './Home-Page.scss';
import CompressedColl from "../../component/Coll/CompressedColl/CompressedColl.jsx";
/**
 * ! View -> Home-Page
 * * AslanSN - 2022-02-18
 */
const HomeView = () => {
  return (
    <>
      <Navbar />
      <div className="Home-Page">
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
            <CompressedColl />
          </li>
          <li className="coll">
            <Coll />
          </li>
        </ul>
        <ul className="right-collapsables">
          <li className="menu">
            <img src={DemoCalendar} alt="Demo Calendar Side Menu" />
          </li>
          <li className="menu">
            <ResourcesMenu />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeView;
