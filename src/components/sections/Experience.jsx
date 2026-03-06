import React from 'react';

export default function Experience() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const experience = [
        {
            job_title: "Atención a Clientes - Cuentas Corporativas",
            company: "TyT Contact Center",
            img: "https://tytcenter.com/_next/image?url=%2Fimages%2Flogo%2FIcon.png&w=256&q=100",
            start_date: "Enero 2023",
            end_date: "Actualmente",
            description: "Prestación de servicios a diversos distribuidores en todo el país, gestionando consultas y resolviendo problemas para garantizar altos niveles de satisfacción del cliente. Colaboración con diversos equipos para responder rápidamente a solicitudes relacionadas con el servicio y brindar soluciones técnicas. Realización de escalamientos adecuados y derivación de consultas a canales de soporte específicos para asegurar una resolución efectiva de los problemas."
        },
        {
            job_title: "Científico de Datos",
            company: "Herbalife",
            img: "https://www.herbalife.com/dmassets/global-reusable-assets/brandmark-logo/h1-header-logo.png?fmt=webp-alpha",
            start_date: "Diciembre 2021",
            end_date: "Diciembre 2022",
            description: "Creación de algoritmos y desarrollo de código para la automatización de procesos. Automatización de reportes utilizando lenguajes de programación para análisis estadístico. Evaluación, análisis e interpretación de resultados, métricas y grandes volúmenes de datos. Generación de dashboards, gráficos y presentaciones de grandes volúmenes de datos de forma concisa y comprensible."
        },
        {
            job_title: "Instructor de Diseño Gráfico",
            img: "https://imgs.search.brave.com/iiCphnU1yjT_4byKF0hhOOxAjk1oJI9LPAx2ykmsuG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWc3/Ny51ZW5pY2RuLmNv/bS9pbWFnZS91cGxv/YWQvdjE2NTc4MzQ4/OTUvYnVzaW5lc3Mv/YTBmMjUzMzctY2U4/OC00MzcxLTgxYTIt/NDEzOGMyODc3ZTNk/LmpwZw",
            company: "Instituto de Capacitación Lagos",
            start_date: "Noviembre 2022",
            end_date: "Actualmente",
            description: "Creación de plan de estudios para conocer y aprender a utilizar herramientas de diseño gráfico de la suite de Adobe. Impartición de clases y enseñanza de temas relacionados a la disciplina del diseño gráfico."
        },
    ];  

    return (
        <section id="experience" className="experience section">
            <div className="experience-grid">
                <div className="container">
                <h2 className="section-title">Experiencia Laboral</h2>

                    <div className="experience-timeline">
                        {experience.map((experience,index) => (
                            <div
                            key={index}
                            className={`experience-list-item ${selectedIndex === index ? "active" : ""}`}
                                onClick={() => setSelectedIndex(index)}
                            >
                            <div className="experience-item-img">
                                <img src={experience.img}></img>
                            </div>
                            <div className="experience-item-banner">
                                <h3 className="job-title">{experience.job_title}</h3>
                                <p className="job-company">{experience.company}</p>
                                <p className="job-tenure">{experience.start_date} - {experience.end_date}</p>
                                <p className="description">{experience.description}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </section>
    )
}