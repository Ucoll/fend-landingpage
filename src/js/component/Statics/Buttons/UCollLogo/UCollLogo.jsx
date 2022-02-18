import React from "react";
import UCollLogoLogoVertical from "../../../../static/icons/ucoll-logo/UCollLogoVertical.png";
import "./UCollLogo.scss";

/**
 * ! Create the UCollLogo Home button
 * * Keikeka (KeiliRosales) - 2022-02-05
 * @returns React Component
 */

const UCollLogo = () => {
  return (
    <div className="button-ucolllogo">
      <img src={UCollLogoLogoVertical} alt="Image ucolllogo Button" />
    </div>
  );
};

export default UCollLogo;
