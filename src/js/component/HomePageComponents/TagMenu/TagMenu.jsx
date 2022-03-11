import React, { useState, useEffect } from "react";
// import propTypes from 'propTypes';
import "./TagMenu.scss";

/**
 * ! HomePage ->  Coll - Tag Menu
 * * Keili Rosales - 2022-03-10
 *
 * @params props {props}
 */

const TagMenu = () => {
  return (
    <>
      <div className="container-tag">
        <a
          class="dropdown-toggle"
          href="#"
          id="navbarScrollingDropdown"
          role = "button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></a>
        <ul className="dropdown-menu tag-menu">
          <li>
            <a className="dropdown-item " href="#">
              Edit coll
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Remove coll
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TagMenu;
