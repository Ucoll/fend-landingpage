import React from "react";

import dislikeSleptPNG from "../../../../img/icons/dislike/DislikeSlept.png";
import dislikeAwakenPNG from "../../../../img/icons/dislike/DislikeAwaken.png";

import "./DislikeButtonStyle.scss";

/**
 * ! BUTTON => Dislike
 * * AslanSN
 * * 2022-02-04
 * @returns React Component
 */
const DislikeButton = () => {
  return (
    <>
      <div className="button-dislike">
        <img
          className="dislike-slept"
          src={dislikeSleptPNG}
          alt="Dislike Slept Button"
          height="52"
          width="52"
        />
        <img
          className="dislike-awaken"
          src={dislikeAwakenPNG}
          alt="Dislike Awaken"
          height="52"
          width="52"
        />
      </div>
    </>
  );
};

export default DislikeButton;
