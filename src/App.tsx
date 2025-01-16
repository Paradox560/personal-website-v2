import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about/about';
import Project from './components/projects/project';
import Experience from './components/experience/experience';
import Certificate from './components/certificates/certificates';

function App() {
  return (
    <div className="App">
      <title>Pranav Palle - Personal Website Homepage</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn About Pranav
        </p>
      </header>
      <section id="about" className="about section">
        <About />
      </section>
      <hr className="uk-divider-icon" />
      <section id="projects" className="projects section">
        <Project />
      </section>
      <hr className="uk-divider-icon" />
      <section id="experiences" className="experiences section">
        <Experience />
      </section>
      <hr className="uk-divider-icon" />
      <section id="certificates" className="certificates section">
        <Certificate />
      </section>
      <hr className="uk-divider-icon" />
    </div>
  );
}

export default App;
