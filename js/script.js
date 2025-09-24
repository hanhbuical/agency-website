document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-element');
        observer.observe(section);
    });

    // Also observe the hero section, though it's not a 'content-section'
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.classList.add('fade-in-element');
        
        // Use a slight delay for the hero to ensure it animates in on load
        setTimeout(() => {
            heroSection.classList.add('visible');
        }, 100);
    }
});
