import React from "react";
import PropTypes from "prop-types";

import "./RightArrowButtonStyles.scss";

const RightArrowButtonPropTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

const RightArrowButton = (props) => {
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
        d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
      />
    </svg>
  );
};

RightArrowButton.PropTypes = RightArrowButtonPropTypes;

export default RightArrowButton;
