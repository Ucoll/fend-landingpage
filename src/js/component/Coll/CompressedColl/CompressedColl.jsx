import React from "react";
import { Icon } from "@iconify/react";

import LikeButtons from "../../Buttons/Like/LikeButtons.jsx";
import Thread from "../../Buttons/Thread/Thread.jsx";
import Comment from "../../Buttons/Comment/Comment.jsx";
import Favorite from "../../Buttons/Favorite/Favorite.jsx";
import Share from "../../Buttons/Share/Share.jsx";

import "./CompressedColl.scss";
import Portrait from "../../Profiles/Portrait/Portrait.jsx";

/**
 * ! Creates the Compressed Coll component
 * * OvidioSantoro - 2022-02-16
 * @returns React Component
 */
const CompressedColl = () => {
  return (
    <div className="compressed-container test">
      <div className="compressed-avatar"> <Portrait/> </div>
      <div className="compressed-name">
        <p>OvidioSantoro</p>
        <p className="compressed-secondary">Estudios Literarios</p>
        <p className="compressed-secondary">12/02/2022 20:24</p>
      </div>
      <div className="compressed-title">
        Give me your money and I will make you rich, I promise!!!
      </div>
      <div className="compressed-menu">
        <div className="compressed-postit">
          <Icon icon="charm:menu-meatball" />
        </div>
      </div>
      <div className="compressed-text"></div>
      <div className="compressed-like">
        <LikeButtons />
      </div>
      <div className="compressed-thread">
        <Thread /> Thread
      </div>
      <div className="compressed-comment">
        <div className="compressed-comments">
          <Comment /> <span>12 Comments</span>
        </div>
        <div className="compressed-favs">
          <Favorite /> <span className="compressed-favers">8 Favs</span>
        </div>
      </div>
      <div className="compressed-share">
        <Share /> Share
      </div>
    </div>
  );
};

export default CompressedColl;
