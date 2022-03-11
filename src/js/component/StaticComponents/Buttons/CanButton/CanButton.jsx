import React from "react";
import propTypes from "prop-types";

import "./CanButtonSytled.scss";

const CanButtonPropTypes = {
  widht: propTypes.string,
  height: propTypes.string,
};
/**
 * ! Can button Icon
 * * AslanSN - 2022/03/09
 * @returns Icon as a React Component
 */
const CanButton = (props) => {
  return (
    <div className="can-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width={!props.width ? "2rem" : props.width}
        height={!props.height ? "2rem" : props.height}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6Zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853ZM2 6h20m-12 5v5m4-5v5"
        />
      </svg>
    </div>
  );
};

CanButton.propTypes = CanButtonPropTypes;
export default CanButton;
