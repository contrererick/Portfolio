import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Skills from './components/sections/Skills'
// import Projects from './components/sections/Projects

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </React.StrictMode>
);