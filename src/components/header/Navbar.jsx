import React, { useState } from "react";
import "./Navbar.css";
import Menu from "./navpages/Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">
      <div className="for-name">
        <h1 className="name">
          <span className="first-latter">S</span>aransh
        </h1>
      </div>
      <div className="for-list-items">
        <ul className={menuOpen ? "open" : ""}>
          <li className="list-item">
            <NavLink to="/" className="link-items">
              Info
            </NavLink>
          </li>
          <li className="list-item ">
            <NavLink to="/skills" className="link-items">
              Skills
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/education" className="link-items">
              Education
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/contact" className="link-items">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="for-menu">
        <Menu
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
