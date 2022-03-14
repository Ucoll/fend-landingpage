import React, { useState, useEffect } from "react";
import * as propTypes from "prop-types";

import PortraitWithName from "../../../StaticComponents/Portraits/PortraitWithName/PortraitWithName.jsx";
import Collapse from "../../../StaticComponents/Buttons/Collapse/Collapse.jsx";
import Classes from "./ClassesComponent/Classes.jsx";

import "./ColleaguesSideMenuStyles.scss";

const ColleaguesSideMenuPropTypes = {
  university: propTypes.string,
  name: propTypes.string,
  classes: propTypes.object, // Must have all the classes of the User
  colleagues: propTypes.object, //This object must have the 3 most closer colleagues
};

/**
 * ! Side Menu -> Colleagues
 * * AslanSN - 2022-02-14
 * @param {props} props
 * @return {Component} Colleagues Side Menu React Component
 */
const ColleaguesSideMenu = props => {
  const namedPortraitListener = () => (
    <li>
      <PortraitWithName {...props.colleagues} />
    </li>
  );

  const classListener = () => (
    <>
      <li>
        <Classes {...props.classes} />
      </li>
    </>
  );

  return (
    <>
      <div className="colleagues-side-menu">
        <Collapse className="colleagues-collapse" />
        <h3>Colleagues</h3>
        <h4>
          {props.university} | {props.class}
        </h4>
        <div className="colleagues">
          <ul className="colleagues-side-ul">{props.colleagues}</ul>
        </div>
        <hr />
        <div className="classes">
          <ul className="colleagues-side-ul">{props.classes}</ul>
          {/* //TODO: ADD -> listing func by MAP method or so for the classes*/}
          {/* //TODO: CONDITION -> classes =< 2 ? + "<ul>{props.classes}</ul>"  and so in PAIRS!*/}
        </div>
        <hr />
      </div>
    </>
  );
};

ColleaguesSideMenu.propTypes = ColleaguesSideMenuPropTypes;

export default ColleaguesSideMenu;
