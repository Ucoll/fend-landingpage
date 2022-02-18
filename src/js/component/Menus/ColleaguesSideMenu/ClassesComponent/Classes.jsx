import React from 'react';

import './ClassesStyles.scss';
import Portrait from '../../../Profiles/Portrait/Portrait.jsx';

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