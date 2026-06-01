import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";


function About() {

  const [about, setAbout] = useState(null);

  // FETCH DATA
  useEffect(() => {
    axios.get("http://localhost:3800/addabout")
      .then((res) => {
        if (res.data.status) {
          setAbout(res.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // STATIC SKILLS (NO DYNAMIC CHANGE)
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#ffffff" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#ffffff" },
    { name: "JavaScript", icon: <FaJs />, color: "#ffffff" },
    { name: "React.js", icon: <FaReact />, color: "#ffffff" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#ffffff" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#ffffff" },
    { name: "MySQL", icon: <SiMysql />, color: "#ffffff" }
  ];






  const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

  return (
    <>

    <div id='About'>

    
    <section className="about">
  <div className="about-container">

    {/* LEFT SIDE */}
    <motion.div
      className="about-left"
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <motion.p className="about-text" variants={fadeUp}>
        {about?.summaryparaone || "Loading..."}
      </motion.p>

      <motion.p className="about-textt" variants={fadeUp}>
        {about?.summaryparatwo || ""}
      </motion.p>

      {about?.cv && (
        <motion.a
          href={`http://localhost:3800/images/${about.cv}`}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          <button className="about-btn">Download CV →</button>
        </motion.a>
      )}

      {/* SKILLS */}
      <motion.div className="clients" variants={fadeUp}>
        <h4>TECHNOLOGIES I WORK WITH</h4>

        <div className="client-logos">
          {skills.map((skill, index) => (
            <motion.div
              className="tech-item"
              key={index}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <span className="tech-icon">
                {skill.icon}
              </span>
              <span className="tech-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>

    {/* RIGHT SIDE IMAGE */}
    <motion.div
      className="about-right"
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="about-right-imagearea">
        {about?.profilePhoto ? (
          <img
            src={`http://localhost:3800/images/${about.profilePhoto}`}
            alt="profile"
          />
        ) : (
          <img src="/images/PortfolioImg.png" alt="default profile" />
        )}
      </div>
    </motion.div>

  </div>
</section>

</div>
</>
  )
}

export default About;