import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Info from './Components/Info/Info';

import ProjectStore from './ProjectStore';

function App() {

  function get_projects(){
    return ProjectStore; 
  }

  function page_switch(e){
    info_toggle(e);
    let banner_menu = document.body.getElementsByClassName('banner')[0];
    let current = banner_menu.getElementsByClassName("active");
    if(current.length > 0){
        current[0].classList.toggle('active');
    }
    var loc = e.target.href.split("/")[e.target.href.split("/").length - 1];
    let app_wrapper = document.getElementsByClassName('app-wrapper')[0];
    let projects_card = document.getElementsByClassName("projects-card")[0];
    let content_wrapper = document.getElementsByClassName("content-wrapper")[0];
    let resume_card = document.getElementsByClassName("resume-card")[0];
    let items = [];
    if (!loc || loc === "#home"){
      // move to title page
      items = document.getElementsByClassName("home");
      for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('active');
      }
      app_wrapper.scrollTop = 0;
      return
    }else if(loc === "#projects" ){
      info_toggle(e);
      // move to project card
      items = document.getElementsByClassName("projects");
      for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('active');
      }
      app_wrapper.scrollTop = content_wrapper.offsetTop;
      content_wrapper.scrollLeft = projects_card.offsetLeft;
      console.log(app_wrapper.scrollTop);
    }else if(loc === "#resume"){
      info_toggle(e);
      // move to resume card
      items = document.getElementsByClassName("resume");
      for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('active');
      }
      console.log("move to resume");
      app_wrapper.scrollTop = content_wrapper.offsetTop;
      content_wrapper.scrollLeft = resume_card.offsetLeft;
    }
  }

  function info_toggle(e){
    document.getElementsByClassName('info-container')[0].classList.toggle('active');
    document.getElementsByClassName('parallax-back')[0].classList.toggle('shift-right');
    let titles = document.getElementsByClassName('title-parallax');
    for(let i = 0; i < titles.length; i++){
      titles[i].classList.toggle('shift-right');
    }
    // name_title = document.getElementsByClassName('name-title')[0].getElementsByClassName('title-button')[0].innerHTML;
  }

  function Title(props){
    return (
      <div className={props.titleClass}>
        <div className="title">
          <a className="title-button" href={props.titleHref} onClick={props.onClick}>{props.titleText}</a>
        </div>
      </div>
    );
  }

  let projects_obj = get_projects();

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:300,400,700" rel="stylesheet"/>
      <div className="app-wrapper">
        <div className="parallax-back"></div>
        <Title titleText="Ryan Kane" titleClass="name-title title-parallax" titleHref="#home" onClick={info_toggle}/>
        <Title titleText="Projects" titleClass="projects-title title-parallax" titleHref="#projects" onClick={page_switch}/>
        <Title titleText="Resume" titleClass="resume-title title-parallax" titleHref="#resume" onClick={page_switch}/>
        <Info/>
        <Banner  pageSwitch={page_switch}/>
        <div className="content-wrapper">
          <div className="content-container">
            <Projects className="projects" projects_obj={projects_obj}/>
            <Resume className="resume"/>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
