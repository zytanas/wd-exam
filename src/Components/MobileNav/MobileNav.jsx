import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.css";
import Logo from "../Images/sportstxt_logo.png";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
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
        </div>
      </div>
    </>
  );
};

export default MobileNav;
