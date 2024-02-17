import React from 'react'
import './ProjectContent.css'
import BMI from './Images/bmi.png'
import weather from './Images/weather.png'

const ProjectContent = () => {

  return (
    <div className='projects'>
        <h1>Here are some of my awesome projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={BMI} alt="" />
                <div className='card-text'>
                    <p className='heading'>BMI Calculator</p>
                    <p className='description'>This is a calculator in which you calculate your Body Mass Index.</p>
                    <button>
                        <a target='_blank' href="https://tlcgbo.github.io/BMI_Calculator/">Click to view project</a>
                    </button>
                </div>
            </div>

            <div className='project-card middle' >
                <img src={weather} alt="" />
                <div className='card-text'>
                    <p className='heading'>Weather App</p>
                    <p className='description'>This application allows you to get the weather of anywhere at any time of the day.</p>
                    <button>
                        <a target='_blank' href="https://igbagbosweatherapp.netlify.app/">Click to view project</a>
                    </button>
                </div>
            </div>

            <div className='project-card'>
                <img src={BMI} alt="" />
                <div className='card-text'>
                    <p className='heading'>Firebase Project</p>
                    <p className='description'>A complete SignUp and LogIn project.</p>
                    <button>
                        <a target='_blank' href="https://igbagbosweatherapp.netlify.app/">Click to view project</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContent