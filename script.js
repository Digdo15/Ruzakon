// Navigasi Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Efek Muncul Saat Scroll (Scroll Reveal)
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Sederhana Mobile Toggle (Placeholder)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    alert('Menu mobile akan terbuka di sini!');
});