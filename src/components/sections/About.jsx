import React from 'react'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-content">
          
          <div className="about-image">
            <img
              src="/public/images/profile-photo-eacs.jpeg"
              alt="Erick Contreras"
              className="profile-img"
            />
          </div>

          <div className="about-text">
            
            <h3>Desarrollador apasionado por la tecnología</h3>

            <p>
              Con experiencia en el desarrollo de aplicaciones web modernas,
              me especializo en crear soluciones eficientes y escalables.
              Mi enfoque se centra en escribir código limpio, mantener las
              mejores prácticas y estar siempre actualizado con las últimas tecnologías.
            </p>

            <p>
              Me apasiona resolver problemas complejos y transformar ideas en
              productos digitales funcionales que mejoren la experiencia del usuario.
            </p>

            <div className="about-info">

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Guadalajara, Jalisco, México</span>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>erick.alejandro16@outlook.com</span>
              </div>

              <div className="info-item">
                <i className="fas fa-graduation-cap"></i>
                <div className="about-text-description">
                  <span>Ingeniería en Desarrollo de Software</span>
                  <p>ITESO (Agosto 2024 - Actualidad)</p>
                </div>
              </div>

            </div>

            <a
              href="/cv/CV_Erick_Contreras.pdf"
              download
              className="btn btn-primary"
            >
              <i className="fas fa-download"></i> Descargar CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}