import React from 'react';
import './Banner.css';

class Banner extends React.Component{

    handleMenuClick = (e) => {
        e.preventDefault();
        let banner_menu = e.target.parentElement.parentElement;
        let current = banner_menu.getElementsByClassName("active");
        if(current.length > 0){
            current[0].classList.toggle('active');
        }
        e.target.parentElement.classList.toggle('active');
    }

    render(){
        return (
            <div className="banner-container">
                <div className="banner"> 
                    <div className="banner-header">
                        <h1 className="banner-title">Ryan Kane</h1>            
                    </div>
                    <div className="banner-body" ref={this.banner_ref}>
                        <ul className="banner-menu-list">
                            <li className="banner-menu-item">
                                <a className="menu-button" href="#projects" onClick={this.handleMenuClick}>
                                    Projects
                                </a>
                            </li>
                            <li className="banner-menu-item">
                                <a className="menu-button" href="#resume" onClick={this.handleMenuClick}>
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;