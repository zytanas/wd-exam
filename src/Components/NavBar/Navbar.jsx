import React, { useState } from "react";
import Logo from "../Images/sportstxt_logo.png";
import { NavLink } from "react-router-dom";
import "material-symbols";
import MobileNav from "../MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={Logo} alt="logo" />

          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "nav-link"
                }
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "nav-link"
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
