import React from "react";
import * as propTypes from "prop-types";

// import CoverBackground from "./Cover Background.jpg";
import Portrait from "../../StaticComponents/Portraits/Portrait/Portrait.jsx";
import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

import './Cover.scss';

const CoverPropTypes = {
  backgroundCoverImage: propTypes.string,
  avatar: propTypes.string,
  name: propTypes.string,
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

Cover.propTypes = CoverPropTypes;

export default Cover;
