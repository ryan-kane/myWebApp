import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

function App() {

  function get_projects(){
    return [
      // {
      //   name: 'Website',
      //   key: '1'
      // },
      // {
      //   name: 'Project1',
      //   key: '2'
      // }
    ];
  }

  function page_switch(e){
    
    let banner_menu = document.body.getElementsByClassName('banner')[0];
    let current = banner_menu.getElementsByClassName("active");
    if(current.length > 0){
        current[0].classList.toggle('active');
    }
    e.target.classList.toggle('active');
    var loc = e.target.href.split("/")[e.target.href.split("/").length - 1];

    let app_wrapper = document.getElementsByClassName('app-wrapper')[0];
    let projects_card = document.getElementsByClassName("projects-card")[0];
    let content_wrapper = document.getElementsByClassName("content-wrapper")[0];
    let resume_card = document.getElementsByClassName("resume-card")[0];
    if (!loc || loc === "#home"){
      // move to title page
      app_wrapper.scrollTop = 0;
      return
    }else if(loc === "#projects" ){
      // move to project card
      app_wrapper.scrollTop = content_wrapper.offsetTop;
      content_wrapper.scrollLeft = projects_card.offsetLeft;
      console.log(app_wrapper.scrollTop);
    }else if(loc === "#resume"){
      // move to resume card
      console.log("move to resume");
      app_wrapper.scrollTop = content_wrapper.offsetTop;
      content_wrapper.scrollLeft = resume_card.offsetLeft;
    }
  }

  let projects = get_projects();

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="parallax-back"></div>
        {/* <div className="title-container"> */}
          <h1 className="name-title title"><a href="#home" onClick={page_switch}>Ryan Kane</a></h1>
          <h3 className="projects-title title"><a href="#projects" onClick={page_switch}>Projects</a></h3>
          <h3 className="resume-title title"><a href="#resume" onClick={page_switch}>Resume</a></h3>
        {/* </div> */}
        <Banner  pageSwitch={page_switch}/>
        <div className="content-wrapper">
          <div className="content-container">
            <Projects className="projects" projects={projects}/>
            <Resume className="resume"/>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
