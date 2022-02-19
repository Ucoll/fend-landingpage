import React from 'react';

import Cover from '../../component/Profile-PageComponents/Cover/Cover.jsx';
import ProfileCareerDescription from '../../component/Profile-PageComponents/ProfileCareerDescription/ProfileCareerDescription.jsx';
import Tags from '../../component/Profile-PageComponents/Tags/Tags.jsx';
/**
 * ! View -> Profile
 * * AslanSN - 2022-02-18
 * 
 */
const Profile = () => {
    return (
        <>  
            <Cover/>
            <ProfileCareerDescription/>
            <Tags/>
        </>
    );
}

export default Profile;