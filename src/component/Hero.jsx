import React from 'react'
import "./Hero.css"
import subway from "./Images/subway.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img src={subway} alt="" className='bg-img' />
        </div>

        <div className='content'>
            <p>Hi, I am Igbagbo</p>
            <h1>I love coding</h1>

            <div>
                <Link to="/project">
                    <button className='btn'>Project</button>
                </Link>
                
                <Link to="/Contact">
                    <button className='btn btn-light'>Contact</button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Hero