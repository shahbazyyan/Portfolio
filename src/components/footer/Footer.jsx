import React from 'react';
import './footer.css';
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import CV from '../../assets/David Shahbazyan CV.pdf';


function Footer() {
  return (
    <footer>
    <div className="container footer_container">

       <div className="footer_1">
         <a href="#" className="footer_logo"><h4>David</h4></a>
         <p>Thank you for visiting my portfolio! I hope you've enjoyed exploring my work. I always eager to take on new projects and collaborate. If you're interested in working together or have any opportunities available, I'd love to hear from you. Feel free to reach out!</p>
       </div>

       <div className="footer_2">
           <h4>Pages</h4>
           <ul className="permalinks">
               <li><a href="#">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#experience">Experience</a></li>
               <li><a href="#portfolio">Portfolio</a></li>
           </ul>
       </div>

       <div className="footer_3">
           <h4>Take a Look</h4>
           <ul className="primacy">
               <li><a download href={CV}>Download CV</a></li>
               <li><a href="#contact">Ask a Question</a></li>
           </ul>
       </div>

       <div className="footer_4">
           <h4>Contact Me</h4>
           <div>
               <p>+37498464843</p>
               <p>+37441960037</p>
               <p>shahbazyan.work@gmail.com</p>
           </div>
           <ul className="footer_sm">
               <a href='https://github.com/shahbazyyan' target='_blank'><AiFillGithub/></a>
               <a href='https://www.linkedin.com/in/david-shahbazyan-82834226b/' target='_blank'><AiFillLinkedin/></a>
               <a href='https://www.facebook.com/gooodmannn' target='_blank'><AiFillFacebook/></a>
           </ul>
       </div>
    </div>
    <div className="footer_copyrights">
       <small>Copyright &copy; My Personal Portfolio Website</small>
   </div>  
</footer>
  )
}

export default Footer
