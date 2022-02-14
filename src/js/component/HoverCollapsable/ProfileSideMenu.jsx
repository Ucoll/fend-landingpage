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
    <div className="profilesidemenu-container test"> 
    <div className="profilesidemenu-avatar"></div>
      <div className="profilesidemenu-firstsection">              
        <h2 className="profile-name">Keili Rosales</h2>
        <h4 className="profile-college">Universidad Alejandro de Humbold</h4>
        <p className="profile-description">Graduada en el 2010 en Licenciatura en Publicidad.... bla bla bla</p> 
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