import React from "react";

import MessageInfoButtonCheck from "../../component/MessagesComponents/Buttons/MessageInfoButtonWithCheck/MessageInfoButtonCheck.jsx";
import MessagesSearchBar from "../../component/MessagesComponents/MessagesSearchBar/MessagesSearchBar.jsx";
import UCollLogo from "../../component/StaticComponents/Buttons/UCollLogo/UCollLogo.jsx";
import InterestTags from "../../component/ProfilePageComponents/Tags/InterestTag.jsx";
import Favorite from "../../component/StaticComponents/Buttons/Favorite/Favorite.jsx";
import CanButton from "../../component/StaticComponents/Buttons/CanButton/CanButton.jsx";
import LeftArrowButton from "../../component/StaticComponents/Buttons/Arrows/LeftArrow/LeftArrowButton.jsx";
import RightArrowButton from "../../component/StaticComponents/Buttons/Arrows/RightArrow/RightArrowButton.jsx";

import "./MessagesStyles.scss";
import NewMessageButton from "../../component/MessagesComponents/Buttons/NewMessage/NewMessageButton.jsx";
/**
 * ! VIEW -> MESSAGES
 * * AslanSN - 2022-03-08
 * TODO: Add clicked option to the side tags menu and to the Messages info Button
 * TODO: Add Fetch
 * @param {props} props
 * @returns React View
 */
const Messages = () => {
  return (
    <>
      <div className="messages-view-container">
        <UCollLogo />
        <div className="header">
          <div className="row-1">
            <MessagesSearchBar />
            <NewMessageButton />
          </div>

          <div className="row-2">
            <div className="col-1">
              <Favorite height="2.8rem" width="2.69rem" />
              <CanButton height="2.8rem" width="2.8rem" />
            </div>

            <div className="col-2">
              <LeftArrowButton height="2.8rem" width="2.8rem" />
              <RightArrowButton height="2.8rem" width="2.8rem" />
            </div>
          </div>
        </div>

        <div className="messages-tags">
          <InterestTags value="Inbox" width="19.125rem" color="#CEE2CB" />
          <InterestTags value="Sent" width="19.125rem" color="#CEE2CB" />
          <InterestTags value="Important" width="19.125rem" color="#CEE2CB" />
          <InterestTags value="Bin" width="19.125rem" color="#CEE2CB" />
        </div>

        <div className="messages-container">
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
          <MessageInfoButtonCheck
            name="Kelly Watson"
            about="Appointment"
            date="18:45 | 03/08"
          />
        </div>
      </div>
    </>
  );
};

export default Messages;
