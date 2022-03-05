import React from "react";
import CreateAccountButton from "../../component/LandingPageComponents/Buttons/CreateAccountButton/CreateAccountButton.jsx";
import LogInButton from "../../component/LandingPageComponents/Buttons/LogInButton/LogInButton.jsx";
import UCollLogo from "../../component/StaticComponents/Buttons/UCollLogo/UCollLogo.jsx";

import './LandingPageStyles.scss'
/**
 * ! VIEW -> Landing Page
 * @returns 
 */
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <UCollLogo />
        <LogInButton />
        <CreateAccountButton/>
      </div>
    </>
  );
};

export default LandingPage;
