import React from 'react';
import './about.css';
import me from '../../assets/me.jpeg';
import { FaAward, FaUsers } from 'react-icons/fa';
import { HiOutlineBriefcase } from "react-icons/hi";


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={me} alt="img" />
          </div>
        </div>

        <div className="about-content">
          <div className="about_cards">
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>1+ year Years Working</small>
            </article>
            <article className='about-card'>
              <FaUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+</small>
            </article>
            <article className='about-card'>
              <HiOutlineBriefcase className='about-icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis odio consequatur consequuntur voluptate deleniti voluptatibus impedit laboriosam. Amet quisquam saepe commodi, illo reiciendis facere doloremque veniam ab tempore? Nostrum, voluptatem!</p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About