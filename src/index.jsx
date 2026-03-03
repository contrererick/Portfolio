import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);