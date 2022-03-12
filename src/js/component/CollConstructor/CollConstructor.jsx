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
  const [collType, setCollType] = useState("")
  const [user, setUser] = useState();
  const [classes, setClasses] = useState([]);

  // TODO: This might be received via props in order to use this for the "Edit Coll" option
  useEffect(() => {
    setCollType("text")
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
      .then((data) => (setUser(data), setClasses(data.classes)))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const switchContent = (fileType) => {
    setCollType(fileType)
    setContentType(contentTypes[fileType]);
  };

  const newColl = (ev) => {
    ev.preventDefault(); // TODO: Do we need to prevent the default behaviour?
    if (collType === "text"){
      const title = document.getElementById("title").value
      const content = document.getElementsByClassName("ql-editor")[0].innerHTML
      const _class = document.getElementById("_class").value
      const type = collType
    } else if (collType === "link"){
        const title = document.getElementById("title").value
        const content = document.getElementById("contentLink").value
        const _class = document.getElementById("_class").value
        const type = collType
    } else{
      const title = document.getElementById("title").value
      //const content = document.getElementsByClassName("sc-bdvvtL iciELI")[0].innerHTML
      const content = document.getElementById("file")
      const _class = document.getElementById("_class").value
      const type = collType
      console.log(content)
    }

    // fetch(`${database}/colls`, {
    //   method: "POST",
    //   // headers: {
    //   //   "Content-Type": "multipart/form-data"
    //   // },
    //   body: FormData,
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
  };

  // TODO: Delete Test class (Margin to view the component better)
  return (
    <form
      id="CollConstructor"
      className="coll-constructor test"
      onSubmit={(ev) => newColl(ev)}
    >
      <div className="coll-constructor-title">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Think of a good title!"
        />
      </div>
      <div className="coll-constructor-selector">
        <select required name="_class" id="_class">
          <option hidden selected className="hidden-selected" value="">
            Choose a Class
          </option>
          <option value="1">Global</option>
          <hr />
          {classes.map((_class) => (
            <option value={_class.id}>{_class.name}</option>
          ))}
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
      <input
        type="button"
        className="coll-constructor-cancel"
        value={"CANCEL"}
      />
      <input type="submit" className="coll-constructor-send" value={"SEND"} />
    </form>
  );
};

export default CollConstructor;
