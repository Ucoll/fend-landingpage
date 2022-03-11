import React from "react";
import propTypes from "prop-types";

import './MessageInfoButtonStyles.scss';

const MessageInfoButtonPropTypes = {
  name: propTypes.string.isRequired,
  about: propTypes.string,
  date: propTypes.string.isRequired,
}

const MessageInfoButton = (props) => {
  return (
    <button className="message-info-button-container">
      <div className="name-container">
        <div className="name">{props.name}</div>
      </div>
      <div className="about">{props.about}</div>
      <div className="date">{props.date}</div>
    </button>
  );
};

MessageInfoButton.propTypes = MessageInfoButtonPropTypes;

export default MessageInfoButton;