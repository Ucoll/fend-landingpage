import React from "react";
// import PropTypes from "prop-types";
import "./SocialMediaText.scss";

/**
 * ! Creates the Profile Social Media Text
 * * Keili Rosales - 2022-02-23
 * @returns React Component
 * @params Props {props}
 * TODO: It is missing to add the props to connect it with the back. At the moment, it has only test data.
 */

const ProfileSocialMediaText = () => {
  return (
    <div className="profile-socialmediatext">      
      <div className="socialmediatext">
        <p>VKontakte:</p>
      </div>
      <div className="socialmediatext-content">
        <p>vk.com/sosaamy</p>
      </div>
      
    </div>
  );
};

export default ProfileSocialMediaText;
