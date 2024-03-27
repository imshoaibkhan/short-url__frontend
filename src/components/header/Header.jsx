import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    setShowNavbar(false); 
  }, [location]);
  return (
    <header>
      <div className="logo-section">
        <div className="logo-container" onClick={() => navigate('/')} >
          <img src="./logo.png" alt="not found" className="logo" />
          <span>blitzURL.</span>
        </div>
      </div>

      <nav className={`navbar-section ${showNavbar ? "navbar-active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="share-section">
        <ul>
          <li>
            <Link>
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-discord"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-mobile" onClick={handleShowNavbar}>
        {showNavbar ? (
          <i className="fa-solid fa-close"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </header>
  );
};

export default Header;
