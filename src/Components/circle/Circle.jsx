import React from "react";
import './circle.css'

const Circle = ({ isActive }) => {
  return (
    <div
      className={`circle ${isActive ? "circle_active" : "circle_dormant"}`}
    ></div>
  );
};

export default Circle;
