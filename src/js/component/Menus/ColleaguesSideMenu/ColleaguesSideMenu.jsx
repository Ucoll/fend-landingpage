import React, { useState, useEffect } from "react";
// import propTypes from 'propTypes';
import "./ColleaguesSideMenuStyles.scss";
import profileImage from "./Ellipse.png";
import PortraitWithName from "../../Profiles/PortraitWithName/PortraitWithName.jsx";
import Collapse from "../../Buttons/Collapse/Collapse.jsx";
import Classes from "../ClassesComponent/Classes.jsx";

/**
 * ! Side Menu -> Colleagues
 * * AslanSN - 2022-02-14
 *
 * @params props {props}
 */
const ColleaguesSideMenu = () => {
  return (
    <>
      <div className="colleagues-side-menu">
        <Collapse className="colleagues-collapse" />
        <h3>Colleagues</h3>
        <h4>Harvard University | Department of Science</h4>
        <div className="colleagues">
          <ul>
            <li>
              <PortraitWithName />
            </li>
            <li>
              <PortraitWithName />
            </li>
            <li>
              <PortraitWithName />
            </li>
            <li>
              <PortraitWithName />
            </li>
          </ul>
        </div>
        <hr />
        <div className="classes">
          <ul>
            <li>
              <Classes />
            </li>
            <li>
              <Classes />
            </li>
          </ul>
          <ul>
            <li>
              <Classes />
            </li>
            <li>
              <Classes />
            </li>
          </ul>
          <ul>
            <li>
              <Classes />
            </li>
            <li>
              <Classes />
            </li>
          </ul>
          <ul>
            <li>
              <Classes />
            </li>
            <li>
              <Classes />
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ColleaguesSideMenu;
