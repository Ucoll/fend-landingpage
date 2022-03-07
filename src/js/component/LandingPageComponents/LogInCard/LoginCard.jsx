import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import CreateAccountButton from "../Buttons/CreateAccountButton/CreateAccountButton.jsx";
import LogInButton from "../Buttons/LogInButton/LogInButton.jsx";
import Checkbox from "../../StaticComponents/Buttons/Checkbox/Checkbox.jsx";

import "./LoginCardStyles.scss";

/**
 * ! CARD - Log In and Account Creation
 * * AslanSN - 2022-03-05
 * @returns React Component and props to BEND
 */
const LoginCard = () => {
  return (
    <>
      <div className="login-card">
        <div className="container">
          <input
            type="text"
            id="email-input"
            name="email-input"
            placeholder="Email"
            required
          />
          <input
            type="text"
            id="password-input"
            name="password-input"
            placeholder="Password"
            required
          />
          <LogInButton />
          <div className="pass-container">
            <Link className="pass-recovery" to="/passwordRecovery">
              Forgot your password?
            </Link>
            <Checkbox text="Remember me" />
          </div>
          <hr />
          <CreateAccountButton />
        </div>
      </div>
    </>
  );
};

export default LoginCard;
