import React from "react";

import Cover from "../../../component/Profile-PageComponents/Cover/Cover.jsx";
import ProfileBiography from "../../../component/Profile-PageComponents/ProfileBiography/ProfileBiography.jsx";
import ProfileCareerDescription from "../../../component/Profile-PageComponents/ProfileCareerDescription/ProfileCareerDescription.jsx";
import SocialMedia from "../../../component/Profile-PageComponents/SocialMedia/SocialMedia.jsx";
import ProfileSocialMediaText from "../../../component/Profile-PageComponents/SocialMedia/SocialMediaText.jsx";
import InterestTags from "../../../component/Profile-PageComponents/Tags/InterestTag.jsx";
import ProfileClasses from "../../../component/Profile-PageComponents/ProfileClasses/ProfileClasses.jsx";
import ProfileUserInfo from "../../../component/Profile-PageComponents/ProfileUserInfo/ProfileUserInfo.jsx";
import ProfileFavorite from "../../../component/Profile-PageComponents/Buttons/ProfileFavorite/ProfileFavorite.jsx";
import MyColls from "../../../component/StaticComponents/Buttons/MyColls/MyColls.jsx"

/**
 * ! View -> Scrap Profile View
 * * AslanSN - 2022-02-19
 *
 */
const ScrapProfile = () => {
  return (
    <>
      <Cover />
      <MyColls />
      <ProfileFavorite/>
      <ProfileCareerDescription />
      <InterestTags />
      <SocialMedia />
      <ProfileSocialMediaText />
      <ProfileBiography/>
      <ProfileClasses />
      <ProfileUserInfo />
    </>
  );
};

export default ScrapProfile;