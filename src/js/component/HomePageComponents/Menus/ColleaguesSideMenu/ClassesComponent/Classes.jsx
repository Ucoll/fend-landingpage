import React from 'react';

import Portrait from "../../../../StaticComponents/Portraits/Portrait/Portrait.jsx";

import './ClassesStyles.scss';

/**
 * ! Classes preview section 
 * ? for the Colleagues side menu
 * * AslanSN - 2022-02-15
 * 
 * @params props {props}
 */
const ClassesPreview = () => {
    return (
      <div className="classes-container">
        <span>Biology</span>
        <ul>
          <li>
            <Portrait className="classes-portrait" />
          </li>
          <li>
            <Portrait className="classes-portrait" />
          </li>
          <li>
            <Portrait className="classes-portrait" />
          </li>
          <li>
            <Portrait className="classes-portrait" />
          </li>
        </ul>
      </div>
    );
}

export default ClassesPreview;