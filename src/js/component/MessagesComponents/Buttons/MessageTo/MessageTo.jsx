import React from "react";
import propTypes from "prop-types";

import "./MessageTo.scss";

const MessageToPropTypes = {
  name: propTypes.string.isRequired,
};

const MessageTo = (props) => {
  return (
    <div className="message-to">
      <div className="space-to">To:</div>
      <div className="name">{props.name}</div>
    </div>
  );
};

MessageTo.propTypes = MessageToPropTypes;

export default MessageTo;
