import React from "react";

import CoverBackground from "./Cover Background.jpg";
import Portrait from "../../StaticComponents/Portraits/Portrait/Portrait.jsx";

import './Cover.scss';

/**
 * ! Cover with Portrait 
 * * AslanSN - 2022-02-16
 * TODO: @params props {props}
 */
const Cover = () => {
  return (
    <>
      <div className="cover">
        <div className="container">
          <img src={CoverBackground} alt="Background Cover" />
        </div>
        <Portrait/>
        <h1> Sosa de la Costa</h1>
      </div>
    </>
  );
};

export default Cover;
