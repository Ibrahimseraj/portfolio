import React from 'react';
import './UI.css';
import Navbar from './Navbar/function/Navbar';
import Home from './Home/function/Home';
import About from './About/function/About';
import Skills from './Skills/function/Skills';
import Projects from './Projects/function/projects';
import Contact from './Contact/function/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UI() {
  return (
    <div id='all-con'>
      <div id='con'>
        <section id='UI'>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </section>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UI;