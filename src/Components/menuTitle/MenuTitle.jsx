import React from "react";
import "./menuTitle.css";

const MenuTitle = ({ text, isActive }) => {
  return (
    <div className="menu-title">
      <p className="menu-title__text">{text}</p>
      <div className="menu-title__line"></div>
    </div>
  );
};

export default MenuTitle;
