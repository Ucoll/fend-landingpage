import React from 'react';

import * as PropTypes from 'prop-types';


import './PortraitStyles.scss';

const PortraitProptypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
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

Portrait.PropTypes = PortraitProptypes;

export default Portrait;