// Smooth scroll on nav link click
document.querySelectorAll('.navbar nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add shadow to navbar on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// "Back to Top" Button creation and functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lazy loading images & Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  // Lazy loading images
  document.querySelectorAll('.project-card img').forEach(img => {
    img.loading = 'lazy';
  });

  const differenceSection = document.querySelector('.difference');
  const keyPointsSection = document.querySelector('.key-points');
  const contactSection = document.querySelector('.contact');
  const contactHeading = document.querySelector('.contact h2');
  const contactParagraph = document.querySelector('.contact p');

  // Throttle function for performance
  let lastScroll = 0;
  function throttledScroll() {
    const now = Date.now();
    if (now - lastScroll < 200) return; // Throttle scroll event (every 200ms)
    lastScroll = now;

    // Reveal Difference section
    if (differenceSection?.getBoundingClientRect().top < window.innerHeight * 0.75) {
      differenceSection.classList.add('visible');
    }

    // Reveal Key Points
    if (keyPointsSection?.getBoundingClientRect().top < window.innerHeight * 0.85) {
      keyPointsSection.classList.add('visible');
    }

    // Animate Contact Section
    if (contactSection?.getBoundingClientRect().top < window.innerHeight * 0.85) {
      contactSection.classList.add('visible');
      contactHeading.classList.add('visible');
      contactParagraph.classList.add('visible');
    }

    // Show/hide Back to Top button
    backToTopBtn.style.opacity = window.scrollY > 300 ? '1' : '0';
  }

  // Initial check & scroll listener
  throttledScroll();
  window.addEventListener('scroll', throttledScroll);
});
