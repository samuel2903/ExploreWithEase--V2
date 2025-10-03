document.addEventListener('DOMContentLoaded', () => {
    // Select the elements for the mobile menu toggle and the navigation links
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.main-nav');

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', () => {
        // Toggles the 'active' class on the navigation menu
        // This class is used in CSS to show/hide the menu
        navLinks.classList.toggle('active');
    });
});