import React from "react";

import Cover from "../../../component/Profile-PageComponents/Cover/Cover.jsx";
import ProfileCareerDescription from "../../../component/Profile-PageComponents/ProfileCareerDescription/ProfileCareerDescription.jsx";
import Tags from "../../../component/Profile-PageComponents/Tags/Tags.jsx";


/**
 * ! View -> Scrap Profile View
 * * AslanSN - 2022-02-19
 *
 */
const ScrapProfile = () => {
  return (
    <>
      <Cover />
      <ProfileCareerDescription />
      <Tags />
    </>
  );
};

export default ScrapProfile;