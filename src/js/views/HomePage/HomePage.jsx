import React, { useState, useEffect } from "react";

import Navbar from "../../component/StaticComponents/Navbar/Navbar.jsx";
import Coll from "../../component/HomePageComponents/Coll/Coll.jsx";
import ProfileSideMenu from "../../component/HomePageComponents/Menus/ProfileSideMenu/ProfileSideMenu.jsx";
import ColleaguesSideMenu from "../../component/HomePageComponents/Menus/ColleaguesSideMenu/ColleaguesSideMenu.jsx";
import ResourcesMenu from "../../component/HomePageComponents/Menus/Resources/ResourcesMenu.jsx";
import DemoCalendar from "./CalendarSideMenuDemo.png";
import CompressedColl from "../../component/HomePageComponents/Coll/CompressedColl/CompressedColl.jsx";

import "./HomePage.scss";
import { database } from "../../index.js";

/**
 * ! View -> Home-Page
 * * AslanSN - 2022-02-18 & OvidioSantoro - 2022-13-03
 */
const HomeView = () => {
  const [data, setData] = useState([]);
  const [colls, setColls] = useState([]);
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  /**
   * ! Fetch Colls from the database
   * * OvidioSantoro - 2022-03-09
   */

  useEffect(() => {
    fetch(`${database}/colls`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setColls(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  /**
   * ! Limits the number of items of the array
   * * AslanSN - 2022-02-25
   * ? To show more pre-loaded Colls change the last number of the splice number.
   * @param {Array} array
   * @returns
   */
  const limiter = (array) => array.splice(array.length - 1, 12);

  /**
   * ! Creates a limited Array of Colls
   * * AslanSN - 2022-02-22
   * @param {Object} object
   * @returns
   */

  const userCollMatch = (dataObj, collObj) =>
    dataObj.User.id === collObj.Coll.sender_id;


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
          {colls.map((item) => (
            item.type === "video" || item.type === "file"
            ?<li className="coll">
              <CompressedColl
              key={item.id}
              id={item.id}
              type={item.type}
              portrait={item.portrait}
              name={item.sender}
              studies={item.studies[0]}
              postItColor={item.class}
              date={item.timestamp}
              title={item.title}
              like={item.likes}
              content={item.content}
              comments={item.comments}
              favs={item.favs}
            ></CompressedColl>
            </li>
            : <li className="coll">
            <Coll
              key={item.id}
              id={item.id}
              type={item.type}
              portrait={item.portrait}
              name={item.sender}
              studies={item.studies[0]}
              postItColor={item.class}
              date={item.timestamp}
              title={item.title}
              like={item.likes}
              content={item.content}
              comments={item.comments}
              favs={item.favs}
            ></Coll>
          </li>
          ))}
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