import React, { useState, useEffect } from "react";
import CancelButton from "../Buttons/CancelButton copy/CancelButton.jsx";
import SendButton from "../Buttons/SendButton/SendButton.jsx";

import ContentText from "./../MessageDisplayEditor/ContentTextMessage/ContentTextMessage.jsx";

import "./MessageDisplayEditor.scss";

/**
 * ! Messages -> Message Display Editor
 * * Keili Rosales - 2022-03-11
 * @returns React Component
 */
const MessageDisplayEditor = () => {
  const messageContentTypes = {
    text: <ContentText />
};

  const [messageContentType, setMessageContentType] = useState();

  // TODO: This might be received via props in order to use this for the "Edit Coll" option
  useEffect(() => {
    setMessageContentType(messageContentTypes.text);
  }, []);

  const switchContent = (fileType) => {
    setContentType(messageContentTypes[fileType]);
  };

  // TODO: Delete Test class (Margin to view the component better)
  return (
    <form action="" className="message-constructor test">
         <div
        className="message-display-content"
        name="messageContent"
        id="messageContent"
      >
        {messageContentType}
      </div>
      <div className="message-editor-cancel">
          <CancelButton/>
      </div>
      {/* TODO:  Onclick -> Submit the form */}
      <div className="message-editor-send">
          <SendButton />
      </div>
    </form>
  );
};

export default MessageDisplayEditor;

