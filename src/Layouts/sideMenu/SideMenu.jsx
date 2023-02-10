import React from "react";
import MenuItem from "../../Components/menuItem/MenuItem";
import "./sideMenu.css";
import Circle from "../../Components/circle/Circle";

const SideMenu = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__sterling">
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu text="Sterling" />
      </div>
      <div className="sidebar__menu">
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu />
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu />
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu />
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu />
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu />
        <MenuItem icon={<Circle />} size={"2.3rem"} sideMenu />
      </div>
    </div>
  );
};

export default SideMenu;
