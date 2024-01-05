import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <>
      <div>
        <header className="header">
          <nav className="nav container">
            <NavLink to="/" className="nav-logo active-link">
              <i className="bx bxs-objects-horizontal-center bx-rotate-90"></i> <span></span>
              Esmark
            </NavLink>
            <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
              <ul className="nav_list">
                <li className="nav_item">
                  <NavLink to="/home" className="nav_link">
                    <i className="bx bx-home nav_icon"></i>Home
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/houses" className="nav_link">
                    <i className="bx bx-building-house nav_icon"></i>
                    <div className="houses-dropdown">
                      Houses<i className="bx bx-chevron-down"></i>
                    </div>
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/about" className="nav_link">
                    <i className="bx bxs-briefcase nav_icon"></i>About
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/contacts" className="nav_link">
                    <i className="bx bxs-chat nav_icon"></i>Contacts
                  </NavLink>
                </li>
                <li className="nav_item">
                  {" "}
                  <button>
                    {" "}
                    <NavLink to="/login" className="authorization">
                      Log In
                    </NavLink>
                  </button>
                </li>
              </ul>

              <i
                className="bx bx-x nav_close"
                onClick={() => showMenu(!Toggle)}
              ></i>
            </div>
            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
              <i className="bx bx-menu"></i>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
