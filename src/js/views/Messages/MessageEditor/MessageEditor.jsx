import React from "react";

import UCollLogo from "../../../component/StaticComponents/Buttons/UCollLogo/UCollLogo.jsx";
import InterestTags from "../../../component/ProfilePageComponents/Tags/InterestTag.jsx";
import CancelButton from "../../../component/MessagesComponents/Buttons/CancelButton/CancelButton.jsx";
import SendButton from "../../../component/MessagesComponents/Buttons/SendButton/SendButton.jsx";

import "./MessageEditor.scss";
import MessageTo from "../../../component/MessagesComponents/Buttons/MessageTo/MessageTo.jsx";
import MessageAbout from "../../../component/MessagesComponents/Buttons/MessageAbout/MessageAbout.jsx";
import MessageDisplayEditor from "../../../component/MessagesComponents/MessageDisplayEditor/MessageDisplayEditor.jsx";

/**
 * ! Messages ->  Subview - Write Message
 * * Keili Rosales - 2022-03-11
 *
 * @params props {props}
 */
const MessageEditor = () => {
  return (
    <>
      <div className="message-editor-supercontainer">
        <div className="message-editor-container">
          <UCollLogo />

          <div className="messages-tags">
            <InterestTags value="Inbox" width="19.125rem" color= "#CEE2CB"/>
            <InterestTags value="Sent" width="19.125rem" color="#CEE2CB" />
            <InterestTags value="Important" width="19.125rem" color="#CEE2CB" />
            <InterestTags value="Bin" width="19.125rem" color="#CEE2CB" />
          </div>

          <div className="header-message">
            <div className="row-1">
              <div className="col-1">
                <MessageTo />
                <MessageAbout />
              </div>
            </div>
          </div>

          <div className="editor">
            <MessageDisplayEditor />
          </div>

          <div className="message-buttons">
            <div className="row-2">
              <div className="col-2">
                <CancelButton />
                <SendButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageEditor;
