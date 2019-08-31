import React from 'react';
import './Projects.css';

import Project from './Project';

function Projects(props){
    const projects = props.projects;
    const list_projects = projects.map((project) => 
        <Project key={project} project={project}/>
    );
    return(
        <div className="project-list-container">
            <ul className="project-list">
                {list_projects}
            </ul>
        </div>
    );
}

export default Projects;