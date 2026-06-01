import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import Projects from '../../components/Project/Project'
import Footer from '../../components/Footer/Footer'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Projects />
            {/* <Skills/> */}
            <Services/>
            <Footer/>
        </div>
    )
}

export default Home
