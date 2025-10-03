document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        // Toggles the 'active' class on the navigation menu
        // This class is used in CSS to show/hide the menu
        navLinks.classList.toggle('active');
    });
});