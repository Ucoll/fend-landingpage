import React from "react";
import GoldenFavorite from "../../../../../img/icons/favorite/GoldenFavorite.png";
// import "./Favorite.scss";

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
