import React from "react";

import * as PropTypes from "prop-types";

import ProfileEditButton from "../ProfileEditButton/ProfileEditButton.jsx";

import "./ProfileClasses.scss";

const ProfileClassesPropTypes = {
  degree: PropTypes.string,
  subjects: PropTypes.arrayOf(PropTypes.string),
};

/**
 * ! Creates the Profile Classes
 * * Keili Rosales - 2022-02-18
 * @returns React Component
 * @param {props} Props 
 */
const ProfileClasses = props => {
  // const [subjects, setSubjects] = useState([])
  // const [leftSubjects, setLeftSubjects] = useState([]);
  // const [rightSubjects, setRightSubjects] = useState([]);
  
  /**
   * TODO: Complete algorithm
   * @param {array} props
   */
  const leftSubjectsListener = (props) => {
    <>
      <p>subject</p>
      <p>subject</p>
      <p>subject</p>
    </>;
  };

  /**
   * TODO: Complete algorithm
   * @param {array} props
   */
  const rightSubjectsListener = (props) => {
    <>
      <p>subject</p>
      <p>subject</p>
      <p>subject</p>
    </>;
  };

  /**
   * TODO: Complete algorithm
   * @param {array} props
   */
  const subjectsListener = (props) => {
    <>
      <div class="col-6 courses">{leftSubjectsListener(props)}</div>
      <div class="col-6 courses">{rightSubjectsListener(props)}</div>
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
        <div class="row">
          {subjectsListener(props.subjects)} //TODO: Add Listing and sorting of props
        </div>
      </div>
    </div>
  );
};



export default ProfileClasses;
