import React from 'react';

import * as propTypes from 'prop-types';

import './PortraitStyles.scss';

const PortraitPropTypes = {
  avatar: propTypes.string, //TODO: Even if there's no portrait it's stored in BEND?
  name: propTypes.string,
}

/**
 * ! Circular display for a Portrait
 * * AslanSN - 2022-02-15
 * @params props {props} Image
 */
const Portrait = (props) => {
    return (
      <div className="circular-portrait">
        <img src={props.avatar} alt={props.name} className="portrait-img" />
      </div>
    );
}

Portrait.propTypes = PortraitPropTypes;

export default Portrait;