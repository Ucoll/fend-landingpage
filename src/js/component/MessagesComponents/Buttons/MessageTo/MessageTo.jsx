import React from "react";
// import propTypes from "prop-types";

import "./MessageTo.scss";

const MessageToPropTypes = {
  name: propTypes.string.isRequired,
};

const MessageTo = (props) => {
  return (
    <button className="message-to">
      <div className="space-to">To:</div>
      <div className="name">Maya Africaans</div>
    </button>
  );
};

// MessageTo.propTypes = MessageToPropTypes;

export default MessageTo;
