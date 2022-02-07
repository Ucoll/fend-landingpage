import React from "react";
import ImageFavorite from "../../../../img/icons/favorite/ImageFavorite.png";
import GoldenFavorite from "../../../../img/icons/favorite/GoldenFavorite.png";
import "./Favorite.scss";

/**
 * ! Creates the Favorite Button
 * * Keikeka (KeiliRosales) - 2022-02-04
 * @returns React Component
 */

const Favorite = () => {
  return (
    <>
    <div className="button-favorite">
       <img 
       className="favorite-out"
       src={ImageFavorite} 
       alt="Image Favorite Button" 
       height="52"
       width="52"/>
      <img 
       className="favorite-golden"
       src={GoldenFavorite} 
       alt="Image Favorite Button Active" 
       height="52"
       width="52"/>
    </div>
    </>
  );
};

export default Favorite;
