import React from 'react';
import './Info.css';
import Store from '../../Store'

function Info(props){
    return(
        <div className="info-container">
            <div className="info-title">{Store.about_me.title}</div>
            <p className="info-paragraph">
                {Store.about_me.paragraph}
            </p>
        </div>
    );
}

export default Info;