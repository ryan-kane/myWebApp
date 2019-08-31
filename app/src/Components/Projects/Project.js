import React from 'react';
import './Project.css';

function Project(props){
    let project = props.project;
    return(
        <li>
            {project};
        </li>
    );
}

export default Project;