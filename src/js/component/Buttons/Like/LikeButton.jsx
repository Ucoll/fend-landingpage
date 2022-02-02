import React from "react";
import likeSleptPNG from "../../../../img/icons/like/LikeSlept.png";
import "./LikeButtonStyle.scss"

/**
 * ! BUTTON => Like
 * * AslanSN 
 * * 2022-02-02
 * @returns React Component
 */
const LikeButton = () => {
    return(
        <div>
            <img className="button-like" src={likeSleptPNG} alt="Like Slept Button" height="52" width="52"/>
        </div>
    );
}

export default LikeButton;