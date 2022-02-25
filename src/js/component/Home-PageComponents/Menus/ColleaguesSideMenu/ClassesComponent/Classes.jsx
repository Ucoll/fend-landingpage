import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import * as PropTypes from "prop-types";

import Portrait from "../../../../StaticComponents/Portraits/Portrait/Portrait.jsx";

import "./ClassesStyles.scss";


const ClasesProptypes = {
  class: PropTypes.string.isRequired,
};

/**
 * ! Classes preview section
 * ? for the Colleagues side menu
 * * AslanSN - 2022-02-15
 *
 * @params props {props}
 */
const ClassesPreview = (props) => {
  const [classColleagues, setClassColleagues] = useState([]);
  const [error, setError]= useState("");



  const portraitsListing = (props) => (
      <li>
          <Portrait avatar={props.colleague} className="classes-portrait" />
      </li>
  );

  return (
    <div className="classes-container">
      <span>{props.class}</span>
      <ul></ul>
    </div>
  );
};

Portrait.PropTypes = PortraitProptypes;

export default ClassesPreview;
