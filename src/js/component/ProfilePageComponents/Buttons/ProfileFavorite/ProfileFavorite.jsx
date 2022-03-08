import React from "react";
import { Icon } from "@iconify/react";
import "./ProfileFavorite.scss";

/**
 * ! Creates the Profile Favorite Button
 * * Keili Rosales - 2022-02-16
 * @returns React Component
 */
const ProfileFavorite = () => {
  return (
    <div className="button-profilefavorite">
      <Icon className="button-iconfavorite"  icon="bxs:star"/>
      <div className="mycolls-title">Favorites</div>
    </div>
  );
};

export default ProfileFavorite;
