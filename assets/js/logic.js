// JAVASCRIPT FOR TOGGLING LIGHT AND DARK MODES

// Select the toggle button element
const modeToggle = document.querySelector('#mode-toggle');

// Select the HTML body element
const body = document.body;

// Define text content for light mode and dark mode
const lightModeTextTitle = {
    greeting: "Good Day",
    // Add additional text content as needed
};

const lightModeText = {
    instruction: "Click the sun to see what happens",
    // Add additional text content as needed
};

const darkModeTextTitle = {
    greeting: "Good Evening",
    // Add additional text content as needed
};

const darkModeText = {
    instruction: "Click the moon to see what happens",
    // Add additional text content as needed
};

// Check if there's a mode stored in local storage
const currentMode = localStorage.getItem('mode');

// If a mode is stored, apply it
if (currentMode) {
    body.classList.add(currentMode);
    // Update text content and toggle image based on the current mode
    if (currentMode === 'light-mode') {
        document.querySelector('.toggle-title').textContent = lightModeTextTitle.greeting;
        document.querySelector('.toggle-text').textContent = lightModeText.instruction;
        modeToggle.src = './assets/images/sun-image.png';
    } else {
        document.querySelector('.toggle-title').textContent = darkModeTextTitle.greeting;
        document.querySelector('.toggle-text').textContent = darkModeText.instruction;
        modeToggle.src = './assets/images/moon-image.png';
    }
}

// Function to toggle between light mode and dark mode
function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        modeToggle.src = './assets/images/sun-image.png';
        document.querySelector('.toggle-title').textContent = lightModeTextTitle.greeting;
        document.querySelector('.toggle-text').textContent = lightModeText.instruction;
        localStorage.setItem('mode', 'light-mode');
    } else {
        // Switch to dark mode
        body.classList.add('dark-mode');
        modeToggle.src = './assets/images/moon-image.png';
        document.querySelector('.toggle-title').textContent = darkModeTextTitle.greeting;
        document.querySelector('.toggle-text').textContent = darkModeText.instruction;
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

// Event listener for mode toggle button
modeToggle.addEventListener('click', toggleMode);
