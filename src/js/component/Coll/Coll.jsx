import React from "react";
import { Icon } from "@iconify/react";

import LikeButtons from "../Buttons/Like/LikeButtons.jsx";
import Thread from "../Buttons/Thread/Thread.jsx";
import Comment from "../Buttons/Comment/Comment.jsx";
import Favorite from "../Buttons/Favorite/Favorite.jsx";
import Share from "../Buttons/Share/Share.jsx";

import "./Coll.scss";

/**
 * ! Creates the Coll component
 * * OvidioSantoro - 2022-02-13
 * @returns React Component
 */
const Coll = () => {
  return (
    <div className="coll-container test">
      <div className="coll-avatar"> </div>
      <div className="coll-name">
        <p>OvidioSantoro</p>
        <p className="coll-secondary">Estudios Literarios</p>
        <p className="coll-secondary">12/02/2022 20:24</p>
      </div>
      <div className="coll-title">
        Give me your money and I will make you rich, I promise!!!
      </div>
      <div className="coll-menu">
        <div className="coll-postit">
          <Icon icon="charm:menu-meatball" />
        </div>
      </div>
      <div className="coll-text"></div>
      <div className="coll-like">
        <LikeButtons />
      </div>
      <div className="coll-thread">
        <Thread /> Comment!
      </div>
      <div className="coll-comment">
        <div className="coll-comments">
          <Comment /> <span>12 Comments</span>
        </div>
        <div className="coll-favs">
          <Favorite /> <span className="coll-favers">8 Favs</span>
        </div>
      </div>
      <div className="coll-share">
        <Share /> Share
      </div>
    </div>
  );
};

export default Coll;
