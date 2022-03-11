import React from "react";
import propTypes from "prop-types";

import "./MessageDisplayStyles.scss";

const MessageDisplayPropTypes = {
  text: propTypes.string.isRequired,
};

const MessageDisplay = (props) => {
  return <div className="message-display-container">{props.text}</div>;
};

MessageDisplay.propTypes = MessageDisplayPropTypes;

export default MessageDisplay;
