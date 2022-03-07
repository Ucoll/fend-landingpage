import React from "react";
import propTypes from "prop-types";

import './CheckboxStyles.scss';

const CheckboxPropTypes = {
  text: propTypes.string,
}

/**
 * ! Static BUTTON -> Checkbox
 * @param {props} props - String or nothing
 * @returns React Component
 */
const Checkbox = props => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" name="checkbox" className="checkbox" />
      {/* <Icon icon="akar-icons:check" /> */}
      <span className="checkmark" />
      {props.text}
    </label>
  );
}

Checkbox.propTypes = CheckboxPropTypes;

export default Checkbox;