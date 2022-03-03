import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";

import PortraitWithName from "../../../StaticComponents/Portraits/PortraitWithName/PortraitWithName.jsx";
import Collapse from "../../../StaticComponents/Buttons/Collapse/Collapse.jsx";
import Classes from "./ClassesComponent/Classes.jsx";

import "./ColleaguesSideMenuStyles.scss";

const ColleaguesSideMenuPropotypes = {
  university: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.object, // Must have all the classes of the User
  colleagues: Proptypes.object, //This object must have the 3 most closer colleagues
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

  const classListener = (props) => (
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
          <ul>{props.colleagues}</ul>
        </div>
        <hr />
        <div className="classes">
          <ul>{props.classes}</ul>
          {/* //TODO: ADD -> listing func by MAP method or so for the classes*/}
          {/* //TODO: CONDITION -> classes =< 2 ? + "<ul>{props.classes}</ul>"  and so in PAIRS!*/}
        </div>
        <hr />
      </div>
    </>
  );
};

ColleaguesSideMenu.PropTypes = ColleaguesSideMenuPropotypes;

export default ColleaguesSideMenu;
