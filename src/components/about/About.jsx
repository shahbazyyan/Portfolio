import React from 'react';
import './about.css';
import me from '../../assets/me.jpeg';
import { FaAward, FaBookOpen, FaGamepad } from 'react-icons/fa';
import { HiOutlineBriefcase } from "react-icons/hi";


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Profile</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={me} alt="img" />
          </div>
        </div>

        <div className="about-content">
          <div className="about_cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>1 year working in IT Company</small>
            </article>
            <article className='about-card'>
              <FaBookOpen className='about-icon' />
              <h5>Study</h5>
              <small>1+ year Studying</small>
            </article>
            <article className='about-card'>
              <HiOutlineBriefcase className='about-icon' />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
            <article className='about-card'>
              <FaGamepad className='about-icon' />
              <h5>Games</h5>
              <small>10+ Games Created</small>
            </article>
          </div>
          <p> Thanks to my diligence and determination, I've successfully crafted various websites and games that showcase my adeptness in this field. Engaging in programming for approximately a year, my fascination began on day one and has since become an inseparable part of my life—codes and algorithms now feel like second nature to me.
          At this juncture, I'm actively seeking a job opportunity where I can exhibit my finest qualities and foster the continuous growth of my knowledge. I eagerly anticipate and welcome any suggestions that come my way.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About