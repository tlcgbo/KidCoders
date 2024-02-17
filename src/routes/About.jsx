import React from 'react'
import NavBar from '../component/NavBar'
import Hero2 from '../component/Hero2'
import { Footer } from '../component/Footer'
import AboutContent from '../component/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading={"about"} text={"I am a web developer."}/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About