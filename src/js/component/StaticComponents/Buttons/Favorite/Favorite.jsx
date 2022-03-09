import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";

import "./Favorite.scss";

const FavoritePropTypes = {
  favorites: PropTypes.bool.isRequired, // TODO: Discus if boolean or string
  width: PropTypes.string,
  height: PropTypes.string,
};

/**
 * ! Creates the Favorite Button
 * * Keikeka (KeiliRosales) & OvidioSantoro
 * * 2022-02-13
 * @param {props} props - Width and Height properties 
 * @returns React Component
 */
const Favorite = (props) => {
  const [favorite, setFavorite] = useState([""]);

  // TODO: On component load, send a Fetch request to get the actual value. Remove the hard-coded values.
  useEffect(() => {
    setFavorite("unfavorited");
  }, []);

  // TODO: When liked state changes, send a Fetch request to update the value on the database.
  // TODO: Update the "score" too and change the code returned to accept the value as props.
  //useEffect(() => {}, [liked]);

  const switchFavorite = () => {
    favorite === "unfavorited"
      ? setFavorite("favorited")
      : setFavorite("unfavorited");
  };

  return (
    <div className="button-favorite" onClick={switchFavorite}>
      <svg
        width={!props.width ? "35" : props.width}
        height={!props.height ? "30" : props.height}
        viewBox="0 0 553 528"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M294.188 21.275L361.478 157.264C362.883 160.081 364.947 162.516 367.496 164.362C370.044 166.209 373.001 167.411 376.114 167.867L526.004 189.578C529.678 190.057 533.141 191.572 535.986 193.946C538.831 196.321 540.942 199.457 542.072 202.988C543.201 206.519 543.302 210.298 542.363 213.884C541.425 217.47 539.485 220.715 536.77 223.239L428.264 329.101C426.043 331.245 424.376 333.898 423.409 336.83C422.442 339.762 422.203 342.886 422.713 345.932L448.283 495.217C448.86 498.774 448.44 502.422 447.072 505.755C445.704 509.089 443.44 511.979 440.532 514.105C437.623 516.23 434.183 517.509 430.593 517.8C427.002 518.09 423.402 517.381 420.189 515.75L285.608 445.231C282.841 443.743 279.749 442.964 276.608 442.964C273.467 442.964 270.375 443.743 267.608 445.231L133.027 515.75C129.82 517.448 126.201 518.211 122.582 517.95C118.963 517.689 115.491 516.415 112.561 514.274C109.631 512.133 107.362 509.21 106.014 505.84C104.665 502.471 104.29 498.789 104.933 495.217L130.504 345.932C130.971 342.887 130.712 339.775 129.747 336.85C128.782 333.925 127.139 331.27 124.952 329.101L16.446 223.239C13.662 220.747 11.6588 217.501 10.6783 213.895C9.69778 210.289 9.78187 206.476 10.9204 202.916C12.0589 199.356 14.2032 196.203 17.0943 193.836C19.9854 191.469 23.4996 189.99 27.2125 189.578L177.102 167.867C180.215 167.411 183.172 166.209 185.721 164.362C188.269 162.516 190.334 160.081 191.738 157.264L259.029 21.275C260.574 17.9101 263.051 15.0592 266.167 13.0607C269.283 11.0622 272.907 10 276.608 10C280.31 10 283.933 11.0622 287.049 13.0607C290.165 15.0592 292.643 17.9101 294.188 21.275Z"
          fill="#CEBCB5"
          className={favorite + "-star"}
          stroke="#053539"
          strokeWidth="20"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

Favorite.PropTypes = FavoritePropTypes;

export default Favorite;
