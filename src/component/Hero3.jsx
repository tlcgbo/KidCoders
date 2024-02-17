import React from 'react'
import './Hero2.css'

const Hero3 = ({heading, text}) => {
  return (
    <div className='short_hero'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Hero3