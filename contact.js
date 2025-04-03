const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Optional: Add send animation or API call here
  alert('Thank you for contacting us! We will get back to you soon.');

  // Reset form
  contactForm.reset();
});
