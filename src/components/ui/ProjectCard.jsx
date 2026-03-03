import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <div className="project-overlay">
          <a href={project.live} className="project-link">
            <i className="fas fa-external-link-alt"></i>
          </a>
          <a href={project.github} className="project-link">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p>{project.description}</p>
      </div>

    </div>
  );
}