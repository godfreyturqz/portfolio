import React, {useEffect} from 'react'
import './projects.css'
import { projectData } from "./data";
import aos from 'aos'
import 'aos/dist/aos.css'

function Projects() {

    useEffect(()=> {
        aos.init({ duration: 1000})
    }, [])

    return (
        <div>
            <p className="projects-header">Here are some of my works:</p>
            { projectData && projectData.map(project => 
                <div className="project-card" key={project.id} data-aos="fade-up">
                    <div className="project-header" >
                        <h4>
                            <a href={project.link}>{project.title}</a>
                        </h4>
                        <p>{project.description}</p>
                        <p>{project.note}</p>
                        { project.link && 
                            <p>LIVE DEMO: 
                                <a href={project.link}> {project.link}</a>
                            </p>
                        }
                    </div>
                    <a href={project.link}>
                        <img src={project.image} alt="project"/>
                    </a>
                    <div className="project-footer">
                        <p>{project.techStack}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects
