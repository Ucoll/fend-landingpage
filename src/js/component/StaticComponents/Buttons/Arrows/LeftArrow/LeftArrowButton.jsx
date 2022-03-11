import React from "react";
import propTypes from "prop-types";

import "./LeftArrowButtonStyles.scss";

const LeftArrowButtonPropTypes = {
  height: propTypes.string,
  width: propTypes.string,
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

LeftArrowButton.propTypes = LeftArrowButtonPropTypes;

export default LeftArrowButton;
