document.addEventListener('DOMContentLoaded', function() {

    // --- RESPONSIVE NAVBAR TOGGLE ---
    const menu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    const toggleMenu = () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '80px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(16, 16, 42, 0.95)';
            navMenu.style.padding = '2rem 0';
        }
    };

    if (menu) {
        menu.addEventListener('click', toggleMenu);
    }

    // --- ON-SCROLL ANIMATIONS ---
    const sectionsToAnimate = document.querySelectorAll('.pricing');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate child cards
                const cards = entry.target.querySelectorAll('.glass-card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.2}s`;
                    card.classList.add('fadeInUp');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sectionsToAnimate.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });
});
