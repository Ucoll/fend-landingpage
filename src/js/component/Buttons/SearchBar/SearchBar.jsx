import React from "react";
import { Icon } from "@iconify/react";

import "./SearchBar.css";

/**
 * ! Creates the SearchBar Button
 * * 2022-02-01
 * @returns React Component
 */
export const SearchBar = () => {
  return (
    <div class="button-feed searchbar">
      <Icon
        className="button-icon"
        icon="foundation:magnifying-glass"
        hFlip={true}
      />
      <input type="text" className="searchbar-input" />
    </div>
  );
};
