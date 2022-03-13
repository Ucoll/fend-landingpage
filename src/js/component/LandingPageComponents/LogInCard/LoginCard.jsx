import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../../store/appContext.js";

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

  const {store, actions} = useContext(Context)
  const history = useHistory()

  const loginHandler = (ev) => {
    ev.preventDefault()

    const email = document.getElementById("email-input").value
    const password = document.getElementById("password-input").value

    actions.login(email, password).then(() =>{
      history.push("/home")
    })
  }

  return (
    <>
      <div className="login-card">
        <form onSubmit={(ev) => loginHandler(ev)} className="container">
          <input
            type="email"
            id="email-input"
            name="email-input"
            placeholder="Email"
            required
          />
          <input
            type="password"
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
        </form>
        {/* TODO: Make the redirect */}
        <CreateAccountButton />
      </div>
    </>
  );
};

export default LoginCard;
