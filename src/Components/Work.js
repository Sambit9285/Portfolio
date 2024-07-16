import React from 'react'
import "./Work.css";
import Workdata from './Workdata';
import Workcard from "./Workcard";

const Work = () => {
  
  return (
    <div>
      <div className='Projects'>
        <div className='Projectsection'>
          <div className='Heading'>
            <h1><span>Proj</span>ects</h1>
          </div>
          <div className='project-container'>
        {Workdata.map((val, ind)=>{
          return(
            <Workcard keys={ind}
                      img={val.img}
                      title={val.title}
                      text={val.text}
                      github={val.github}
                      link={val.link}/>
          );
        }
        )}
      </div>
      
      </div>
    </div>
    </div>
  )
}

export default Work;