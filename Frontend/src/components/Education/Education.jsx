import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

function Education() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* LEFT TITLE */}
      <motion.div className="services-left" variants={item}>
        <h1>EDUCATION</h1>
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="services-right">

        <motion.div className="service-item" variants={item}>
          <div className="service-left">
            <span>[01]</span>
            <h3>Full Stack Development</h3>
          </div>

          <div className="service-right">
            <h4>G-TECH CENTERE OF EXCELENCE</h4>
            <p>
              Completed full-stack development training with hands-on projects
              using modern web technologies.
            </p>
          </div>
        </motion.div>

        <motion.div className="service-item" variants={item}>
          <div className="service-left">
            <span>[02]</span>
            <h3>Bachelor’s Degree </h3>
          </div>

          <div className="service-right">
            <h4>University of Calicut</h4>
            <p>
             Completed a Bachelor of Arts in English Language & Linguistics, developing strong analytical and communication skills.
            </p>
          </div>
        </motion.div>

        <motion.div className="service-item" variants={item}>
          <div className="service-left">
            <span>[03]</span>
            <h3>Schooling</h3>
          </div>

          <div className="service-right">
            <h4>GOVT HSS KADUNGAPURAM </h4>
            <p>
              Mention your school education and key highlights.
            </p>
          </div>
        </motion.div>

      </div>

    </motion.section>
  );
}

export default Education;