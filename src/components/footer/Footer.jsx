import React from 'react';
import './footer.css';
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <footer class="footer">
    <div class="container footer_container">
       <div class="footer_1">
         <a href="#" class="footer_logo"><h4>David</h4></a>
         <p>Thank you for visiting my portfolio! I hope you've enjoyed exploring my work. I'm always eager to take on new projects and collaborate. If you're interested in working together or have any opportunities available, I'd love to hear from you. Feel free to reach out!</p>
       </div>

       <div class="footer_2">
           <h4>Pages</h4>
           <ul class="permalinks">
               <li><a href="#">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#experience">Experience</a></li>
               <li><a href="#portfolio">Portfolio</a></li>
           </ul>
       </div>

       <div class="footer_3">
           <h4>Take a Look</h4>
           <ul class="primacy">
               <li><a href="#">View Certificate</a></li>
               <li><a href="#">Download CV</a></li>
               <li><a href="#contact">Ask a Question</a></li>
           </ul>
       </div>

       <div class="footer_4">
           <h4>Contact Me</h4>
           <div>
               <p>+37498464843</p>
               <p>+37441960037</p>
               <p>davit.shahbazyan.m@gmail.com</p>
           </div>
           <ul class="footer_sm">
               <a href='https://github.com/shahbazyyan' target='_blank'><AiFillGithub/></a>
               <a href='https://www.linkedin.com/in/david-shahbazyan-82834226b/' target='_blank'><AiFillLinkedin/></a>
               <a href='https://www.facebook.com/gooodmannn' target='_blank'><AiFillFacebook/></a>
           </ul>
       </div>
    </div>
    <div class="footer_copyrights">
       <small>Copyright &copy; My Personal Portfolio Website</small>
   </div>  
</footer>
  )
}

export default Footer