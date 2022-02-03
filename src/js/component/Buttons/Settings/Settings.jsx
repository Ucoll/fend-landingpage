import React from "react";
import { Icon } from "@iconify/react";
import "./Settings.css";

/**
 * ! Creates the Settings & Options Button
 * * OvidioSantoro
 * * 2022-02-03
 * @returns React Component
 */
const Settings = () => {
  return (
    <div className="button-settings">
      <Icon className="button-icon" icon="bx:bxs-user" />
    </div>
  );
};

export default Settings;
