import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import Hero3 from '../component/Hero3'
import { Footer } from '../component/Footer'
import LogIn from '../component/LogIn'
import SignUp from '../component/SignUp'


const Authentification = () => {
  const [toggle, setToggle] = useState(true)


    const handleToggle = () => {
      setToggle(!toggle)
    }
  return (
    <div>
        <NavBar />
        <Hero3 heading={"Get Connected today."} text={"Become a member."}/>
        {toggle ? (<LogIn toggleform={handleToggle} />) : (<SignUp toggleform={handleToggle} />)}
        <Footer />

    </div>
  )
}

export default Authentification