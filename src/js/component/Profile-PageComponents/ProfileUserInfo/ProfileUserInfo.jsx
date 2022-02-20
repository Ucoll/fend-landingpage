import React from "react";
// import PropTypes from "prop-types";
import "./ProfileUserInfo.scss";
import ProfileEditButton from "../Buttons/ProfileEditButton/ProfileEditButton.jsx";

/**
 * ! Creates the Profile User Info
 * * Keili Rosales - 2022-02-18
 * @returns React Component
 * @params Props {props}
 * TODO: It is missing to add the props to connect it with the back. At the moment, it has only test data.
 */

const ProfileUserInfo = () => {
  return (
    <div className="profile-userinfo">
      <div className="userinfo-editicon">
        <ProfileEditButton />
      </div>
      <div className="userinfo-email">
        <p>amysosainas@fakemail.com</p>
      </div>
      <div className="userinfo-container">
        <div className="userinfo-member">
          <p>Member since:</p>
        </div>
        <div className="userinfo-date">
          <p>2022/02/08</p>
        </div>
        <div className="userinfo-karma">
          <p>Karma:</p>
        </div>
        <div className="userinfo-counter">
          <p>150k</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserInfo;
