import React from 'react';
import './Projects.css';

// import Project from './Project';

class Projects extends React.Component{
    
    Project(props){
        let name = props.name;
        return(
            <li className="project-list-item">
                {name};
            </li>
        );
    }

    render(){
        var projects = this.props.projects;
        var list_projects = "";
        if(projects && projects.length > 0){
            list_projects = projects.map(project => 
                <this.Project key={project.key} name={project.name}/>
            );
        }
    
        return(
            <div className="card projects-card" onScroll={this.do_scroll}>
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