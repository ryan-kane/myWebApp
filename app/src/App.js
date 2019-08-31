import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

function App() {

  let projects = ['Website', 'Project1'];

  return (
    <div className="App">
      <Banner />
      <div className="content">
        <Projects projects={projects}/>
        <Resume />
      </div>
    </div>
  );
}

export default App;
