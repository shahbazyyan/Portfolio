import React from 'react';
import './header.css';
import Look from './Look';
import me from '../../assets/me-about.png'
import HeadersSM from './HeadersSM';
import ScrollReveal from 'scrollreveal';

function Header() {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 500,
    reset: true
  });

  sr.reveal(".texts", {
    delay: 500,
    origin: 'top',
  });

  return (
    <header>
      <div className="container header-container">
        <div className="texts">
          <h5>Hello I'm</h5>
          <h1>David Shahbazyan</h1>
          <h5 className="text-light">FrontEnd Developer</h5>
        </div>
        <Look />
        <HeadersSM />

        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header