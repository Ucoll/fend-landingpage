import React from "react";
import likeSleptPNG from "../../../../img/icons/like/LikeSlept.png";
import likeAwakenPNG from "../../../../img/icons/like/LikeAwaken.png";
import wow1 from "../../../../img/icons/like/WOW 1.png";

import "./LikeButtonStyle.scss";

/**
 * ! BUTTON => Like
 * * AslanSN
 * * 2022-02-02
 * @returns React Component
 */
const LikeButton = () => {
  return (
    <>
      <div className="button-like">
        <img
         className="like-slept" 
          src={likeSleptPNG}
          alt="Like Slept Button"
          height="52"
          width="52"
        />
        <img
          className="like-awaken"
          src={likeAwakenPNG}
          alt="Like Awaken"
          height="52"
          width="52"
        />

      </div>
    </>
  );
};

export default LikeButton;
