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
                        <div className="project-name">{project.name}</div> 
                        <ul className="project-list">
                            <li>
                                <p className="description">
                                    {project.description}
                                </p>
                            </li>
                            <li>
                                <div className="project-link-container">
                                    <a className="project-link" href={project.githubLink} target="_blank">
                                        View on Github
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            );
        }
    
        return(
            <div className="card projects-card">
                <div className="projects-table">
                    <ol className="projects-list">
                        {list_projects}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Projects;