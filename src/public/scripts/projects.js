function projectsCarrousel(projectsList, projectTitle, projectDescription,projectImage) {
    
    const list = document.querySelector(projectsList);
    const title = document.querySelector(projectTitle);
    const description = document.querySelector(projectDescription);
    const image = document.querySelector(projectImage);

    list.addEventListener('click', (e) => {
        const target = e.target.closest('li');
        if (!target || !list.contains(target)) return;
        
        title.textContent = target.textContent;
        description.textContent = target.dataset.description;
        image.src = target.dataset.src;

        list.querySelectorAll('li').forEach(li => li.classList.remove('active'));
        target.classList.add('active');
    });
}

projectsCarrousel('#projects-list', '#project-title', '#project-description', '#project-image');
