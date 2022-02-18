import React from "react";

import "./Resource.scss";

/**
 * ! Creates the Resource component
 * * OvidioSantoro - 2022-02-15
 * @returns React Component
 */
const Resource = () => {
  return (
    <div className="resource">
      {/* Change hard-coded data with props sent from the back */}
      <span className="resource-user">Ejemplito Martínez del Falo</span> shared
      in <span className="resource-class">Biology II</span>
      <p className="resource-file">VideoBiologyFunny.avi</p>
    </div>
  );
};

export default Resource;
