import React from "react";
import Logo from "../Images/sportstxt_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
