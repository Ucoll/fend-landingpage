import React from "react";

import AnswerButton from "../../../component/MessagesComponents/Buttons/AnswerButton/AnswerButton.jsx";
import MessageInfoButton from "../../../component/MessagesComponents/Buttons/MessageInfoButton/MessageInfoButton.jsx";
import NewMessageButton from "../../../component/MessagesComponents/Buttons/NewMessage/NewMessageButton.jsx";
import ResendButton from "../../../component/MessagesComponents/Buttons/ResendButton/ResendButton.jsx";
import Favorite from "../../../component/StaticComponents/Buttons/Favorite/Favorite.jsx";
import CanButton from "../../../component/StaticComponents/Buttons/CanButton/CanButton.jsx";
import LeftArrowButton from "../../../component/StaticComponents/Buttons/Arrows/LeftArrow/LeftArrowButton.jsx";
import RightArrowButton from "../../../component/StaticComponents/Buttons/Arrows/RightArrow/RightArrowButton.jsx";
import MessageDisplay from "../../../component/MessagesComponents/MessageDisplay/MessageDisplay.jsx";
import UCollLogo from "../../../component/StaticComponents/Buttons/UCollLogo/UCollLogo.jsx";
import InterestTags from "../../../component/ProfilePageComponents/Tags/InterestTag.jsx";

import "./MessageViewerStyles.scss";

const MessageViewer = () => {
  return (
    <>
      <div className="message-viewer-supercontainer">
        <div className="message-viewer-container">
          <UCollLogo />
          <div className="messages-tags">
            <InterestTags value="Inbox" width="19.125rem" color="#CEE2CB" />
            <InterestTags value="Sent" width="19.125rem" color="#CEE2CB" />
            <InterestTags value="Important" width="19.125rem" color="#CEE2CB" />
            <InterestTags value="Bin" width="19.125rem" color="#CEE2CB" />
          </div>
          <div className="row-1">
            <div className="header">
              <div className="col-1">
                <Favorite height="2.8rem" width="2.69rem" />
                <CanButton height="2.8rem" width="2.8rem" />
              </div>
              <div className="col-2">
                <AnswerButton />
                <ResendButton />
                <NewMessageButton />
              </div>
              <div className="col-3">
                <LeftArrowButton height="2.8rem" width="2.8rem" />
                <RightArrowButton height="2.8rem" width="2.8rem" />
              </div>
            </div>
            <div className="info">
              <MessageInfoButton
                name="Benito del Toro" //TODO:PROPS
                about="Anything is right" //TODO:PROPS
                date="10:32 | 03/10" //TODO:PROPS
              />
            </div>
          </div>
          <div className="row-2">
            <MessageDisplay text="" /> //TODO:PROPS
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageViewer;
