import React, { useState, useEffect } from "react";
// import propTypes from 'propTypes';
import "./ColleaguesSideMenuStyles.scss";
import PortraitWithName from "../../../StaticComponents/Portraits/PortraitWithName/PortraitWithName.jsx";
import Collapse from "../../../StaticComponents/Buttons/Collapse/Collapse.jsx";
import Classes from "./ClassesComponent/Classes.jsx";

const ColleaguesSideMenuPropotypes = {
  university: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}
/**
 * ! Side Menu -> Colleagues
 * * AslanSN - 2022-02-14
 *
 * @params {props} props 
 */
const ColleaguesSideMenu = (props) => {
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
