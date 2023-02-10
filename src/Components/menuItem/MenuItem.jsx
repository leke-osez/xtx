import React from "react";
import "./menuItem.css";

const MenuItem = ({ icon, text, row, handleClick, sideMenu, size }) => {
  return (
    <div
      onClick={handleClick}
      className={`menu-item ${row ? "menu-item__row" : "menu-item__column"} ${
        sideMenu ? "menu-item__side-menu" : ""
      }`}
    >
      <div
        style={
          size
            ? { width: size, height: size }
            : { width: "1.6rem", height: "1.6rem" }
        }
      >
        {icon}
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};

export default MenuItem;
