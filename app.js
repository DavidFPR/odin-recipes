// Select the hamburger and nav elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Function to handle orientation changes
function handleOrientationChange() {
    // Collapse the menu if in landscape mode or if the menu is open on wider screens
    if (window.innerWidth > 768 && nav.classList.contains('expanded')) {
        hamburger.classList.remove('active');
        nav.classList.remove('expanded');
    }
}

// Add an event listener to toggle the 'active' and 'expanded' classes
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('expanded');
});

// Add an event listener for window resize to handle orientation changes
window.addEventListener('resize', handleOrientationChange);

// Call handleOrientationChange initially to ensure the correct state on page load
handleOrientationChange();
