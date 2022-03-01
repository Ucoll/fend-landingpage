import React from "react";

import Navbar from "../../component/StaticComponents/Navbar/Navbar.jsx";
import Coll from "../../component/Home-PageComponents/Coll/Coll.jsx";
import ProfileSideMenu from "../../component/Home-PageComponents/Menus/ProfileSideMenu/ProfileSideMenu.jsx";
import ColleaguesSideMenu from "../../component/Home-PageComponents/Menus/ColleaguesSideMenu/ColleaguesSideMenu.jsx";
import ResourcesMenu from "../../component/Home-PageComponents/Menus/Resources/ResourcesMenu.jsx";
import DemoCalendar from "./CalendarSideMenuDemo.png";
import CompressedColl from "../../component/Home-PageComponents/Coll/CompressedColl/CompressedColl.jsx";

import './Home-Page.scss';

/**
 * ! View -> Home-Page
 * * AslanSN - 2022-02-18
 */
const HomeView = () => {
  const [data, setData] = useState([]);
  const [colls, setColls] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(String(err)));
  }, []);

  /**
   * ! Limits the number of items of the array
   * * AslanSN - 2022-02-25
   * ? To show more pre-loaded Colls change the last number of the splice number.
   * @param {Array} array
   * @returns
   */
  const limiter = (array) => array.splice(0, 12);

  /**
   * ! Creates a limited Array of Colls
   * * AslanSN - 2022-02-22
   * @param {Object} object 
   * @returns 
   */
  const collArrCreator = (array) => {
    const rawColls = [...array.colls];
    setColls(limiter(rawColls));
  };

  const collListee = (object) => (
    object.type === 'file' ? 
    <li className="compressed-coll">
      <CompressedColl />
    </li>
   : 
   <li className="coll" 
  );

  return (
    <>
      <Navbar />
      <div className="Home-Page">
        <ul className="left-collapsables">
          <li className="menu">
            <ProfileSideMenu />
          </li>
          <li className="menu">
            <ColleaguesSideMenu />
          </li>
        </ul>
        <ul className="coll-ul">
         
        </ul>
        <ul className="right-collapsables">
          <li className="menu">
            <img src={DemoCalendar} alt="Demo Calendar Side Menu" />
          </li>
          <li className="menu">
            <ResourcesMenu />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeView;
