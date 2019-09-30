import React from 'react';
import './Projects.css';

// import Project from './Project';

class Projects extends React.Component{

    render(){
        var projects = this.props.projects_obj.projects;
        var list_projects = "";
        if(projects && projects.length > 0){
            list_projects = projects.map((project, index) => 
                <li key={index} className="project-list-item">
                    <div className="project-container">
                        <div className="project-name-container">
                            <h1 className="project-name">{project.name}</h1>
                        </div> 
                        <div className="project-list-container">
                            <ul className="project-list">
                                <li>
                                    <p className="description">
                                        {project.description}
                                    </p>
                                </li>
                                <li>
                                    <div className="project-link-container">
                                        <a className="project-link" href={project.githubLink} rel="noopener noreferrer" target="_blank">
                                            View on Github
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            );
        }
    
        return(
            <div className="card projects-card">
                <div className="projects-table">
                    <ul className="projects-list">
                        {list_projects}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects;