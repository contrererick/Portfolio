import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="nav-brand">
          <a href="#home">EC</a>
        </div>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><a href="#home" className="nav-link">Inicio</a></li>
          <li><a href="#about" className="nav-link">Sobre Mí</a></li>
          <li><a href="#skills" className="nav-link">Habilidades</a></li>
          <li><a href="#projects" className="nav-link">Proyectos</a></li>
          <li><a href="#experience" className="nav-link">Experiencia</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>

      </div>
    </nav>
  );
}
