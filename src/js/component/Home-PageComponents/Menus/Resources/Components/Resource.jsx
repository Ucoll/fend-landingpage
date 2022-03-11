import React from "react";
import * as PropTypes from "prop-types";

import "./Resource.scss";

const ResourceProptypes = {
  userName: PropTypes.string.isRequired,
  classroomName: PropTypes.string,
  file: PropTypes.string.isRequired,
}

/**
 * ! Creates the Resource component
 * * OvidioSantoro - 2022-02-15
 * @param {props} props
 * @returns React Component
 */
const Resource = props => {
  return (
    <div className="resource">
      <span className="resource-user">{props.userName}</span> shared
      in <span className="resource-class">{props.classroomName}</span>
      <p className="resource-file">{props.file}</p>
    </div>
  );
};

Resource.PropTypes = ResourceProptypes;

export default Resource;
