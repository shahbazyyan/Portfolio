import React from 'react';
import './portfolio.css';
import portfolio from '../../assets/portfolio.jpg';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className='portfolio-container'>
           <div className="portfolio-img">
            <img src={portfolio} alt="img" />
           </div>
           <h3>This is portfolio</h3>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio-container'>
           <div className="portfolio-img">
            <img src={portfolio} alt="img" />
           </div>
           <h3>This is portfolio</h3>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio-container'>
           <div className="portfolio-img">
            <img src={portfolio} alt="img" />
           </div>
           <h3>This is portfolio</h3>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio-container'>
           <div className="portfolio-img">
            <img src={portfolio} alt="img" />
           </div>
           <h3>This is portfolio</h3>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio-container'>
           <div className="portfolio-img">
            <img src={portfolio} alt="img" />
           </div>
           <h3>This is portfolio</h3>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio-container'>
           <div className="portfolio-img">
            <img src={portfolio} alt="img" />
           </div>
           <h3>This is portfolio</h3>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio