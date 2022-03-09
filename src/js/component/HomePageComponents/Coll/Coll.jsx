import React from "react";

import * as PropTypes from "prop-types";

import LikeButtons from "../../StaticComponents/Buttons/Like/LikeButtons.jsx";
import Thread from "../../StaticComponents/Buttons/Thread/Thread.jsx";
import Comment from "../../StaticComponents/Buttons/Comment/Comment.jsx";
import Favorite from "../../StaticComponents/Buttons/Favorite/Favorite.jsx";
import Share from "../../StaticComponents/Buttons/Share/Share.jsx";
import Portrait from "../../StaticComponents/Portraits/Portrait/Portrait.jsx";
import TicketPostIt from "../../StaticComponents/Buttons/TicketPost-It/TicketPostIt.jsx";

import "./Coll.scss";

const CollPropTypes = {
  portrait: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  studies: PropTypes.string.isRequired,
  postItColor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  like: PropTypes.object.isRequired, // Must have number of likes and if it was liked, disliked or none by the User
  content: PropTypes.string.isRequired, // Review if it's string or object, if object ... will be needed
  threads: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  favs: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
};

/**
 * ! Creates the Coll component
 * * OvidioSantoro - 2022-02-13
 * @params props {props}
 * @returns React Component
 */
const Coll = ({ ...props }) => {
  return (
    <div className="coll-container test">
      <div className="coll-avatar">
        <Portrait 
          avatar={props.portrait} 
          alt={props.name} 
        />
      </div>
      <div className="coll-name">
        <p>{props.name}</p>
        <p className="coll-secondary">{props.studies}</p>
        <p className="coll-secondary">{props.date}</p>
      </div>
      <div className="coll-title">{props.title}</div>
      <div className="coll-menu">
        <div className="coll-postit">
          <TicketPostIt color={props.postItColor} />
        </div>
      </div>
      <div className="coll-text">{props.content}</div>
      <div className="coll-like">
        <LikeButtons likes={props.like}/>
      </div>
      <div className="coll-thread">
        <Thread />
        {props.thread < 1
          ? `Thread`
          : props.thread === 1
          ? `${props.thread} Thread`
          : `${props.thread} Threads`}
      </div>
      <div className="coll-comment">
        <div className="coll-comments">
          <Comment />
          <span>
            {props.comments < 1
              ? `Comments`
              : props.comments === 1
              ? `${props.comments} Comment`
              : `${props.comments} Comments`}
          </span>
        </div>
        <div className="coll-favs">
          <Favorite />
          <span className="coll-favers">
            {props.favs < 1
              ? `Favs`
              : props.favs === 1
              ? `${props.favs} Fav`
              : `${props.favs} Favs`}
          </span>
        </div>
      </div>
      <div className="coll-share">
        <Share />
        <span className="coll-sharers">
          {props.shares < 1
            ? `Shares`
            : props.shares === 1
            ? `${props.shares} Share`
            : `${props.shares} Shares`}
        </span>
      </div>
    </div>
  );
};

Coll.PropTypes = CollPropTypes;

export default Coll;
