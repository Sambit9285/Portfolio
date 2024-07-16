import React from 'react'
import "./Work.css";

const Workcard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.img} alt='project-img'/>
        <h2 className='project-title'>{props.title}</h2>
        <div className='project-details'>
            <p>{props.text}</p>
            <div className='project-btn'>
                <a href={props.github} className='btn btn-light' target='_blank' rel="noreferrer">Github</a>
                <a href={props.link} className=' btn ' target='_blank' rel="noreferrer">Demo</a>
            </div>
        </div>
    </div>
  )
}

export default Workcard