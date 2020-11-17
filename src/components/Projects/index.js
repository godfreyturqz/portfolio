import React, {useEffect} from 'react'
import './styles.css'
import { projectData } from "./data";
import aos from 'aos'
import 'aos/dist/aos.css'

function Projects() {
    useEffect(()=> {
        aos.init({ duration: 1000})
    }, [])
    return (
        <div >
            <p className="projects-header">Here are some of my works:</p>
            {
                projectData.map( project => 
                
                    <div className="project" key={project.id} data-aos="fade-left">
                        <div className="project-header" >
                            <h4 ><a href={project.link}>{project.title}</a></h4>
                            <p>{project.description}</p>
                            <p>{project.note}</p>
                            <p>
                                LIVE DEMO: 
                                <a href={project.link}> {project.link}</a>
                            </p>
                        </div>
                        <a href={project.link}>
                            <img src={project.image} alt="project"/>
                        </a>
                        <div className="project-footer">
                            <p>{project.techStack}</p>
                        </div>
                        
                    </div>
                )
            }
        </div>
    )
}

export default Projects
