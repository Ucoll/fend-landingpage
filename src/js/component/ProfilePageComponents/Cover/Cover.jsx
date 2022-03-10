import React from "react";
import * as PropTypes from "prop-types";

// import CoverBackground from "./Cover Background.jpg";
import Portrait from "../../StaticComponents/Portraits/Portrait/Portrait.jsx";
import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

import './Cover.scss';

const CoverPropTypes = {
  backgroundCoverImage: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

/**
 * ! Cover with Portrait 
 * * AslanSN - 2022-02-16
 * @param {props} props 
 */
const Cover = props => {
  return (
    <>
      <div className="cover">
        <div className="container">
          <img src={props.backgroundCoverImage} alt="Background Cover" />
        </div>
        <Portrait {...props.avatar}/>
        <h1> {props.name}</h1>
        <div className="cover-editicon">
        <ProfileEditButton />
      </div>
      </div>
    </>
  );
};

Cover.PropTypes = CoverPropTypes;

export default Cover;
