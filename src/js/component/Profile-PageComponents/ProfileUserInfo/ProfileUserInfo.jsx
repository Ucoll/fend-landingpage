import React from "react";
import * as PropTypes from "prop-types";

import ProfileEditButton from "../ProfileEditButton/ProfileEditButton.jsx";

import "./ProfileUserInfo.scss";

const ProfileUserInfoPropTypes = {
  userEmail: PropTypes.string,
  profileCreationDate: PropTypes.string.isRequired,
  karma: PropTypes.number.isRequired,
}

/**
 * ! Creates the Profile User Info
 * * Keili Rosales - 2022-02-18
 * @param {props} Props 
 * @returns React Component
 */
const ProfileUserInfo = props => {
  return (
    <div className="profile-userinfo">
      <div className="userinfo-editicon">
        <ProfileEditButton />
      </div>
      <div className="userinfo-email">
        <p>{props.userEmail}</p>
      </div>
      <div className="userinfo-container">
        <div className="userinfo-member">
          <p>Member since:</p>
        </div>
        <div className="userinfo-date">
          <p>{props.profileCreationDate}</p>
        </div>
        <div className="userinfo-karma">
          <p>Karma:</p>
        </div>
        <div className="userinfo-counter">
          <p>{props.karma}</p>
        </div>
      </div>
    </div>
  );
};

ProfileUserInfo.PropTypes = ProfileUserInfoPropTypes;

export default ProfileUserInfo;
