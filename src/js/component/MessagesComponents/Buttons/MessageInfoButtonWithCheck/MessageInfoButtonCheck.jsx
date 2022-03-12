import React from "react";
import PropTypes from "prop-types";

import Checkbox from "../../../StaticComponents/Buttons/Checkbox/Checkbox.jsx";

import "./MessageInfoButtonCheckStyles.scss";

const MessageInfoButtonCheckPropTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string,
  date: PropTypes.string.isRequired,
}

const MessageInfoButtonCheck = (props) => {
  return (
    <button className="message-info-button-check-container">
      <div className="name-container">
        <Checkbox />
        <div className="name">{props.name}</div>
      </div>
      <div className="about">{props.about}</div>
      <div className="date">{props.date}</div>
    </button>
  );
};

MessageInfoButtonCheck.PropTypes = MessageInfoButtonCheckPropTypes;

export default MessageInfoButtonCheck;
