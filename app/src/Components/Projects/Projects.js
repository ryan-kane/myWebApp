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
                        <div>{project.name}</div> 
                        <ul className="project-list">
                            <li>
                                <a className="project-link" hrefLang={project.githubLink}>
                                    View on Github
                                </a>
                            </li>
                            <li>{project.description}</li>
                        </ul>
                    </div>
                </li>
            );
        }
    
        return(
            <div className="card projects-card">
                <div className="projects-table">
                    <ul className="project-list">
                        {list_projects}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects;