import React from "react";

import LoginCard from "../../component/LandingPageComponents/LogInCard/LoginCard.jsx";
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
        <LoginCard/>
      </div>
    </>
  );
};

export default LandingPage;
