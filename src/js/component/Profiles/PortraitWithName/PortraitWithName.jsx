import React from 'react';
// import propTypes from 'prop-types';

import portrait2 from './NewFaceNewEdition.png'
import './PortraitWithNameStyles.scss';

const PortraitWithName = () => {
    return (
      <div className="colleague-img-container">
        <div className="circular-portrait-menu">
          <img src={portrait2} alt="portrait" className="colleague-img" />
        </div>
        <span className="colleague-name">Fulanito de Talcual</span>
      </div>
    );
}

export default PortraitWithName;