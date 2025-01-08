import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about/about';
import Project from './components/projects/project';
import Experience from './components/experience/experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section id="about" className="about section">
        <About />
      </section>
      <section id="projects" className="projects section">
        <Project />
      </section>
      <section id="experiences" className="experiences section">
        <Experience />
      </section>
    </div>
  );
}

export default App;
