import React from "react";
import { Icon } from "@iconify/react";

/**
 * ! Creates the NewPostText Button
 * * 2022-02-02
 * @returns React Component
 */
const NewPostText = () => {
  return (
    <div className="button-new">
      <Icon className="button-icon" icon="bi:file-text" />
    </div>
  );
};

export default NewPostText;
