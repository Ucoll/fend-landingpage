import React, { useState, useEffect } from "react";

import PlusButton from "../PlusButton/PlusCircledButton.jsx";
import CreateAccountButton from "../../Buttons/CreateAccountButton/CreateAccountButton.jsx";

import "./RegisterCardStyles.scss";
import { database } from "../../../../index.js";

/**
 * !CARD -> Register
 * * AslanSN - 2022-03-07 & OvidioSantoro 2022-03-12
 * @param {props} props
 * @returns React component
 */
const RegisterCard = ({ ...props }) => {
  const [collegeList, setCollegeList] = useState([]);
  const [facultyList, setFacultyList] = useState([]);
  const [classesList, setClassesList] = useState([]);

  const [college, setCollege] = useState();
  const [faculty, setFaculty] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${database}/colleges`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setCollegeList(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch(`${database}/faculties/college/${college}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setFacultyList(data))
      .then(setFaculty())
      .catch((err) => {
        console.error(err);
      });
  }, [college]);

  useEffect(() => {
    fetch(`${database}/classes/faculty/${faculty}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setClassesList(data))
      .catch((err) => {
        console.error(err);
      });
  }, [faculty]);

  const collegeListener = () =>{
    let selectedCollege = document.getElementById("college").value
    document.getElementById("faculty").value = ""
    document.getElementById("class").value = ""
    setCollege(selectedCollege)
  }

  const facultyListener = () =>{
    let selectedFaculty = document.getElementById("faculty").value
    setFaculty(selectedFaculty)
    document.getElementById("class").value = ""
  }

  const registerUser = (ev) => {
    ev.preventDefault(); // TODO: Do we need to prevent the default behaviour?
    console.log("REGISTER");
    console.log(`College Id: ${college}`);
    console.log(`Faculty Id: ${faculty}`);
  };

  return (
    <div className="register-card-view">
      <form
        className="register-card-container"
        id="register-form"
        onSubmit={(ev) => registerUser(ev)}
      >
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
              id="college"
              required
              onChange={collegeListener}
            >
              <option hidden selected className="hidden-selected" value="">
                College
              </option>
              {collegeList.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </label>

          <label className="custom-selector">
            <select
              className="select"
              name="faculty"
              id="faculty"
              required
              onChange={facultyListener}
            >
              <option hidden selected className="hidden-selected" value="">
                Faculty
              </option>
              {facultyList.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="custom-selector">
          <select
            className="select"
            name="class"
            form="register-form"
            id="class"
            required
            onChange={console.log("CHANGED CLASS")}
          >
            <option hidden selected className="hidden-selected" value="">
                Select your classes
              </option>
              {classesList.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
          </select>
        </label>

        <PlusButton />
        <CreateAccountButton />
      </form>
    </div>
  );
};

export default RegisterCard;
