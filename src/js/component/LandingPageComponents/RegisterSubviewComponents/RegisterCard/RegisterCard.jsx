import React from "react";

import PlusButton from "../PlusButton/PlusCircledButton.jsx";
import CreateAccountButton from "../../Buttons/CreateAccountButton/CreateAccountButton.jsx";

import "./RegisterCardStyles.scss";

/**
 * !CARD -> Register
 * * AslanSN - 2022-03-07
 * @param {props} props
 * @returns React component
 */
const RegisterCard = ({ ...props }) => {
  /**
   * TODO
   */
  const facultyOptionsListener = () => {};

  /**
   * TODO
   */
  const degreeOptionsListener = () => {};

  return (
    <div className="register-card-view">
      <form className="register-card-container">
        <h1>Register</h1>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input type="email" name="email" id="email" placeholder="Email" />

        <div className="password-container">
          <input
            className="pass"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="pass"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="university-container">
          <label className="custom-selector">
            <select
              className="select"
              name="university"
              defaultValue="College or University"
              id="college"
            >
              College or University
              {/* //!HARDCODED */}
              <option disabled value="College or University">
                College or University
              </option>
              <option value="Harvard University">Harvard University</option>
              <option value="MIT">MIT</option>
              <option value="Stanford University">Stanford University</option>
              <option value="Yale University">Yale University</option>
              <option value="Columbia University">Columbia University</option>
              <option value="University of Chicago">
                University of Chicago
              </option>
              <option value="Dartmouth College">Dartmouth College</option>
              <option value="Duke University">Duke University</option>
              <option value="CIT">CIT</option>
            </select>
          </label>

          <label className="custom-selector">
            <select
              className="select"
              name="faculty"
              defaultValue="Faculty"
              id="faculty"
            >
              <option disabled value="Faculty">
                Faculty
              </option>
              {facultyOptionsListener} //TODO
            </select>
          </label>
        </div>

        <label className="custom-selector">
          {/* //TODO: FILL WITH DEGREES */}
          <select
            className="select"
            name="degree"
            id="degree"
            defaultValue="Choose your degree"
          >
            <option disabled value="Choose your degree">
              Choose your Degree
            </option>
            {degreeOptionsListener} //TODO
          </select>
        </label>

        <PlusButton />

        <CreateAccountButton />
      </form>
    </div>
  );
};

export default RegisterCard;
