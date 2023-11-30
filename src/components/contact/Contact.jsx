import React from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaTelegram, FaPhone } from "react-icons/fa6";


function Contact() {


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
      
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>davit.shahbazian@gmail.com</h5>
            <a href="mailto:davit.shahbazian@gmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact-option">
            <FaTelegram className='contact-icon'/>
            <h4>Telegram</h4>
            <h5>David Shahbazyan</h5>
            <a href="https://t.me/shahbazian1" target='_blank'>Send a massage</a>
          </article>
          <article className="contact-option">
            <FaPhone className='contact-icon'/>
            <h4>Call</h4>
            <h5>David Shahbazyan</h5>
            <a href="tel:+37498464843" target='_blank'>Call</a>
          </article>
        </div>

        <form className='contact_form' action='https://formspree.io/f/mwkddwnn' method="POST">
           <input type="text" name='name' placeholder='Your Full Name'  required/>
           <input type="email" name='email' placeholder='Your Emai' required />
           <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact