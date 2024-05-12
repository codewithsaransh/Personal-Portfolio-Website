import React from "react";
import "./Menu.css";

export const Menu = ({ onClick }) => {
  return (
    <div className="menu-btn">
      <input
        hidden=""
        className="check-icon"
        id="check-icon"
        name="check-icon"
        type="checkbox"
        onChange={onClick}
      />
      <label className="icon-menu" htmlFor="check-icon">
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
    </div>
  );
};

export default Menu;
