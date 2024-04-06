// Select the toggle button element
// const modeToggle = document.querySelector('#mode-toggle');

// Select the HTML body element
// const body = document.body;

// Check if there's a mode stored in local storage
// const currentMode = localStorage.getItem('mode');

// If a mode is stored, apply it
// if (currentMode) {
//     body.classList.add(currentMode);
// }

// Function to toggle between light mode and dark mode
// function toggleMode() {
//     if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
//         modeToggle.src = './assets/images/sun-image.png';
//         localStorage.setItem('mode', 'light-mode');
//     } else {
//         body.classList.add('dark-mode');
//         modeToggle.src = './assets/images/moon-image.png';
//         localStorage.setItem('mode', 'dark-mode');
//     }
// }

// Event listener for mode toggle button
// modeToggle.addEventListener('click', toggleMode);

// Select the toggle button element
const modeToggle = document.querySelector('#mode-toggle');

// Select the HTML body element
const body = document.body;

// Define text content for light mode and dark mode
const lightModeText = {
    greeting: "Good Day",
    // Add additional text content as needed
};

const darkModeText = {
    greeting: "Good Evening",
    // Add additional text content as needed
};

// Check if there's a mode stored in local storage
const currentMode = localStorage.getItem('mode');

// If a mode is stored, apply it
if (currentMode) {
    body.classList.add(currentMode);
    // Update text content based on the current mode
    if (currentMode === 'light-mode') {
        document.querySelector('h1').textContent = lightModeText.greeting;
    } else {
        document.querySelector('h1').textContent = darkModeText.greeting;
    }
}

// Function to toggle between light mode and dark mode
function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        modeToggle.src = './assets/images/sun-image.png';
        document.querySelector('h1').textContent = lightModeText.greeting;
        localStorage.setItem('mode', 'light-mode');
    } else {
        // Switch to dark mode
        body.classList.add('dark-mode');
        modeToggle.src = './assets/images/moon-image.png';
        document.querySelector('h1').textContent = darkModeText.greeting;
        localStorage.setItem('mode', 'dark-mode');
    }
}

// Event listener for mode toggle button
modeToggle.addEventListener('click', toggleMode);

