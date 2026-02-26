import React from 'react';
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con pasarela de pagos y panel de administración.",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      image: "/images/project2.jpg",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      live: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard interactivo del clima con visualización de datos y pronósticos detallados.",
      image: "/images/project3.jpg",
      tags: ["JavaScript", "API", "Chart.js"],
      live: "#",
      github: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Panel de control para gestión de redes sociales con análisis y programación de contenido.",
      image: "/images/project4.jpg",
      tags: ["React", "GraphQL", "PostgreSQL"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}