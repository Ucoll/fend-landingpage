import React from "react";
import UCOLLLogoHorizonal from "./UCOLLLogoHorizontal.png";
import "./UCollLogo.scss";

/**
 * ! Create the UCollLogo Home button
 * * Keikeka (KeiliRosales) - 2022-02-05
 * @returns React Component
 */

const UCollLogo = () => {
  return (
    <div className="button-ucolllogo">
      <img src={UCOLLLogoHorizonal} alt="Image ucolllogo Button" />
    </div>
  );
};

export default UCollLogo;
