import React from "react";
import { Icon } from "@iconify/react";
import "./MyColls.scss";

/**
 * ! Creates the My Colls Button
 * * Keili Rosales - 2022-02-16
 * @returns React Component
 */
const MyColls = () => {
  return (
    <div className="button-mycolls">
      <Icon className="button-icon"  icon="file-icons:postscript" />
      <div className="mycolls-title">Colls</div>
    </div>
  );
};

export default MyColls;
