document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(10, 11, 13, 0.85)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.background = 'rgba(10, 11, 13, 0.4)';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));

    console.log('Pointnod Website - Operational');
});
