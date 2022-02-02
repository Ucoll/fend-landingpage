import React from "react";
import { Icon } from "@iconify/react";

/**
 * ! Creates the NewPostVideo Button
 * * 2022-02-02
 * @returns React Component
 */
const NewPostVideo = () => {
  return (
    <div className="button-new icon-video">
      <Icon className="button-icon" icon="et:video" width="32" height="32" />
    </div>
  );
};

export default NewPostVideo;
