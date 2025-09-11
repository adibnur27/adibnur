import React from 'react'

// Section
import Header from './section/Header/Header'
import AboutMe from './section/AboutMe/AboutMe'
import Skills from './section/Skills/Skills'
import Projects from './section/Projects/Projects'
import Certificates from './section/Certificates/Certificates'
import Contact from './section/Contact/Contact'

// Component
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>

      {/* Section with IDs for smooth scrolling */}
      <div id="header" className=''>
        <Header/>
      </div>
      
      <div id="about-me">
        <AboutMe/>
      </div>
      
      <div id="skills">
        <Skills/>
      </div>
      
      <div id="projects">
        <Projects/>
      </div>
      
      <div id="certificates">
        <Certificates/>
      </div>
      
      <div id="contact">
        <Contact/>
      </div>

      <Footer/>
    </div>
  )
}

export default App