import React from "react";
import UCollLogoVertical from "../../Buttons/UCollLogo/UcollLogo.png";
import "./UCollLogo.scss";

/**
 * ! Create the UCollLogo Home button
 * * Keikeka (KeiliRosales) - 2022-02-05
 * @returns React Component
 */

const UCollLogo = () => {
  return (
    <div className="button-ucolllogo">
      <img src={UCollLogoVertical} alt="Image ucolllogo Button" />
    </div>
  );
};

export default UCollLogo;