import React from 'react';
import './Banner.css';

class Banner extends React.Component{

    handleMenuClick = (e) => {
        // e.preventDefault();
        this.props.pageSwitch(e);
    }

    render(){
        return (
            <div className="banner-container">
                <div className="banner"> 
                    <div className="banner-header">
                        <h1 className="banner-title">
                            <a className="menu-button" href="#home" onClick={this.handleMenuClick}>Ryan Kane</a>
                        </h1>            
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
                                    Resume
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