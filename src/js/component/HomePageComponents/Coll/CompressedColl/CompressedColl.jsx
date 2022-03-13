import React from "react";

import * as PropTypes from "prop-types";

import LikeButtons from "../../../StaticComponents/Buttons/Like/LikeButtons.jsx";
import Thread from "../../../StaticComponents/Buttons/Thread/Thread.jsx";
import Comment from "../../../StaticComponents/Buttons/Comment/Comment.jsx";
import Favorite from "../../../StaticComponents/Buttons/Favorite/Favorite.jsx";
import Share from "../../../StaticComponents/Buttons/Share/Share.jsx";
import Portrait from "../../../StaticComponents/Portraits/Portrait/Portrait.jsx";
import TicketPostIt from "../../../StaticComponents/Buttons/TicketPost-It/TicketPostIt.jsx";

import "./CompressedColl.scss";

const CompressedCollPropTypes = {
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
 * ! Creates the Compressed Coll component
 * * OvidioSantoro - 2022-02-16 + 2022-03-13
 * @param {props} props - Properties for a compressed Coll 
 * @returns {Component} - React Component
 */
const CompressedColl = ({ ...props }) => {
  return (
    <div className="compressed-container test">
      <div className="compressed-avatar">
        <Portrait />
      </div>
      <div className="compressed-name">
        <p>{props.name}</p>
        <p className="compressed-secondary">{props.studies}</p>
        <p className="compressed-secondary">{props.date}</p>
      </div>
      <div className="compressed-title">{props.title}</div>
      <div className="compressed-menu">
        <div className="compressed-postit">
          <TicketPostIt color={props.postItColor} />
        </div>
      </div>
      <div className="compressed-text">{props.content}</div>
      <div className="compressed-like">
        <LikeButtons likes={props.like} id={props.id}/>
      </div>
      <div className="compressed-comment">
        <div className="compressed-comments">
          <Comment />
          <span>
            {props.comments < 1
              ? `Comments`
              : props.comments === 1
              ? `${props.comments} Comment`
              : `${props.comments} Comments`}
          </span>
        </div>
        <div className="compressed-favs">
          <Favorite favs={props.favs} collId={props.id} />
        </div>
      </div>
      <div className="compressed-share">
        <Share />
      </div>
    </div>
  );
};

CompressedColl.propTypes = CompressedCollPropTypes;

export default CompressedColl;
