import React from "react";
import { Icon } from "@iconify/react";

import "./TicketPostItStyles.scss";
import TagMenu from "../../../HomePageComponents/TagMenu/TagMenu.jsx";

/**
 * !Small Ticket Post It
 * * AslanSN - 2022/02/17
 * TODO: OnClick on the Icon to open a menu for the Coll
 */
const TicketPostIt = () => {
  return (
    <div className="ticket">
      <div className="icon-container">
        <Icon className="menu-coll" icon="charm:menu-meatball" />
      </div>
      <div className="colltag-menu">
        <TagMenu />
      </div>
    </div>
  );
};

export default TicketPostIt;
