import React from 'react';
import './Info.css';

function Info(props){
    return(
        <div className="info-container">
            <div className="info-title">About me paragraph.</div>
            <p className="info-paragraph">
                About me paragraph. About me paragraph. About me paragraph.
                <br/> 
                <br/>
                About me paragraph.
                About me paragraph. About me paragraph. About me paragraph. About me paragraph.
                About me paragraph. About me paragraph. About me paragraph. About me paragraph.
            </p>
        </div>
    );
}

export default Info;