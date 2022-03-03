import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Portrait from "../../../StaticComponents/Portraits/Portrait/Portrait.jsx";
import "./ProfileSideMenu.scss";

const ProfileSideMenuProptypes = {
  name: PropTypes.string.isRequired,
  university: PropTypes.string,
  profileDescription: PropTypes.string,
  avatar: PropTypes.string,
}

/**
 * ! Create the side menu of the profile. Hover/Collapsable
 * * Keikeka (KeiliRosales) - 2022-02-07
 * @param {props} Props 
 * @returns React Component
 */
const ProfileSideMenu = props => {
  return (
    <>
      <div className="profilesidemenu-container">
        <div className="button-collapse-menu">
          <div className="collapse-menu">
            <Icon icon="prime:window-minimize" />
          </div>
        </div>
        <div className="profilesidemenu-avatar">
          <Link to="/profile">
            <Portrait avatar={props.avatar} />
          </Link>
        </div>
        <div className="profilesidemenu-firstsection">
          <p className="profile-name">{props.name}</p>
          <p className="profile-college">{props.university}</p> {/*//TODO: null ? SpaceHolder*/}
          <p className="profile-description">{props.profileDescription}</p> {/*//TODO: null ? SpaceHolder*/}
        </div>
        <br />
        <div className="profile-secondsection">
          <Link to="/profile">Profile</Link>
          <br />
          <Link to="/mycolls">Colls</Link>
          <br />
          <Link to="/myfavorites">Favorites</Link>
          <br />
        </div>
      </div>
    </>
  );
};

ProfileSideMenu.PropTypes = ProfileSideMenuProptypes;

export default ProfileSideMenu;