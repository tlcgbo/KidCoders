import React from 'react'
import "./Footer.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='footer last-f'>
        <div className='address'>
            <div className='add-line'>
                 <FaHome />
                 <p>123 Bazzoka Lane</p>
            </div>
            <div className='add-line'>
                <FaPhone />
                <p>+231 4563 8932</p>
            </div>
            <div className='add-line'>
                <FaMailBulk />
                <p>theydidit@gmail.com</p>
            </div>
        </div>

        <div className='footer-about'>
            <h2>About the Company</h2>
            <p>This is Igbagbo. The CEO of KidCoders Association. We would love to serve you.</p>
            <div className='footer-icons'>
                 <BsFacebook style={{color:"#fff"}} size={30} />
                 <FaXTwitter className='twitter' style={{color:"#fff"}} size={30} />
                 <FaLinkedin style={{color:"#fff"}} size={30} />
            </div>
        </div>
    </div>
  )
}
