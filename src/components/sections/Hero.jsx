import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        
        <div className="hero-text">
          <p className="hero-greeting">Hola, soy</p>
          
          <h1 className="hero-name">Erick Contreras</h1>
          
          <h2 className="hero-title">Desarrollador Full Stack</h2>
          
          <p className="hero-description">
            Creando experiencias web innovadoras y soluciones tecnológicas
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <img
              src="/public/images/profile-photo-eacs.jpeg"
              alt="Erick Contreras"
              className="profile-img"
            />
          </div>
        </div>

      </div>

      <div className="scroll-down">
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}