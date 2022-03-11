import React from "react";
import { Icon } from "@iconify/react";

import "./SearchBar.scss";

/**
 * ! Creates the SearchBar Button
 * * OvidioSantoro - 2022-02-01
 * @returns React Component
 */
const SearchBar = () => {
  return (
    <div className="button-feed searchbar">
      <Icon
        className="button-icon"
        icon="foundation:magnifying-glass"
        hFlip={true}
      />
      <input type="text" className="searchbar-input" />
    </div>
  );
};

export default SearchBar;
