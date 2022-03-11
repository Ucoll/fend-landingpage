import React, { useState, useEffect } from "react";

import ContentText from "./ContentArea/ContentText/ContentText.jsx";
import ContentFile from "./ContentArea/ContentFile/ContentFile.jsx";
import ContentLink from "./ContentArea/ContentLink/ContentLink.jsx";

import NewPostLink from "../StaticComponents/Buttons/NewPostButtons/NewPostLink.jsx";
import NewPostPhoto from "../StaticComponents/Buttons/NewPostButtons/NewPostPhoto.jsx";
import NewPostVideo from "../StaticComponents/Buttons/NewPostButtons/NewPostVideo.jsx";
import NewPostText from "../StaticComponents/Buttons/NewPostButtons/NewPostText.jsx";
import NewPostDocument from "../StaticComponents/Buttons/NewPostButtons/NewPostDocument.jsx";

import "./CollConstructor.scss";
import { database } from "../../../js/index.js";


/**
 * ! Creates the Coll component
 * * OvidioSantoro - 2022-02-16
 * @returns React Component
 */
const CollConstructor = () => {
  const contentTypes = {
    link: <ContentLink />,
    photo: <ContentFile fileTypes={["JPG", "PNG", "GIF"]} />,
    video: <ContentFile fileTypes={["MP4", "AVI", "WEBM", "MOV", "MKV"]} />,
    text: <ContentText />,
    file: (
      <ContentFile fileTypes={["DOC", "TXT", "PDF", "XLS", "ODT", "MP3"]} />
    ),
  };

  const [contentType, setContentType] = useState();
  const [user, setUser] = useState()
  // TODO: This might be received via props in order to use this for the "Edit Coll" option
  useEffect(() => {
    setContentType(contentTypes.text);

    //TODO: Change route to "/me" once the register is up & running
    fetch(`${database}/user/2`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const switchContent = (fileType) => {
    setContentType(contentTypes[fileType]);
  };

  const newColl = (ev) => {
    ev.preventDefault() // TODO: Do we need to prevent the default behaviour?
    console.log(user.classes[0].name)

    // fetch(`${database}/colls`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ like: true }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed with HTTP code " + response.status);
    //     }
    //     return response;
    //   })
    //   .then((response) => console.log(response.json()))
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  // TODO: Delete Test class (Margin to view the component better)
  return (
    <form action="" className="coll-constructor test" onSubmit={(ev) => newColl(ev)}>
      <div className="coll-constructor-title">
        <input
          type="text"
          name="collTitle"
          id="collTitle"
          placeholder="Think of a good title!"
        />
      </div>
      {/* TODO: think of a good way to implement the icon next to the name. NOT PRIORITARY - FOR THE FINAL PRESENTATION */}
      <div className="coll-constructor-selector"> <option value="volvo">Volvo</option>
        <select name="classSelector" id="classSelector">
        {user.map((_class) => (<option value="volvo">Volvo</option>))}
        </select>
      </div>
      <div className="coll-constructor-buttons">
        <div onClick={() => switchContent("text")}>
          <NewPostText />
        </div>
        <div onClick={() => switchContent("link")}>
          <NewPostLink />
        </div>
        <div onClick={() => switchContent("photo")}>
          <NewPostPhoto />
        </div>
        <div onClick={() => switchContent("video")}>
          <NewPostVideo />
        </div>
        <div onClick={() => switchContent("file")}>
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
      {/* TODO: Onclick, close the Coll constructor */}
      <input type="button" className="coll-constructor-cancel" value={"CANCEL"} />
      <input type="submit" className="coll-constructor-send" value={"SEND"}/>
    </form>
  );
};

export default CollConstructor;
