import React from 'react';
import '../style/Contact.css';
import sendEmail from '../../SendEmail';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";


function Contact() {
  return (
    <div>
         <h1 className='contact' id='contact'>Contact</h1>
         <div className='contacts'>
          <div className='githupandlinkedin'>
            <a href='https://www.linkedin.com/in/ibrahim-seraj-a50603228/' target='_blank' rel="noreferrer"><BsLinkedin className='linkedin' /></a>
            <a href='https://github.com/Ibrahimseraj' target='_blank' rel="noreferrer"><BsGithub className='githup' /></a>
          </div>
          <div className='info'>
            <p>Feel free to contact me!</p>
          </div>
          <form className='form' onSubmit={sendEmail}>
            <input placeholder='Name' type='text' name='name' className='contact-input-1' required />
            <input placeholder='Email' type='email' name='user_email' className='contact-input-2' required />
            <textarea placeholder='Message' name='message' rows='7' required />
            <input type='submit' className='submit' value='Send' />
          </form>
         </div>
         <footer className='developer'>
          <a href='#nav'><BsArrowUpSquareFill /></a>
          <p>© 2025 | Developed and designed by Ibrahim Seraj</p>
         </footer>
    </div>
  )
}

export default Contact;