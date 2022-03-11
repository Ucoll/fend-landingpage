import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Icon } from "@iconify/react";
import Microlink from "@microlink/react";

function ContentFile(props) {
  const [link, setLink] = useState("");

  const displayLink = (ev) => {
    setLink(ev);
  };

  return (
    <>
      <input
        type="text"
        className="content-link"
        id="contentLink"
        name="contentLink"
        onChange={(ev) => displayLink(ev.target.value)}
        placeholder="&#9741;    Paste your link here!"
      />
      {link === "" ? (
        <div className="contentlink-nolink">
          <div>
            <p>You can see your link's preview here:</p>
            <Icon icon="akar-icons:link-chain" />
          </div>
        </div>
      ) : (
        <Microlink url={link} size="large" />
      )}
    </>
  );
}

ContentFile.propTypes = {
  fileTypes: PropTypes.array,
};

export default ContentFile;

<Microlink url="https://www.youtube.com/watch?v=9P6rdqiybaw" size="large" />;
