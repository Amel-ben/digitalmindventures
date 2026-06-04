/**
 * DigitalMind Ventures - Main JavaScript
 * Mobile menu toggle functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Close menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('open');
    });
  });

  // Form submission handler
  const contactForm = document.querySelector('.contact-card');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Replace this alert with your actual form handling (CRM, email service, etc.)
      alert('Thank you for your inquiry. We will be in touch shortly.');
      contactForm.reset();
    });
  }
});
