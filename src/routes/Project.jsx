import React from 'react'
import NavBar from '../component/NavBar'
import Hero2 from '../component/Hero2'
import { Footer } from '../component/Footer'
import ProjectContent from '../component/ProjectContent'

const Project = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading={"project"} text={"Here are some of my recent works."}/>
      <ProjectContent />
      <Footer />
    </div>
  )
}

export default Project