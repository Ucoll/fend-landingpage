import React from "react";
import propTypes from "prop-types";

import Checkbox from "../../../StaticComponents/Buttons/Checkbox/Checkbox.jsx";

import "./MessageInfoButtonStyles.scss";

const MessageInfoButtonPropTypes = {
  name: propTypes.string.isRequired,
  about: propTypes.string,
  date: propTypes.string.isRequired,
}

const MessageInfoButton = (props) => {
  return (
    <button className="message-info-button-container">
      <div className="name-container">
        <Checkbox />
        <div className="name">{props.name}</div>
      </div>
      <div className="about">{props.about}</div>
      <div className="date">{props.date}</div>
    </button>
  );
};

MessageInfoButton.propTypes = MessageInfoButtonPropTypes;

export default MessageInfoButton;
