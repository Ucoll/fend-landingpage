import PropTypes from "prop-types";
import React from "react";

import "./ProfileSideMenu.scss";

/**
 * ! Create the side menu of the profile. Hover/Collapsible
 * * Keikeka (KeiliRosales) - 2022-02-07
 * @params Props {props}
 * @returns React Component
 * 
 */

const ProfileSideMenu = (props) => {
  return (
    <>
    <div className="hovercollapse-profilesidemenu"> 
      <div className="profilesidemenu-container">              
        <h2 className="profile-name">{props.name}</h2>
        <h4 className="profile-college">{props.college}</h4>
        <p className="profile-description">{props.description}</p> 
      </div> 
      <div className="profile-secondsection">
        <Link to="/profile">Profile</Link>
        <Link to="/mycolls">My Colls</Link>
        <Link to="/myfavorites">My Favorites</Link>
      </div>
    </div>
    </>
  );
};

ProfileSideMenu.propTypes = {
	name: PropTypes.string,
	college: PropTypes.string,	
  description: PropTypes.string,
};


export default ProfileSideMenu;