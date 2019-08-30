import React from 'react';
import './MenuButton.css'

function MenuButton(props){
    return (
        <div className="menu-button-container">
            <a className="menu-button" href="#projects">
                { props.text }
            </a>
        </div>
    );
}

export default MenuButton;