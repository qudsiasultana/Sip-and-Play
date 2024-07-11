document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-link');
  const menuSections = document.querySelectorAll('.menu-section');

  function hideAllSections() {
    menuSections.forEach(section => {
      section.classList.remove('active');
    });
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      hideAllSections();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active');
    });
  });
});

