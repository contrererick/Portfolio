// ===========================
// Mobile Menu Toggle
// ===========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        if (navToggle) {
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ===========================
// Active Navigation on Scroll
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Header Background on Scroll
// ===========================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ===========================
// Skill Bars Animation
// ===========================
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

const animateSkills = () => {
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
};

const checkSkillsPosition = () => {
    if (!skillsSection || skillsAnimated) return;
    
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > sectionTop - windowHeight + sectionHeight / 2) {
        animateSkills();
        skillsAnimated = true;
    }
};

window.addEventListener('scroll', checkSkillsPosition);
window.addEventListener('load', checkSkillsPosition);

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Here you would typically send the data to a server
        console.log('Form data:', data);
        
        // Show success message
        alert('¡Mensaje enviado! Te contactaré pronto.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===========================
// Smooth Scroll Enhancement
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
const animateOnScroll = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Typing Effect for Hero
// ===========================
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===========================
// Counter Animation for Stats (if needed)
// ===========================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// ===========================
// Copy Year to Footer
// ===========================
const updateYear = () => {
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
};

window.addEventListener('load', updateYear);

// ===========================
// Add Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Prevent Form Resubmission
// ===========================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===========================
// Easter Egg: Konami Code
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s ease';
        setTimeout(() => {
            document.body.style.transform = 'none';
        }, 2000);
        console.log('🎮 ¡Código Konami activado!');
    }
});

console.log('💼 Portfolio cargado correctamente');
console.log('👨‍💻 Desarrollado por Erick Contreras');