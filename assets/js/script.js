// Toggle Navigation for Mobile View
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-bar').classList.toggle('active');
});

// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
