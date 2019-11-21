import React from 'react';
import './Info.css';
import Store from '../../Store'

function Info(props){
    return(
        <div className="info-container">
            <div className="info-title">{Store.about_me.title}</div>
            <p className="info-paragraph">
                {Store.about_me.paragraph}
                <br></br>
                <a className="info-title" href={Store.about_me.linkedin}>LinkedIn</a>
            </p>
        </div>
    );
}

export default Info;