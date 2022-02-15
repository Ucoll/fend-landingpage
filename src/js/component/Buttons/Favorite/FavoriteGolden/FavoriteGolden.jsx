import React from "react";
import GoldenFavorite from "../../../../../js/component/Buttons/Favorite/img/GoldenFavorite.png";

/**
 * ! Creates the Favorite Button
 * * Keikeka (KeiliRosales) - 2022-02-04
 * @returns React Component
 */

const FavoriteGolden = () => {
  return (
    <>
       <img className="button-coll"       
       src={GoldenFavorite} 
       alt="Image Favorite Button Active" 
      />
    </>
  );
};

export default FavoriteGolden;
