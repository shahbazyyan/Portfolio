import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaTelegram, FaPhone } from "react-icons/fa6";


function Contact() {

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    setTimeout(() => {

      formRef.current.reset();
    }, 500)
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className='contact-icon' />
            <h4>Email</h4>
            <h5>shahbazyan.work@gmail.com</h5>
            <a href="mailto:shahbazyan.work@gmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact-option">
            <FaTelegram className='contact-icon' />
            <h4>Telegram</h4>
            <h5>David Shahbazyan</h5>
            <a href="https://t.me/shahbazian1" target='_blank'>Send a massage</a>
          </article>
          <article className="contact-option">
            <FaPhone className='contact-icon' />
            <h4>Call</h4>
            <h5>David Shahbazyan</h5>
            <a href="tel:+37498464843" target='_blank'>Call</a>
          </article>
        </div>

        <form action='https://formspree.io/f/xayrweeb' method="POST" onSubmit={handleSubmit} ref={formRef}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Emai' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
      <a href="#header" className='scroll-up'>Scroll Up</a>
    </section>
  )
}

export default Contact
