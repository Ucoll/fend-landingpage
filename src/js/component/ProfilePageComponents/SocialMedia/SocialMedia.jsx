import React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import "./SocialMedia.scss";

ProfileSocialMediaPropTypes = {
  socialMediaIcon: PropTypes.string,
  socialMediaUser: PropTypes.string,
}

/**
 * ! Creates the Profile Social Media
 * * Keili Rosales - 2022-02-21
 * @returns React Component
 * @params Props {props}
 * TODO: It is missing to add the props to connect it with the back. At the moment, it has only test data.
 */
const ProfileSocialMedia = props => {
  return (
    <div className="profile-socialmedia">
      <Icon className="button-socialmedia" icon="akar-icons:twitter-fill" />
      {props.socialMediaIcon}

      <div className="socialmedia-content">
        <p>{props.socialMediaUser}</p>
      </div>
      
    </div>
  );
};

ProfileSocialMedia.PropTypes = ProfileSocialMediaPropTypes;

export default ProfileSocialMedia;
