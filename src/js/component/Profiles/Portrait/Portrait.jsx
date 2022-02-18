import React from 'react';

import portrait from './Ellipse.png';
import './PortraitStyles.scss';

/**
 * ! Circular display for a Portrait
 * * AslanSN - 2022-02-15
 * @params props {props} Image
 */
const Portrait = () => {
    return (
      <div className="circular-portrait">
        <img src={portrait} alt="portrait" className="portrait-img" />
      </div>
    );
}

export default Portrait;