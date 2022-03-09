import React from "react";
import * as PropTypes from "prop-types";
import "./SocialMediaText.scss";

ProfileSocialMediaPropTypes = {
  socialMediaName: PropTypes.string,
  socialMediaLink: PropTypes.string,
};

/**
 * ! Creates the Profile Social Media Text
 * * Keili Rosales - 2022-02-23
 * @param {props} Props 
 * @return React Component
 */
const ProfileSocialMediaText = props => {
  return (
    <div className="profile-socialmediatext">
      <div className="socialmediatext">
        <p>{props.socialMediaName}</p>
      </div>
      <div className="socialmediatext-content">
        <p>{props.socialMediaLink}</p>
      </div>
    </div>
  );
};

ProfileSocialMediaText.PropTypes = ProfileSocialMediaPropTypes;

export default ProfileSocialMediaText;
