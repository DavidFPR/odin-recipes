// Select the hamburger and nav elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add an event listener to toggle the 'active' and 'expanded' classes
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('expanded');
});