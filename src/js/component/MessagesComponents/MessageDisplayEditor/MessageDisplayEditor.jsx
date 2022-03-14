import React, { useState, useEffect } from "react";

import ContentText from "./../MessageDisplayEditor/ContentTextMessage/ContentTextMessage.jsx";

import "./MessageDisplayEditor.scss";

/**
 * ! Messages -> Message Display Editor
 * * Keili Rosales - 2022-03-11
 * @returns React Component
 */
const MessageDisplayEditor = () => {
  const textMessages = {
    text: <ContentText />,
  };

  const [textMessage, setTextMessage] = useState();

  // TODO: This might be received via props in order to use this for the "Edit Coll" option
  useEffect(() => {
    setTextMessage(textMessages.text);
  }, []);

  return (
    <form action="" className="message-constructor">
      <div
        className="message-display-content"
        name="messageContent"
        id="messageContent"
      >
        {textMessage}
      </div>
    </form>
  );
};

export default MessageDisplayEditor;
