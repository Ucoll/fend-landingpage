import React from "react";

import './MessageInfoButtonStyles.scss';

const MessageInfoButtonPropTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string,
  date: PropTypes.string.isRequired,
};

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

MessageInfoButton.PropTypes = MessageInfoButtonPropTypes;

export default MessageInfoButton;