import React from "react";
import { Icon } from "@iconify/react";

/**
 * ! Creates the NewPost Button
 * * OvidioSantoro
 * * 2022-02-01
 * @returns React Component
 */
const NewPost = () => {
  return (
    <div className="button-feed">
      <Icon className="button-icon" icon="akar-icons:plus" />
    </div>
  );
};

export default NewPost;
