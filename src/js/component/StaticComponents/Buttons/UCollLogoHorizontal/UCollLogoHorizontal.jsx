import React from "react";
import UCOLLLogoHorizonal from "./UCOLLLogoHorizontal.png";
import "./UCollLogoHorizontal.scss";

/**
 * ! Create the UCollLogo Home button
 * * Keikeka (KeiliRosales) - 2022-02-05
 * @returns React Component
 */

const UCollLogo = () => {
  return (
    <div className="button-ucolllogohorizontal">
      <img src={UCOLLLogoHorizonal} alt="Image ucolllogo horizontal Button" />
    </div>
  );
};

export default UCollLogo;
