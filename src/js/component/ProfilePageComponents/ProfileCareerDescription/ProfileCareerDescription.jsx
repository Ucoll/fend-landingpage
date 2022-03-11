import React from "react";
import * as propTypes from "prop-types";

import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

import "./ProfileCareerDescription.scss";

const ProfileCareerDescriptionPropTypes = {
  university: propTypes.string,
  faculty: propTypes.string,
  careerDescription: propTypes.string,
}

/**
 * ! Creates the Profile Career Description
 * * Keili Rosales - 2022-02-17
 * @param {props} Props - 
 * @returns {component} React Component
 */
const ProfileCareerDescription = props => {
  return (
    <div className="profilecareer-description">
      <div className="career-editicon">
        <ProfileEditButton />
      </div>
      <div className="career-title">
          <p>{props.university} | {props.faculty}</p>
      </div>
      <div className="career-description">
          {props.careerDescription}
      </div>
    </div>
  );
};

ProfileCareerDescription.propTypes = ProfileCareerDescriptionPropTypes;

export default ProfileCareerDescription;
