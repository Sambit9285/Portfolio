
import "./Heromain.css";
import React from 'react';
import Heroimg from "../assets/Background.jpg";
import { Link } from "react-router-dom";

const Heromain = () => {
    return (
        <div className="hero">
            <div className="Herosection">
                <img className="Heroimg" src={Heroimg} alt="Heroimg" />
            </div>
            <div className="content">
                <p>Hi, I am Sambit</p>
                <h1>Web Developer</h1>
                <div>
                    <Link to="/Projects" className="btn">Projects</Link>
                    <Link to="/Contact" className="btn btn-light">Contact</Link>
                </div>

            </div>
        </div>
    )
}

export default Heromain;
