import React from "react";
import PropTypes from "prop-types";

import "./LeftArrowButtonStyles.scss";

const LeftArrowButtonPropTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

const LeftArrowButton = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width={!props.width ? "2rem" : props.width}
      height={!props.height ? "2rem" : props.height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
      />
    </svg>
  );
};

LeftArrowButton.PropTypes = LeftArrowButtonPropTypes;

export default LeftArrowButton;
