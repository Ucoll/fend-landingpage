import React from "react";
import * as PropTypes from "prop-types";

import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

import "./ProfileCareerDescription.scss";

const ProfileCareerDescriptionPropTypes = {
  university: PropTypes.string,
  faculty: PropTypes.string,
  careerDescription: PropTypes.string,
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

ProfileCareerDescription.PropTypes = ProfileCareerDescriptionPropTypes;

export default ProfileCareerDescription;
