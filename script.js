// --- 1. Logika Menu Mobile ---
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-menu');
const menuIcon = menuToggle.querySelector('i');

// Buka/Tutup menu saat ikon hamburger diklik
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Ubah ikon dari hamburger (bars) ke silang (times)
    if(navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

// Tutup menu otomatis saat salah satu link diklik (Penting di HP)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    });
});


// --- 2. Navigasi Smooth Scrolling ---
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        if(sectionId !== "#") {
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// --- 3. Efek Muncul Saat Scroll (Scroll Reveal) ---
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
    section.classList.add('fade-in'); // Pastikan CSS .fade-in sudah ada
    observer.observe(section);
});
