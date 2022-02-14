import React from "react";
import OutFavorite from "../../../../../js/component/Buttons/Favorite/img/OutFavorite.png";

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
