import PropTypes from "prop-types";
import React from "react";

import "./ProfileSideMenu.scss";

/**
 * ! Create the side menu of the profile. Hover/Collapsible
 * * Keikeka (KeiliRosales) - 2022-02-06
 * @returns React Component
 */

const ProfileSideMenu = (props) => {
  return (
    <>
    <div className="hovercollapse-profilesidemenu">
        {/* <Collapse />
        <FeedCollege />
        <Avatar /> */}
        <h3>{props.name}</h3>
        <p>{props.college}</p>
        <p>{props.bio}</p>
     
    </div>
    </>
  );
};


ProfileSideMenu.propTypes = {
	name: PropTypes.string,
	college: PropTypes.string,	
    bio: PropTypes.string,
};


export default ProfileSideMenu;
