import React from 'react'
import NavBar from '../component/NavBar'
import Hero2 from '../component/Hero2'
import { Footer } from '../component/Footer'
import ContactForm from '../component/ContactForm'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading={"contact"} text={"You can reach us today, we are available to serve you."}/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact