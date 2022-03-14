import React from "react";
import propTypes from "prop-types";

import "./MessageAbout.scss";

const MessageAboutPropTypes = {
  about: propTypes.string.isRequired,
};

const MessageAbout = (props) => {
  return (
    <div on className="message-about">
      <div className="space-about">About:</div>
      <div className="about">{props.about}</div>
    </div>
  );
};

MessageAbout.propTypes = MessageAboutPropTypes;

export default MessageAbout;
