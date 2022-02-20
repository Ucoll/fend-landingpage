import React from "react";
// import PropTypes from "prop-types";
import "./ProfileClasses.scss";
import ProfileEditButton from "../Buttons/ProfileEditButton/ProfileEditButton.jsx";

/**
 * ! Creates the Profile Classes
 * * Keili Rosales - 2022-02-18
 * @returns React Component
 * @params Props {props}
 * ! TODO: It is missing to add the props to connect it with the back.
 */

const ProfileClasses = () => {
  return (
    <div className="profile-classes">
      <div className="classes-editbutton">
        <ProfileEditButton />
      </div>
      <div className="career-classes">
        <p>Lenguas Modernas y sus literaturas</p>
      </div>
      <div className="courses-classes">
        <div class="row">
          <div class="col-6 courses">
            <p>Literatura Americana</p>
            <p>Inglés I</p>
            <p>Poesía decimonónica</p>
          </div>
          <div class="col-6 courses">
            <p>Poesía Romántica</p>
            <p>Francés II</p>
            <p>Literatura Francesa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileClasses;
