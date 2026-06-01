import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (

    <>

      <div id="home">

        <section className="hero">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hello, I’m Mohammed Afsal
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            FULLSTACK <br />
            DEVELOPER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            A visionary Full Stack Developer, builds dynamic and engaging web applications that
            merge powerful backend logic with intuitive, elegant user interfaces.
          </motion.p>

        </section>
      </div>
    </>
  );
}

export default Hero;