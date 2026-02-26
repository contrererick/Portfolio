import React from 'react'

export default function Skills() {
  const skillsData = [
    {
      category: "Lenguajes",
      icon: "fas fa-solid fa-code",
      skills: [
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
    },
    {
      category: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ],
    },
    {
      category: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", logo: "https://imgs.search.brave.com/bntF6Zso0YzhcVWJvRYhdd-WOiWyaTdcRO_p_ME8GzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9mYXN0YXBpLTEu/c3Zn" },
      ],
    },
    {
      category: "Herramientas",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/github_badge.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      ],
    },
    {
      category: "Bases de Datos",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      category: "Cloud",
      icon: "fas fa-solid fa-cloud",
      skills: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title-white">Habilidades</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              
              <div className='skills-desciption'>
                <h3>
                  <i className={category.icon}></i> {category.category}
                </h3>
                <div className="skills-tags">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div className="carousel-wrapper">
                <div className="carousel-track">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="carousel-item">
                      <img src={skill.logo} alt={skill.name} title={skill.name} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}