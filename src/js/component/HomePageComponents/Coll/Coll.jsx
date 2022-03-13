import React, { useState, useEffect } from "react";

import * as PropTypes from "prop-types";
import Microlink from "@microlink/react";

import LikeButtons from "../../StaticComponents/Buttons/Like/LikeButtons.jsx";
import Comment from "../../StaticComponents/Buttons/Comment/Comment.jsx";
import Favorite from "../../StaticComponents/Buttons/Favorite/Favorite.jsx";
import Share from "../../StaticComponents/Buttons/Share/Share.jsx";
import Portrait from "../../StaticComponents/Portraits/Portrait/Portrait.jsx";
import TicketPostIt from "../../StaticComponents/Buttons/TicketPost-It/TicketPostIt.jsx";

import "./Coll.scss";

const CollPropTypes = {
  portrait: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  studies: PropTypes.string.isRequired,
  postItColor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  like: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
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
        <Portrait avatar={props.portrait} alt={props.username} />
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
      {props.type === "text"
        ? <div className="coll-text" dangerouslySetInnerHTML={{__html: props.content}}></div>
        : props.type === "photo"
          ? <p>PHOTO</p>
          : <iframe className="coll-iframe" src={props.content}></iframe>   
      }
      <div className="coll-like">
        <LikeButtons likes={props.like} id={props.id} />
      </div>
      <div className="coll-comment">
        <div className="coll-comments">
          <Comment />
          <span>
            {props.comments.length < 1
              ? `0 Comments`
              : parseInt(props.comments.length) === 1
              ? `${props.comments.length} Comment`
              : `${props.comments.length} Comments`}
          </span>
        </div>
        <div className="coll-favs">
          <Favorite favs={props.favs} collId={props.id} />
        </div>
      </div>
      <div className="coll-share">
        <Share />
        <span className="coll-sharers">Share</span>
      </div>
    </div>
  );
};

Coll.PropTypes = CollPropTypes;

export default Coll;