import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AllProject.css"; 
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AllProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/ListProject`) 
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // 🔹 animation (optional)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (

    <>

    <Navbar/>
    <section className="projects">
      
      {/* TITLE */}
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ALL PROJECTS
      </motion.h1>

      {/* GRID */}
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.length === 0 ? (
          <p>No projects found</p>
        ) : (
          projects.map((item) => (
            <motion.div
              className="project-cardd"
              key={item._id}
              variants={cardVariants}
            >
              {/* IMAGE */}
              <div className="image-wrapper">
                <img
                  src={item.Image?.startsWith('http') ? item.Image : `${import.meta.env.VITE_API_URL}/images/${item.Image}`}
                  alt={item.ProjectName}
                  className="project-imgg"
                />
              </div>

              {/* INFO */}
              <div className="project-infoo">
                <h2>{item.ProjectName}</h2>

                <p className="description">
                  {item.Description}
                </p>

                <Link to={`/viewProject/${item._id}`}>
                  <button className="viewProject">
                    View Project →
                  </button>
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

    </section>

    <Footer/>

    </>
  );
}

export default AllProject;