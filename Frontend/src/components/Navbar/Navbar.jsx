import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo"><img src="./images/afsalLogo.png" alt="Logo" /></div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Project">Projects</a></li>
          {/* <li><a href="">Experience</a></li> */}
          <li><a href="#Services">Services</a></li>
        </ul>
      </nav>

      <Link to="/contact">
        <button className="contact-btn">Contact →</button>
      </Link>
    </header>
    
  );
}

export default Navbar;