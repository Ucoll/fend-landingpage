import React from "react";
import { Icon } from "@iconify/react";

import Settings from "../Buttons/Settings/Settings.jsx";

import "./Coll.css";

/**
 * ! Creates the Coll component
 * * OvidioSantoro - 2022-02-09
 * @returns React Component
 */
const Coll = () => {
  return (
    <div className="coll-container test">
      <div className="coll-avatar"> </div>
      <div className="coll-name">
        <p>Ovidio Santoro</p>
        <p>Estudios Literarios</p>
        <p>12/02/2022 20:24</p>
      </div>
      <div className="coll-title">
        Give me your money and I will make you rich
      </div>
      <div className="coll-menu">
        <Icon icon="charm:menu-meatball" />
      </div>
      <div className="coll-text"></div>
      <div className="coll-like"></div>
    </div>
  );
};

export default Coll;
