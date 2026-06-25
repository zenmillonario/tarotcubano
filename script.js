const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}, 6000);