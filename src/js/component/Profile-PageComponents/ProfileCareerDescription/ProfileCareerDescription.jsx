import React from "react";
// import PropTypes from "prop-types";
import "./ProfileCareerDescription.scss";
<<<<<<< HEAD
import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";
=======

import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

>>>>>>> 344c18855d248403c5eb69a5f2852c69c67b9440

/**
 * ! Creates the Profile Career Description
 * * Keili Rosales - 2022-02-17
 * @returns React Component
 * @params Props {props}
 * ! TODO: It is missing to add the props to connect it with the back. 
 */

const ProfileCareerDescription = () => {
  return (
    <div className="profilecareer-description">
      <div className="career-editicon">
        <ProfileEditButton />
      </div>
      <div className="career-title">
          <p>Universidad Complutense de Madrid | Filología A</p>
      </div>
      <div className="career-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque 
            proin sed cras viverra ipsum in elementum. Egestas integer faucibus 
            pellentesque purus viverra molestie diam nascetur quis. Viverra 
            tempus aliquam volutpat magna eu odio turpis et.Viverra 
            tempus aliquam volutpat magna eu odio turpis et.</p>
      </div>

    </div>
  );
};

export default ProfileCareerDescription;
