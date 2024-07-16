import React from 'react'
import "./Footer.css";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
         
            <ul className='links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Hire Me</Link></li>
            </ul>
            <div className='social-links'>
                <a href='https://github.com/Sambit9285' target='_blank' rel='noreferrer'><FaGithub/></a>
                <a href='https://www.linkedin.com/in/sambit-kumar-jena-556b5b1a3/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
                <a href='https://x.com/SambitK70208756' target='_blank' rel='noreferrer'><FaTwitter/></a>
            </div>
        </div>
    )
}

export default Footer