import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Portrait from "../../../../StaticComponents/Portraits/Portrait/Portrait.jsx";

import "./ClassesStyles.scss";

const ClassesPreviewProptypes = {
  className: PropTypes.string.isRequired,
  classColleagues: PropTypes.object.isRequired, //Must all colleagues of the class (5 Colleagues max?)
};

/**
 * ! Classes preview section
 * ? for the Colleagues side menu
 * * AslanSN - 2022-02-15
 * @param {props} props
 * @returns {Component} Classes Preview React Component
 */
const ClassesPreview = (props) => {

  // TODO: CONDITION -> if more than 4 portraits display a + icon
  
  const portraitsListing = (props) => (
    <li>
      <Portrait avatar={props.portrait} className="classes-portrait" />
    </li>
  );

  return (
    <div className="classes-container">
      <span>{props.class}</span>
      <ul>{...props.classColleagues}</ul> {/* //TODO: Listing algorithm */}
    </div>
  );
};

ClassesPreview.propTypes = ClassesPreviewProptypes;

export default ClassesPreview;
