import React from "react";
// import PropTypes from "prop-types";
import "./ProfileBiography.scss";
import ProfileEditButton from "../ProfileEditButton/ProfileEditButton.jsx";
import InterestTag from "../../Profile-PageComponents/Tags/InterestTag.jsx";

/**
 * ! Creates the Profile Biography
 * * Keili Rosales - 2022-02-21
 * @returns React Component
 * @params Props {props}
 * TODO: It is missing to add the props to connect it with the back. At the moment, it has only test data.
 */

const ProfileBiography = () => {
  return (
    <div className="profile-biography">
      <div className="biography-editicon">
        <ProfileEditButton />
      </div>
      <div className="biography-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non volutpat
          pulvinar sit suscipit tellus. Tortor scelerisque aliquet et vehicula
          ac. Duis vel vel, nec volutpat. Rhoncus in habitant augue tempor sit
          viverra elementum. Proin massa est integer proin. Sodales enim, in
          imperdiet orci, nisi. Ante accumsan nunc, semper nulla. Imperdiet est
          condimentum eget fermentum ipsum. Urna viverra sit rutrum vitae turpis
          ipsum aenean porttitor morbi. Amet vulputate mi, lectus posuere.
        </p>
        <p>
          At sed quis gravida urna facilisi. Porttitor nam tincidunt purus at
          augue eu blandit cursus leo. Gravida at est viverra tellus, ultrices.
          Egestas viverra in praesent varius tellus auctor dolor. Arcu cursus
          arcu nullam proin dolor a blandit. Tortor, commodo auctor blandit in.
          Nunc aliquam ultrices faucibus consectetur ut a, vulputate eget neque.
        </p>
      </div>
      <div className="biography-tags">
        <ul>
          <li>
            <InterestTag />
          </li>
          <li>
            <InterestTag />
          </li>
          <li>
            <InterestTag />
          </li>
          <li>
            <InterestTag />
          </li>
          <li>
            <InterestTag />
          </li>
          <li>
            <InterestTag />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileBiography;
