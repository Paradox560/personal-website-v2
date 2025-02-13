import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about/about';
import Project from './components/projects/project';
import Experience from './components/experience/experience';
import Certificate from './components/certificates/certificates';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="App">
      <title>Pranav Palle - Personal Website Homepage</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="#about"
        >
          Learn about Pranav
        </a>
        <div className="down-arrow" onClick={() => scrollToSection('about')}>
          <i className="bi bi-chevron-down"></i>
        </div>
      </header>
      <section id="about" className="about section">
        <About />
      </section>
      <hr className="uk-divider-icon" />
      <section id="experiences" className="experiences section">
        <Experience />
      </section>
      <hr className="uk-divider-icon" />
      <section id="projects" className="projects section">
        <Project />
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
