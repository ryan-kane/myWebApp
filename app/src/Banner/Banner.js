import React from 'react';
import './Banner.css';

import MenuButton from '../MenuButton/MenuButton'

function Banner(){
    return (
        <div className="stretch-banner">
            <span className="banner-header">Ryan Kane</span>
            <nav className="menu">
                <ul className="h-menu">
                    <li><MenuButton text="Projects"/></li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner;