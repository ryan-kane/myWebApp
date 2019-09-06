import React from 'react';
import './Project.css';

function Project(props){
    let name = props.name;
    return(
        <li className="project-list-item">
            {name};
        </li>
    );
}

export default Project;