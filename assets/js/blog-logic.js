// JAVASCRIPT FOR TOGGLING LIGHT AND DARK MODES ON BLOG PAGE SPECIFICALLY

// Select the toggle button element
const modeToggle = document.querySelector('#mode-toggle');
const logoImage = document.querySelector('#mode-toggle-logo');

// Select the HTML body element
const body = document.body;

// Check if there's a mode stored in local storage
const currentMode = localStorage.getItem('mode');

// If a mode is stored, apply it
if (currentMode) {
    body.classList.add(currentMode);
    // Update text content and toggle image based on the current mode
    if (currentMode === 'light-mode') {
        updateLogoImage('light-mode'); // Update the logo image for light mode
    } else {
        updateLogoImage('dark-mode'); // Update the logo image for dark mode
    }
}

// Function to toggle between light mode and dark mode
function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        updateLogoImage('light-mode'); // Update the logo image for light mode
        localStorage.setItem('mode', 'light-mode');
    } else {
        // Switch to dark mode
        body.classList.add('dark-mode');
        updateLogoImage('dark-mode'); // Update the logo image for dark mode
        localStorage.setItem('mode', 'dark-mode');
    }
    
    // Update styles based on the current mode
    updateStyles(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
}

// Function to update styles based on the current mode
function updateStyles(mode) {
    const headerLinks = document.querySelectorAll('header a');
    const navLinks = document.querySelectorAll('nav a');

    if (mode === 'light-mode') {
        headerLinks.forEach(link => link.style.color = '#000'); // Light mode color
        navLinks.forEach(link => link.style.color = '#000'); // Light mode color
    } else {
        headerLinks.forEach(link => link.style.color = '#fff'); // Dark mode color
        navLinks.forEach(link => link.style.color = '#fff'); // Dark mode color
    }
}

// Function to update the logo image based on the current mode
function updateLogoImage(mode) {
    if (mode === 'light-mode') {
        logoImage.src = './assets/images/ThinkWell-blog-logo-original.png';
    } else {
        logoImage.src = './assets/images/ThinkWell-blog-logo-alternate.png';
    }
}

// Event listener for mode toggle button
modeToggle.addEventListener('click', toggleMode);
