import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about/about';
import Project from './components/projects/project';
import Experience from './components/experience/experience';
import Certificate from './components/certificates/certificates';
import Navbar from './components/navbar'; // Import Navbar
import Typed from 'typed.js';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
    });

    const typedElement = document.querySelector('.typed');
    const options = {
        strings: typedElement?.getAttribute('data-typed-items')?.split(',') || [],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
    };

    new Typed('.typed', options);
  }, []);
  
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Navbar /> {/* Add Navbar */}
      <section id="hero" className="hero section light-background">

      <img src="naturebg.png" alt="" />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Pranav Palle</h2>
            <p>I'm a <span className="typed" data-typed-items="Developer, Designer, Problem Solver, Data Analyst">Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            <br />
          </div>
        </div>
      </div>

    </section>
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
