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
      <div className="coll-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          veniam nihil enim eveniet aliquid necessitatibus quo deserunt
          quibusdam natus iste, vero eos accusantium doloribus cum nemo
          nesciunt, aspernatur obcaecati ducimus cumque! Ratione modi obcaecati
          libero facilis totam recusandae expedita odit. Rerum commodi dolorem
          expedita tempora molestiae neque fugiat dolorum, ad, eligendi fugit
          repellendus similique vero, voluptatem dolore temporibus quam dolor
          provident eum molestias est harum ipsa doloribus eaque.
        </p>
        <p>
          {" "}
          Rem minus vero dolores consectetur maiores libero beatae ducimus id!
          Rerum, quo esse. Fugiat, repellat. Facilis repellendus distinctio sunt
          perspiciatis amet omnis quas iste consequuntur iusto eligendi, maxime
          corporis expedita deleniti ullam eum quod, nisi nihil blanditiis quo.
          Possimus quos molestias ea asperiores ut corrupti illo inventore,
          architecto tempora.
        </p>{" "}
        <p>
          Ratione, assumenda excepturi? Impedit aliquam inventore accusantium
          officia, maiores facere consequatur quibusdam, nihil qui aliquid
          deleniti facilis maxime, repellendus corrupti odio! Porro architecto
          odio consectetur doloremque sed commodi culpa deleniti iste ratione id
          illo ad ipsam at adipisci aliquam voluptate eveniet fugit odit dolorum
          quas, quia omnis? Deserunt sit doloremque corrupti non quis voluptate
          enim soluta sequi modi! Ut fuga assumenda placeat, quos a dolor cumque
          minima esse, ex velit voluptate!
        </p>{" "}
        <p>
          Fugiat beatae nam enim unde eligendi quae. Quos odio aperiam magni. Ex
          cum quae voluptas. Soluta libero commodi vel! Necessitatibus
          voluptates esse qui cupiditate ab nostrum rerum similique repudiandae
          provident voluptate rem nobis ducimus, debitis vero voluptatibus
          eveniet vel expedita obcaecati veritatis. Necessitatibus ullam,
          officia autem quam voluptatum eos cumque voluptas repellat nostrum
          consectetur, error voluptate, officiis sapiente similique? Quibusdam,
          optio totam!
        </p>
      </div>
      <div className="coll-like">
        <LikeButtons />
      </div>
      <div className="coll-thread">
        <Thread /> Thread
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
