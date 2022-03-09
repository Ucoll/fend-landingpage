import React from "react";
import * as PropTypes from "prop-types";

import Resource from "./Components/Resource.jsx";
import Collapse from "../../../StaticComponents/Buttons/Collapse/Collapse.jsx";

import "./ResourcesMenu.scss";

ResourcesMenuPropTypes = {
  files: PropTypes.arrayOf(PropTypes.string).isRequired, //must contain all the info needed at the Resource component 
}

/**
 * ! Creates the Resources Menu component
 * * OvidioSantoro - 2022-02-15
 * @param {props} props
 * @returns React Component
 */
const ResourcesMenu = props => {

  /**
   * ! LISTENER 
   * ? to use with MAP method
   * @param {object} fileInfo 
   * @returns Component for each iteration of the .map
   */
  const resourceListener = fileInfo => (
    <Resource {...fileInfo}/>
  )
  return (
    <div className="resources-menu">
      <div className="resources-collapse">
        <Collapse />
      </div>
      <span className="resources-title">Resources</span>
      <hr />
      <div className="resources-container">
        <div className="resources-list">
          {props.files.map(resourceListener)} {/** TO REVIEW //TODO: if null add placeholder*/}
        </div>
      </div>
      <hr className="resources-hr" />
    </div>
  );
};

ResourcesMenu.PropTypes = ResourcesMenuPropTypes;

export default ResourcesMenu;
