import React from 'react';
import './portfolio.css';
import dataPortfolio from '../../data';



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          dataPortfolio.map(item => {
            return (
              <article key={item.id} className='portfolio-item'>
                <div className="portfolio-img">
                  <img src={item.img} alt="img" />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio-btns">
                  <a href={item.github} className='btn' target='_blank'>Github</a>
                  <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio