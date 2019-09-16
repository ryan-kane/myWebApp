import React from 'react';

import './App.css';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Info from './Components/Info/Info';
import Store from './Store';

class App extends React.Component {

  constructor(props){
    super(props);
    this.info_toggle = this.info_toggle.bind(this);
    this.page_switch = this.page_switch.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
      let items = document.getElementsByClassName('title');
      for(let i = 0; i < items.length; i++){
        items[i].classList.remove('hide');
      }
    }, 500);
    this.page_switch(false);
  }

  get_projects(){
    return Store; 
  }

  info_toggle(e){
    document.getElementsByClassName('info-container')[0].classList.toggle('active');
    document.getElementsByClassName('parallax-back')[0].classList.toggle('shift-right');
    let titles = document.getElementsByClassName('title-parallax');
    for(let i = 0; i < titles.length; i++){
      titles[i].classList.toggle('shift-right');
    }
    // name_title = document.getElementsByClassName('name-title')[0].getElementsByClassName('title-button')[0].innerHTML;
  }

  page_switch(e){
    let banner_menu = document.body.getElementsByClassName('banner')[0];
    let current = banner_menu.getElementsByClassName("active");

    if(current.length > 0){
        current[0].classList.toggle('active');
    }
    var loc = window.location.hash;
    if(e){
      loc = e.target.href.split("/")[e.target.href.split("/").length - 1]; 
    }
    console.log(loc)
    let app_wrapper = document.getElementsByClassName('app-wrapper')[0];
    let projects_card = document.getElementsByClassName("projects-card")[0];
    let content_wrapper = document.getElementsByClassName("content-wrapper")[0];
    let resume_card = document.getElementsByClassName("resume-card")[0];
    let items = [];

    if (!loc || loc === "#home"){
      // move to title page
      if(e && e.target.className === "title-button"){
        this.info_toggle(e);
      }
      items = document.getElementsByClassName("home");
      for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('active');
      }
      app_wrapper.scrollTop = 0;
      this.hideBanner();
      return
    }else if(loc === "#projects" ){
      // move to project card
      items = document.getElementsByClassName("projects");
      for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('active');
      }
      app_wrapper.scrollTop = content_wrapper.offsetTop;
      content_wrapper.scrollLeft = projects_card.offsetLeft;
      setTimeout(this.showBanner, 1000);
    }else if(loc === "#resume"){
      // move to resume card
      items = document.getElementsByClassName("resume");
      for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('active');
      }
      app_wrapper.scrollTop = content_wrapper.offsetTop;
      content_wrapper.scrollLeft = resume_card.offsetLeft;
      window.setTimeout(this.showBanner, 1000);
    }
  }

  showBanner(){
    let banner_container = document.body.getElementsByClassName('banner-container')[0];
    banner_container.classList.add('show-banner');
  }

  hideBanner(){
    let banner_container = document.body.getElementsByClassName('banner-container')[0];
    banner_container.classList.remove('show-banner');
  }

  render(){

    let projects_obj = this.get_projects();

    function Title(props){
      return (
        <div className={props.titleClass}>
          <div className="title hide">
            <a className="title-button" href={props.titleHref} onClick={props.onClick}>
              {props.titleText}
            </a>           
          </div>
        </div>
      );
    }

    return(
      <div className="App">
        <div className="app-wrapper" name="app-wrapper">
          <div className="parallax-back" name="parallax-back"></div>
          <Title titleText="Ryan Kane" titleClass="name-title title-parallax" titleHref="#home" onClick={this.info_toggle}/>
          <Title titleText="Resume" titleClass="resume-title title-parallax" titleHref="#resume" onClick={this.page_switch}/>
          <Title titleText="Projects" titleClass="projects-title title-parallax" titleHref="#projects" onClick={this.page_switch}/>
          <Info/>
          <Banner pageSwitch={this.page_switch}/>
          <div className="content-wrapper">
            <div className="content-container">
              <Resume className="resume"/>
              <Projects className="projects" projects_obj={projects_obj}/>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
