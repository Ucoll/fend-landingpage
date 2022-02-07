import React from "react";
import OutFavorite from "../../../../../img/icons/favorite/OutFavorite.png";
// import "./Favorite.scss";

/**
 * ! Creates the Favorite Button
 * * Keikeka (KeiliRosales) - 2022-02-04
 * @returns React Component
 */

const FavoriteOut = () => {
  return (
    <>
      <img
        className="button-coll"
        src={OutFavorite}
        alt="Image Favorite Button"
      />
    </>
  );
};

export default FavoriteOut;
