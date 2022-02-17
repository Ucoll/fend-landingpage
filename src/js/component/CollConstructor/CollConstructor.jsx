import React from "react";
import { Icon } from "@iconify/react";

import NewPostDocument from "../Buttons/NewPostButtons/NewPostDocument.jsx";
import NewPostLink from "../Buttons/NewPostButtons/NewPostLink.jsx";
import NewPostSurvey from "../Buttons/NewPostButtons/NewPostSurvey.jsx";
import NewPostText from "../Buttons/NewPostButtons/NewPostText.jsx";
import NewPostVideo from "../Buttons/NewPostButtons/NewPostVideo.jsx";
import NewPostPhoto from "../Buttons/NewPostButtons/NewPostPhoto.jsx";

import "./CollConstructor.scss";

/**
 * ! Creates the Coll component
 * * OvidioSantoro - 2022-02-16
 * @returns React Component
 */
const CollConstructor = () => {
  // TODO: Delete Test class (Margin to view the component better)
  return (
    <form action="" className="coll-constructor test">
      <div className="coll-constructor-title">
        <input type="text" placeholder="Think of a good title!" />
      </div>
      {/* TODO: think of a good way to implement the icon next to the name. NOT PRIORITARY - FOR THE FINAL PRESENTATION */}
      <div className="coll-constructor-selector">
        <select id="classSelector">
          <option value="biology2">Biology II</option>
          <option value="microeconomics">Modern Microeconomics</option>
          <option value="romanticlit">Romantic Literature</option>
          <option value="sexed">Sex Education</option>
        </select>
        <div className="coll-constructor-buttons"></div>
      </div>
    </form>
  );
};

export default CollConstructor;
