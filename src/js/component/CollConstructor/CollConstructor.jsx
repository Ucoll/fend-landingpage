import React, { useState, useEffect } from "react";

import ContentText from "./ContentArea/ContentText/ContentText.jsx";
import ContentFile from "./ContentArea/ContentFile/ContentFile.jsx";

import NewPostLink from "../Buttons/NewPostButtons/NewPostLink.jsx";
import NewPostPhoto from "../Buttons/NewPostButtons/NewPostPhoto.jsx";
import NewPostVideo from "../Buttons/NewPostButtons/NewPostVideo.jsx";
import NewPostText from "../Buttons/NewPostButtons/NewPostText.jsx";
import NewPostSurvey from "../Buttons/NewPostButtons/NewPostSurvey.jsx";
import NewPostDocument from "../Buttons/NewPostButtons/NewPostDocument.jsx";

import "./CollConstructor.scss";

/**
 * ! Creates the Coll component
 * * OvidioSantoro - 2022-02-16
 * @returns React Component
 */
const CollConstructor = () => {
  const contentTypes = {
    link: "",
    photo: <ContentFile fileTypes={["JPG", "PNG", "GIF"]} />,
    video: <ContentFile fileTypes={["MP4", "AVI", "WEBM", "MOV", "MKV"]} />,
    text: <ContentText />,
    survey: "",
    file: <ContentFile fileTypes={["DOC", "TXT", "PDF", "XLS", "ODT"]} />,
  };

  const [contentType, setContentType] = useState();

  useEffect(() => {
    setContentType(contentTypes.text);
  }, []);

  const TestConst = () => {
    console.log("TEST");
  };

  // TODO: Delete Test class (Margin to view the component better)
  return (
    <form action="" className="coll-constructor test">
      <div className="coll-constructor-title">
        <input
          type="text"
          name="collTitle"
          id="collTitle"
          placeholder="Think of a good title!"
        />
      </div>
      {/* TODO: think of a good way to implement the icon next to the name. NOT PRIORITARY - FOR THE FINAL PRESENTATION */}
      <div className="coll-constructor-selector">
        <select name="classSelector" id="classSelector">
          <option value="biology2">Biology II</option>
          <option value="microeconomics">Modern Microeconomics</option>
          <option value="romanticlit">Romantic Literature</option>
          <option value="sexed">Sex Education</option>
        </select>
      </div>
      <div className="coll-constructor-buttons">
        <div onClick={() => TestConst()}>
          <NewPostLink />
        </div>
        <div onClick={() => TestConst()}>
          <NewPostPhoto />
        </div>
        <div onClick={() => TestConst()}>
          <NewPostVideo />
        </div>
        <div onClick={() => TestConst()}>
          <NewPostText />
        </div>
        <div onClick={() => TestConst()}>
          <NewPostSurvey />
        </div>
        <div onClick={() => TestConst()}>
          <NewPostDocument />
        </div>
      </div>
      <div
        className="coll-constructor-content"
        name="collContent"
        id="collContent"
      >
        {contentType}
      </div>
      <div className="coll-constructor-cancel">CANCEL</div>
      {/* Onclick -> Submit the form */}
      <div className="coll-constructor-send">SEND</div>
    </form>
  );
};

export default CollConstructor;
