function toggleDarkMode() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');
    const section = document.querySelector('section');
    const form = document.querySelector('form');
    const label = document.querySelectorAll('label');
    const sub = document.querySelector('.sub');
    const toggleBtn = document.querySelector('.toggle-btn');
    const toggleIcon = document.querySelector('.toggle-icon');
    const toggleText = document.querySelector('.toggle-text');
  
    // Toggle dark mode class on body element
    body.classList.toggle('dark-mode');
  
    // Toggle dark mode class on other elements
    header.classList.toggle('dark-mode');
    ul.classList.toggle('dark-mode');
    li.forEach(item => item.classList.toggle('dark-mode'));
    section.classList.toggle('dark-mode');
    form.classList.toggle('dark-mode');
    label.forEach(item => item.classList.toggle('dark-mode'));
    sub.classList.toggle('dark-mode');
  
    // Toggle icon and text for button
    toggleIcon.classList.toggle('fa-sun');
    toggleIcon.classList.toggle('fa-moon');
    toggleText.textContent = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
  
    // Save preferred mode to local storage
    localStorage.setItem('preferredMode', body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  
  // Load preferred mode from local storage on page load
  window.onload = function() {
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode === 'dark') {
      toggleDarkMode();
    }
  }