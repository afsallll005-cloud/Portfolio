import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3800/ListProject")
      .then((res) => {
        // Latest projects first
        const latestProjects = [...res.data.data].reverse();
        setProjects(latestProjects);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, 4);

  const handleShowLess = () => {
    setShowAll(false);

    setTimeout(() => {
      document
        .getElementById("Project")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  return (
    <section id="Project" className="qxw-showcase">
      <div className="qxw-showHed">
        <motion.h1
          className="qxw-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          OUR <br />
          WORKS
        </motion.h1>

        <motion.p
          className="qxw-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We transform ideas into powerful digital experiences. Our
          portfolio showcases innovative web applications, responsive
          user interfaces, and scalable solutions built with modern
          technologies to help businesses grow and succeed in the
          digital world.
        </motion.p>
      </div>

      <div className="qxw-grid">
        {displayedProjects.map((item) => (
          <motion.div
            key={item._id}
            className="qxw-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="qxw-top">
              <h3>{item.ProjectName}</h3>
              <span>2026</span>
            </div>

            <div className="qxw-image-wrap">
              <img
                src={`http://localhost:3800/images/${item.Image}`}
                alt={item.ProjectName}
                className="qxw-image"
              />

              <div className="qxw-overlay">
                <div className="qxw-overlay-content">
                  <h2>{item.ProjectName}</h2>

                  <a
                    href={item.Demolink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectdemo-btn"
                  >
                    <button className="qxw-view-btn">
                      LIVE DEMO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 4 && (
        <div className="qxw-load">
          {showAll ? (
            <button onClick={handleShowLess}>
              SHOW LESS
            </button>
          ) : (
            <button onClick={() => setShowAll(true)}>
              LOAD MORE
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Projects;