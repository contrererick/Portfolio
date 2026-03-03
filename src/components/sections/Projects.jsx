import React from 'react';
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const projects = [
    {
      title: "API para TheMovieDB",
      description: "Una aplicación de búsqueda de películas con Node.js y JavaScript, impulsada por la API de The Movie Database (TMDB). Este proyecto demuestra el uso de un proxy en el backend para el consumo de APIs.",
      image: "/public/images/api-themoviedb-img-1.png",
      tags: ["Javascript", "Node.js", "HTML", "CSS"],
      live: "#",
      github: "#",
    },
    {
      title: "Validador de Reportes de Sangre",
      description: "Un analizador léxico y sintáctico para reportes de laboratorio médico, específicamente diseñado para analizar y validar reportes de Biometría Hemática (CBC) / Hematología en formato JSON. Este proyecto implementa el front-end de un compilador utilizando PLY (Python Lex-Yacc) para analizar datos estructurados de laboratorio médico. Realiza tanto análisis léxico (tokenización) como análisis sintáctico (parsing) para validar la estructura y el contenido de reportes de hematología.",
      image: "/public/images/blood-report-validator-img-1.jpg",
      tags: ["Python"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>

        <div className="projects-grid">
          <div className="projects-list-column">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`projects-list-item ${selectedIndex === index ? "active" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                <h3>{project.title}</h3>
              </div>
            ))}
          </div>

          <div className="projects-cards-column">
            <ProjectCard project={projects[selectedIndex]} />
          </div>
        </div>

      </div>
    </section>
  );
}