import React from "react";
// import PropTypes from "prop-types";
import "./SocialMedia.scss";

/**
 * ! Creates the Profile Social Media
 * * Keili Rosales - 2022-02-21
 * @returns React Component
 * @params Props {props}
 * TODO: It is missing to add the props to connect it with the back. At the moment, it has only test data.
 */

const SocialMedia = () => {
  return (
    <div className="profile-socialmedia">
      <Icon className="button-socialmedia" icon="akar-icons:twitter-fill" />

      <div className="socialmedia-content">
        <p>@AmSoC</p>
      </div>
    </div>
  );
};

export default SocialMedia;
