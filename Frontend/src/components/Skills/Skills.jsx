import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,  FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql,  SiTailwindcss } from "react-icons/si";


function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
     { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    
  ];

  return (
    <section className="skills-section">

      {/* HEADER */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Technologies I work with <br />
          to build modern web applications
        </h1>
      </motion.div>

      {/* GRID */}
      <div className="skills-container">

        {/* LEFT CARD */}
        <motion.div
          className="skills-review glow-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>My Tech Stack</h3>

          <p>
            I build scalable and responsive web applications using modern
            technologies. My focus is on clean code, performance, and
            user-friendly interfaces.
          </p>

          <div className="developer">
            <div>
              {/* <h4>Mohammed Afsal</h4>
              <p>Full Stack Developer</p> */}
            </div>
          </div>
        </motion.div>

        {/* SKILLS */}
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card glow-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;