import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./ProfileSideMenu.scss";

/**
 * ! Create the side menu of the profile. Hover/Collapsible
 * * Keikeka (KeiliRosales) - 2022-02-07
 * @params Props {props}
 * @returns React Component
 * 
 */

const ProfileSideMenu = () => {
  return (
    <>
    <div className="profilesidemenu-container"> 
    <div className="button-collapse-menu"> 
        <div className="collapse-menu"> <Icon icon="prime:window-minimize"/></div>
     </div>
    <div className="profilesidemenu-avatar"></div>
      <div className="profilesidemenu-firstsection">              
        <p className="profile-name">Keili Rosales Ramirez</p>
        <p className="profile-college">Universidad Alejandro de Humbold</p>
        <p className="profile-description">Graduada en el 2010 en Publicidad.... bla bla bla t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p> 
      </div> 
      <br></br>
      <div className="profile-secondsection">
        <Link to="/profile">Profile</Link><br></br>
        <Link to="/mycolls">Colls</Link><br></br>
        <Link to="/myfavorites">Favorites</Link><br></br>
      </div>
    </div>
    </>
  );
};

// ProfileSideMenu.propTypes = {
// 	name: PropTypes.string,
// 	college: PropTypes.string,	
//   description: PropTypes.string,
// };


export default ProfileSideMenu;