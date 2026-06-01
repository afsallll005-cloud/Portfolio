import React from "react";
import "./Adminpanel.css";
import { Link } from "react-router-dom";

import { FaProjectDiagram, FaUser, FaBriefcase, FaCogs } from "react-icons/fa";

function Adminpanel() {
  return (
    <section className="dashboard">

      {/* TOP BAR */}
      <div className="top-bar">
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      {/* TITLE */}
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* GRID */}
      <div className="dashboard-container">

        {/* ABOUT */}
        <div className="dashboard-card">
          <div className="card-icon"><FaUser /></div>
          <h2>About</h2>
          <div className="card-buttons">
            <Link to="/addabout" className="btn add-btn">＋ Add</Link>
            <Link to="" className="btn view-btn">View →</Link>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="dashboard-card">
          <div className="card-icon"><FaProjectDiagram /></div>
          <h2>Projects</h2>
          <div className="card-buttons">
            <Link to="/addProject" className="btn add-btn">＋ Add</Link>
            <Link to="/ListProject" className="btn view-btn">View →</Link>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="dashboard-card">
          <div className="card-icon"><FaBriefcase /></div>
          <h2>Experience</h2>
          <div className="card-buttons">
            <Link to="" className="btn add-btn">＋ Add</Link>
            <Link to="" className="btn view-btn">View →</Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="dashboard-card">
          <div className="card-icon"><FaCogs /></div>
          <h2>Services</h2>
          <div className="card-buttons">
            <Link to="/addservice" className="btn add-btn">＋ Add</Link>
            <Link to="/viewservice" className="btn view-btn">View →</Link>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Adminpanel;