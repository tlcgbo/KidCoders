import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea placeholder='Please type your message here.' name="" id="" cols="30" rows="10"></textarea>
            <button className='btn'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm