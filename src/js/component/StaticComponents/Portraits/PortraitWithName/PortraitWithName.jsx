import React from "react";
import * as PropTypes from "prop-types";

// import portrait2 from './NewFaceNewEdition.png'
import "./PortraitWithNameStyles.scss";

const ProtraitWithNamePropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

/**
 * ! Portrait with Name
 * * AslanSN - 2022/02/15
 * @param {props} props
 * @returns React Component
 */
const PortraitWithName = (props) => {
  return (
    <div className="colleague-img-container">
      <div className="circular-portrait-menu">
        <img src={props.avatar} alt={props.name} className="colleague-img" />
      </div>
      <span className="colleague-name">{props.name}</span>
    </div>
  );
};

PortraitWithName.PropTypes = ProtraitWithNamePropTypes;

export default PortraitWithName;
