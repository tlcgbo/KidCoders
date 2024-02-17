import React from 'react'
import { NavLink } from 'react-router-dom'
import spiderman from './Images/spiderman.jpg'
import spiderman2 from './Images/spiderman2.png'
import './AboutContentStyle.css'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who I am</h1>
            <p>I am a 13 year old programmer and freelance photo eidtor who occasionally video edits.</p>
            <NavLink to={'/contact'} className="btn">Contact</NavLink>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img className='img' src={spiderman} alt="" />
                </div>

                <div className='img-stack bottom'>
                    <img className='img' src={spiderman2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent