import React from "react";
// import propTypes from "prop-types";

import "./MessageAbout.scss";

const MessageToPropTypes = {
  about: propTypes.string,
};

const MessageAbout = (props) => {
  return (
    <button className="message-about">
      <div className="space-about">About:</div>
      <div className="about">{props.about}</div>
    </button>
  );
};

// MessageAbout.propTypes = MessageAboutPropTypes;

export default MessageAbout;
