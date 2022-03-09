import React from "react";
import PropTypes from "prop-types";

import "./InterestTagStyled.scss";

const InterestTagPropTypes = {
  width: PropTypes.string,
  heigth: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
};

/**
 * ! COMPONENT - Interest Tags
 * * AslanSN - 2022-02-18
 * @param {string} props 
 * @returns React Component
 */
const InterestTag = (props) => {
  return (
    <div className="tag-shape">
      <svg
        width={!props.width ? "7.5rem" : props.width}
          // height={!props.height ? "2.2rem" : props.height} - May not be necessary
        viewBox="0 0 121 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M119.957 18.4625L95.341 33.4469C94.5566 33.9263 93.4915 34.3191 92.2411 34.5902C90.9908 34.8612 89.5943 35.0021 88.177 35H8.6184C6.33266 35 4.14053 34.6312 2.52427 33.9749C0.908007 33.3185 0 32.4282 0 31.5V3.50002C0 2.57176 0.908007 1.68152 2.52427 1.02515C4.14053 0.368771 6.33266 2.251e-05 8.6184 2.251e-05H88.177C89.5943 -0.0020481 90.9908 0.138763 92.2411 0.409829C93.4915 0.680896 94.5566 1.07374 95.341 1.55315L119.957 16.5375C120.434 16.8211 120.69 17.1565 120.69 17.5C120.69 17.8435 120.434 18.1789 119.957 18.4625Z"
          fill={!props.color ? "#E4DEF1" : props.color}
        />
      </svg>
      <div className="span-container">
        <span>{props.value}</span>
      </div>
    </div>
  );
};

InterestTag.PropTypes = InterestTagPropTypes;

export default InterestTag;
