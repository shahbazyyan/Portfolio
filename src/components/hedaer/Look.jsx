import React from 'react';
import CV from '../../assets/David Shahbazyan.pdf';

function Look() {
  return (
    <div className='look'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
        
    </div>
  )
}

export default Look