import React from 'react';

export default function Experience() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const experience = [
        {
            job_title: "Customer Service - Corporate Accounts",
            company: "TyT Contact Center",
            img: "https://tytcenter.com/_next/image?url=%2Fimages%2Flogo%2FIcon.png&w=256&q=100",
            start_date: "January 2023",
            end_date: "Currently",
            description: "Provided customer support services for various distributors across the country, managing inquiries and solving problems to ensure high levels of client satisfaction. Collaborated with multiple teams to promptly respond to service-related requests and provide technical solutions. Performed appropriate escalations and routed inquiries to specialized support channels to ensure effective problem resolution."
        },
        {
            job_title: "Data Scientist",
            company: "Herbalife",
            img: "https://www.herbalife.com/dmassets/global-reusable-assets/brandmark-logo/h1-header-logo.png?fmt=webp-alpha",
            start_date: "December 2021",
            end_date: "Decembrer 2022",
            description: "Designed algorithms and developed code to automate processes. Automated reports using programming languages for statistical analysis. Evaluated, analyzed, and interpreted results, metrics, and large datasets. Created dashboards, charts, and concise presentations for large volumes of data."
        },
        {
            job_title: "Graphic Design Instructor",
            img: "https://imgs.search.brave.com/iiCphnU1yjT_4byKF0hhOOxAjk1oJI9LPAx2ykmsuG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWc3/Ny51ZW5pY2RuLmNv/bS9pbWFnZS91cGxv/YWQvdjE2NTc4MzQ4/OTUvYnVzaW5lc3Mv/YTBmMjUzMzctY2U4/OC00MzcxLTgxYTIt/NDEzOGMyODc3ZTNk/LmpwZw",
            company: "Instituto de Capacitación Lagos",
            start_date: "Novembre 2022",
            end_date: "Currently",
            description: "Developed curriculum for learning and applying Adobe Creative Suite graphic design tools. Taught and explained topics related to the field of graphic design."
        },
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Experiencia Laboral</h2>

                <div className="experience-timeline">
                    {experience.map((experience,index) => (
                        <div
                            key={index}
                            className={`experience-list-item ${selectedIndex === index ? "active" : ""}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                        <img src={experience.img}></img>
                        <h4>{experience.job_title}</h4>
                        <p className="job-company">{experience.company}</p>
                        <p className="job-tenure">{experience.start_date} - {experience.end_date}</p>
                        <p className="description">{experience.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}