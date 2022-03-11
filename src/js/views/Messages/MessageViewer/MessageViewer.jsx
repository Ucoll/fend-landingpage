import React from "react";
import AnswerButton from "../../../component/MessagesComponents/Buttons/AnswerButton/AnswerButton.jsx";
import MessageInfoButton from "../../../component/MessagesComponents/Buttons/MessageInfoButton/MessageInfoButton.jsx";
import NewMessageButton from "../../../component/MessagesComponents/Buttons/NewMessage/NewMessageButton.jsx";
import ResendButton from "../../../component/MessagesComponents/Buttons/ResendButton/ResendButton.jsx";
import Favorite from "../../../component/StaticComponents/Buttons/Favorite/Favorite.jsx";
import CanButton from "../../../component/StaticComponents/Buttons/CanButton/CanButton.jsx";
import LeftArrowButton from "../../../component/StaticComponents/Buttons/Arrows/LeftArrow/LeftArrowButton.jsx";
import RightArrowButton from "../../../component/StaticComponents/Buttons/Arrows/RightArrow/RightArrowButton.jsx";


const MessageViewer = () => {
  return (
    <>
      
      <div className="col-1">
        <Favorite height="2.8rem" width="2.69rem" />
        <CanButton height="2.8rem" width="2.8rem" />
      </div>
      <div className="col-3">
        <LeftArrowButton height="2.8rem" width="2.8rem" />
        <RightArrowButton height="2.8rem" width="2.8rem" />
      </div>
      <AnswerButton />
      <ResendButton />
      <NewMessageButton />
      <MessageInfoButton
        name="Benito del Toro"
        date="10:32 | 03/10"
        about="Anything is right"
      />
    </>
  );
}

export default MessageViewer;