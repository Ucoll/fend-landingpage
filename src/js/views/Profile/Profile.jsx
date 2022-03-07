import React from "react";

import Navbar from "../../component/StaticComponents/Navbar/Navbar.jsx";
import Cover from "../../component/Profile-PageComponents/Cover/Cover.jsx";
import ProfileCareerDescription from "../../component/Profile-PageComponents/ProfileCareerDescription/ProfileCareerDescription.jsx";
import ProfileBiography from "../../component/Profile-PageComponents/ProfileBiography/ProfileBiography.jsx";
import SocialMedia from "../../component/Profile-PageComponents/SocialMedia/SocialMedia.jsx";
import MyColls from "../../component/StaticComponents/Buttons/MyColls/MyColls.jsx";
import ProfileFavorite from "../../component/Profile-PageComponents/Buttons/ProfileFavorite/ProfileFavorite.jsx";
import ProfileClasses from "../../component/Profile-PageComponents/ProfileClasses/ProfileClasses.jsx";
import ProfileUserInfo from "../../component/Profile-PageComponents/ProfileUserInfo/ProfileUserInfo.jsx"

import "../Profile/ProfileStyles.scss";

/**
 * ! View -> Profile
 * * AslanSN - 2022-02-18 / Keili Rosales 2022-02-23
 *
 */
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="view-profile">
        <div className="view-cover"><Cover /></div>
        

        <ul className="leftpostit">
          <li className="left-careerdescription">
            <ProfileCareerDescription />
          </li>
          <li className="left-biography">
            <ProfileBiography />
          </li>
          <li className="left-socialmedia">
            <SocialMedia />
          </li>
          <li className="left-socialmedia">
            <SocialMedia />
          </li>
          <li className="left-socialmedia">
            <SocialMedia />
          </li>
          <li className="left-socialmedia">
            <SocialMedia />
          </li>
        </ul>
        <ul className="rightpostit">
          <li className="right-buttonmycolls">
            <MyColls />
          </li>
          <li className="right-buttonfavorites">
            <ProfileFavorite />
          </li>
          <li className="right-userinfo">
            <ProfileUserInfo />
          </li>
          <li className="right-classes">
            <ProfileClasses />
          </li>
          <li className="right-classestwo">
            <ProfileClasses />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
