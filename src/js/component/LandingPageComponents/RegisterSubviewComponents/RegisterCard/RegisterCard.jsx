import React, { useState, useEffect } from "react";

import PlusButton from "../PlusButton/PlusCircledButton.jsx";
import CreateAccountButton from "../../Buttons/CreateAccountButton/CreateAccountButton.jsx";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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

  const collegeListener = () => {
    let selectedCollege = document.getElementById("college").value;
    document.getElementById("faculty").value = "";
    // TODO: CORRECT THIS SO IT ERASES THE SELECT WHEN CHANGED
    //document.getElementById("class").value = null;
    setCollege(selectedCollege);
  };

  const facultyListener = () => {
    let selectedFaculty = document.getElementById("faculty").value;
    setFaculty(selectedFaculty);
    //document.getElementById("class").value = null;
  };

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  const registerUser = (ev) => {
    ev.preventDefault(); // TODO: Do we need to prevent the default behaviour?
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmation = document.getElementById("confirm-password").value;
    let userClasses = classes.map((item) => (String(item.value)))

    fetch(`${database}/register`, {
      method: "POST",
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmation: confirmation,
        faculty: faculty,
        classes: userClasses,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((response) => console.log(response.json()))
      .catch((err) => {
        console.error(err);
      });
  };

  const animatedComponents = makeAnimated();

  const handleChange = (classesList) => {
    setClasses(classesList);
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#e4e4e4",
    }),
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

        <Select
          closeMenuOnSelect={false}
          id="class"
          placeholder="Classes"
          components={animatedComponents}
          isMulti
          onChange={handleChange}
          styles={customStyles}
          options={classesList.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        />

        <CreateAccountButton />
      </form>
    </div>
  );
};

export default RegisterCard;
