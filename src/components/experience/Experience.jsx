import React from 'react';
import './experience.css';
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { BiLogoTypescript, BiLogoJquery } from "react-icons/bi";
import { FaReact, FaHtml5} from "react-icons/fa";
import { BsFiletypeScss, BsBootstrap } from "react-icons/bs";
import {  SiTailwindcss, SiNpm, SiFastapi, SiWebpack, SiBabel, SiLinux, SiGit, SiGithub } from "react-icons/si";



function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="developer">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <IoLogoJavascript className="details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent js"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BiLogoTypescript className="details-icon"/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent ts"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <FaReact className="details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
                <div className="prcent-div">
                <div className="prcent react"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <FaHtml5 className="details-icon"/>
              <div>
                <h4>HTML 5</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent html"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <IoLogoCss3 className="details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent css"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsFiletypeScss className="details-icon"/>
              <div>
                <h4>SCSS</h4>
                <small className='text-light'>Intermediate</small>
                <div className="prcent-div">
                <div className="prcent scss"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiTailwindcss className="details-icon"/>
              <div>
                <h4>TAILWIND</h4>
                <small className='text-light'>Beginner</small>
                <div className="prcent-div">
                <div className="prcent tailwind"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BiLogoJquery className="details-icon"/>
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>Beginner</small>
                <div className="prcent-div">
                <div className="prcent jquery"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiNpm className="details-icon"/>
              <div>
                <h4>NPM</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent npm"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsBootstrap className="details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
                <div className="prcent-div">
                <div className="prcent bootstrap"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiFastapi className="details-icon"/>
              <div>
                <h4>API's</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent api"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiWebpack className="details-icon"/>
              <div>
                <h4>Webpack</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent webpack"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiGit className="details-icon"/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent git"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiGithub className="details-icon"/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent github"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiBabel className="details-icon"/>
              <div>
                <h4>Babel</h4>
                <small className='text-light'>Experienced</small>
                <div className="prcent-div">
                <div className="prcent babel"></div>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <SiLinux className="details-icon"/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Intermediate</small>
                <div className="prcent-div">
                <div className="prcent linux"></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience