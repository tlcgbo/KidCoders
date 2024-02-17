import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaTypo3 } from "react-icons/fa";
import "./NavBarStyle.css"
import { projectAuth } from '../Firebase/config';
import userLogOut from '../Auth/UserLogOut';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate()
  const {error, logOut} = userLogOut()

  const handleLogout = async() => {
    await logOut()

    if (!error) {
      navigate("/")
    }
  }

  const [toggle, setToggle] = useState(false)
  const handToggle = () => setToggle(!toggle)

  const [color, setColor] = useState(false)
  const colorChange = () => {
    if (window.scrollY > 100) {
        setColor(true)
    } else {
      setColor(false)
    }

    window.addEventListener("scroll", colorChange)
  }


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>KidCoders <FaTypo3 /></h1>
        </Link>
        
        <ul className={toggle ? "nav-menu" : "nav-menu active"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/project">Project</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          {projectAuth.currentUser  ? (
            <li>
              <button onClick={handleLogout} className='btn-out'>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/signUp">Signup</Link>
            </li>
          )}
        </ul>

        <div className='hamburger' onClick={handToggle}>
            {toggle ? (<FaTimes size={25} style={{color : "#fff"}} />) : (<FaBars size={25} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default NavBar