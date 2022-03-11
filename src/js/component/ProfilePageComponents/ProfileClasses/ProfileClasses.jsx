import React, {useState}from "react";
import * as propTypes from "prop-types";

import ProfileEditButton from "../../StaticComponents/Buttons/ProfileEditButton/ProfileEditButton.jsx";

import "./ProfileClasses.scss";

const ProfileClassesPropTypes = {
  degree: propTypes.string,
  subjects: propTypes.arrayOf(propTypes.string),
};

/**
 * ! Creates the Profile Classes
 * * Keili Rosales - 2022-02-18
 * @returns React Component
 * @param {props} Props 
 */
const ProfileClasses = props => {
  const [subjects, setSubjects] = useState(props.subjects)
  const [leftSubjects, setLeftSubjects] = useState([]);
  const [rightSubjects, setRightSubjects] = useState([]);
  
  /**
   * TODO: Complete algorithm
   * @param {value} Subject
   */
  const leftSubjectsListener = (value) => (
      <p>{value}</p>   
  );

  /**
   * TODO: Complete algorithm
   * @param {value} Subject
   */
  const rightSubjectsListener = (value) => (
      <p>{value}</p>
  );

  /**
   * TODO: Complete algorithm
   * @param {array} props
   */
  const subjectsListener = () => {
    <>
      <div className="col-6 courses">{leftSubjects.map(leftSubjectsListener)}</div>
      <div className="col-6 courses">{rightSubjects.map(rightSubjectsListener)}</div>
    </>;
  };

  return (
    <div className="profile-classes">
      <div className="classes-editbutton">
        <ProfileEditButton />
      </div>
      <div className="career-classes">
        <p>{props.degree}</p>
      </div>
      <div className="courses-classes">
        <div className="row">
          {/* {subjectsListener()} //TODO: Add Listing and sorting of props and conditions maybe */}
        </div>
      </div>
    </div>
  );
};

ProfileClasses.propTypes = ProfileClassesPropTypes;

export default ProfileClasses;
