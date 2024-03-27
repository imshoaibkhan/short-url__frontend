import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <h3>BlitzURL</h3>
        <p>
          Welcome to BlitzURL - your premier destination for easy and secure URL
          shortening. Simplify your links and enhance your sharing experience
          with our intuitive service. Transform long URLs into short, memorable
          links effortlessly. Start shortening URLs today!
        </p>
        <ul className="socials">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© {year} BlitzURL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
