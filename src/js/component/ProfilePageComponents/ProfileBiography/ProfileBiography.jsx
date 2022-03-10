import React from "react";
import * as PropTypes from "prop-types";

import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

import InterestTag from "../../ProfilePageComponents/Tags/InterestTag.jsx";

import "./ProfileBiography.scss";

const ProfileBiographyPropTypes = {
  profileBiographyContent: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string)
};

/**
 * ! Creates the Profile Biography
 * * Keili Rosales - 2022-02-21
 * @param {props} Props
 * @returns React Component
 */
const ProfileBiography = props => {

  const InterestTagListener = (value) => (
    <li>
      <InterestTag {...value}/>
    </li>
  );
  return (
    <div className="profile-biography">
      <div className="biography-editicon">
        <ProfileEditButton />
      </div>
      <div className="biography-content">
        {props.profileBiographyContent}
      </div>
      <div className="biography-tags">
        <ul>
          {props.interests.map(InterestTagListener)}
        </ul>
      </div>
    </div>
  );
};

ProfileBiography.PropTypes = ProfileBiographyPropTypes;

export default ProfileBiography;
