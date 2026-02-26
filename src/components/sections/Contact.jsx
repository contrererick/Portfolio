import React from 'react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);

    // Pendiente

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-content">
          
          {/* INFO */}
          <div className="contact-info">
            <h3>¿Trabajemos juntos?</h3>
            <p>
              Estoy disponible para nuevos proyectos y colaboraciones.
              No dudes en contactarme a través de cualquiera de estos medios.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:erick.alejandro16@outlook.com">
                    erick.alejandro16@outlook.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:+523312345678">+52 33 1234 5678</a>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Ubicación</h4>
                  <p>Guadalajara, Jalisco, México</p>
                </div>
              </div>

            </div>

            <div className="social-links">
              <a
                href="https://github.com/contrererick"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/erick-alejandro-contreras-salas/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://www.instagram.com/contrererick/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Enviar Mensaje
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
