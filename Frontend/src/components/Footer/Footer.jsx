import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer-container">

      <div className="footer-left">
        <h1>
          HAVE ANY PROJECT <br /> IDEA? CONTACT ME
        </h1>

        <Link to="/contact">
          <button className="footer-btn">
            Contact Now →
          </button>
        </Link>
      </div>


      <div className="footer-right">

        <div className="footer-col">
          <h4>MAIN PAGES</h4>
          <p>Home</p>
          <p>About</p>
          <p>Project</p>
        </div>

        <div className="footer-col">
          <h4>UTILITY PAGES</h4>
          <p>Licenses</p>
          <p>404 Page</p>
        </div>

        <div className="footer-col">
          <h4>MORE PAGES</h4>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div className="footer-col">
          <h4>SOCIALS</h4>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>

      </div>

    </div>
  )
}

export default Footer