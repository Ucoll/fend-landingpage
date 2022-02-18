import React from "react";

import Resource from "./Resource.jsx";
import Collapse from "../../Buttons/Collapse/Collapse.jsx";

import "./ResourcesMenu.scss";

/**
 * ! Creates the Resources Menu component
 * * OvidioSantoro - 2022-02-15
 * @returns React Component
 */
const ResourcesMenu = () => {
  return (
    <div className="resources-menu">
      <div className="resources-collapse">
        <Collapse />
      </div>
      <span className="resources-title">Resources</span>
      <hr />
      {/* TODO: Change hard-coded Resources. It shoul dynamically generate them from the data in the back */}
      <div className="resources-container">
        <div className="resources-list">
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
        </div>
      </div>
      <hr className="resources-hr" />
    </div>
  );
};

export default ResourcesMenu;
