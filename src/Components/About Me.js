import React from 'react'
import "./About Me.css";
import CV from '../assets/CVSambit Kumar Jena.pdf';

const About = () => {
  return (

      <div className='about'>
       
         <div className='aboutsection'>
   
     
          <div className='heading'>
            <h1><span>Ab</span>out</h1>
          </div>
          
          <div className='aboutpara'>
            <p>
            I'm Sambit Kumar Jena, I am a Web Developer,I have done
            Master in Computer Application in Bijupattnayak University Of Technology,
            Odisha.
            </p>
            <p>
            I specialize in efficient in React and CSS &HTML that across all platform
            and browsers,
            I care deeply about the interfaces that i have made for user
            experience.
            </p>
            <p>
            I love to create simple and clean coding using Html with css and
            javascript and frameworks.
            </p>
           <h2>TECHNICAL SKILLS: HTML , CSS ,JavaScript ,REACT JS ,FIGMA ,BOOTSTRAP ,TAILWIND CSS, CANVA ,SQL</h2>
          </div>
          <div className='cv'>
            <a href={CV} className='btn'>Download CV</a>
          </div>
          
          </div> 
          
      </div>


    
  
  )
}
export default About;