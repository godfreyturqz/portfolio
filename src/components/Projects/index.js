import React from 'react'
import './styles.css'
import { projectData } from "./data";
import asd from "../images/001/2.png";

function Projects() {
    return (
        <div >
            <p className="projects-header">Here are some of my works:</p>
            {
                projectData.map( project => 
                
                    <div className="project">
                        <div className="project-header">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                        <img src={asd} alt="project"/>
                    </div>
                )
            }
        </div>
    )
}

export default Projects
