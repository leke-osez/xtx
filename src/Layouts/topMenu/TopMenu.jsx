import React from "react";
import Circle from "../../Components/circle/Circle";
import MenuItem from "../../Components/menuItem/MenuItem";
import Clock from "react-live-clock";
import "./topMenu.css";

const TopMenu = () => {
  return (
    <div className="topmenu">
      {/* DATE */}
      <Clock
        format={"h:mma ddd, D MMM YYYY"}
        ticking={true}
        timezone={"US/Pacific"}
      />
      <div>{"ASSIGNED ROLE(s)"}</div>

      {/* TOP MENU ICONS */}
      <div className="topmenu__navigations">
        <MenuItem row icon={<Circle />} text={"My Team"} />
        <MenuItem row icon={<Circle />} text={"Notifications"} />
        <MenuItem row icon={<Circle />} text={"Help"} />
        <MenuItem row icon={<Circle />} text={"Ayo Praise"} />
      </div>
    </div>
  );
};

export default TopMenu;
