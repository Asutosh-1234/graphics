const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Optional: stop observing once shown
      }
    });
  }, { threshold: 0.2 });
  
  // Target all elements that need to animate on scroll
  const targets = document.querySelectorAll('.about-page h1, .about-page h2, .about-page p, .about-page li');
  
  // Observe each target element
  targets.forEach(element => observer.observe(element));