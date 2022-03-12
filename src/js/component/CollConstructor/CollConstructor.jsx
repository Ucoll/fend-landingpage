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
  const [contentType, setContentType] = useState();
  const [collType, setCollType] = useState("");
  const [user, setUser] = useState();
  const [classes, setClasses] = useState([]);
  const [files, setFiles] = useState({ files: [] });

  const updateUploadedFiles = (files) =>
    setFiles({ ...files, files: files });

  // TODO: This might be received via props in order to use this for the "Edit Coll" option
  useEffect(() => {
    setCollType("text");
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
    setCollType(fileType);
    setContentType(contentTypes[fileType]);
  };

  const newColl = (ev) => {
    ev.preventDefault(); // TODO: Do we need to prevent the default behaviour?
    const title = document.getElementById("title").value;
    const _class = document.getElementById("_class").value;
    const type = collType;
    if (collType === "text") {
      const content = document.getElementsByClassName("ql-editor")[0].innerHTML;
    } else if (collType === "link") {
      const content = document.getElementById("contentLink").value;
    } else {
      const content = files.files[0];
    }

    console.log("SUBMITTED");
    console.log(files.files[0]);

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

  const contentTypes = {
    link: <ContentLink />,
    photo: (
      <ContentFile
        accept=".jpg,.png,.jpeg"
        updateFilesCb={updateUploadedFiles}
      />
    ),
    video: (
      <ContentFile
        accept=".jpg,.png,.jpeg"
        updateFilesCb={updateUploadedFiles}
      />
    ),
    text: <ContentText />,
    file: (
      <ContentFile
        accept=".jpg,.png,.jpeg"
        updateFilesCb={updateUploadedFiles}
      />
    ),
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
