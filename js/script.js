// script.js
// Select the logo image element
const logoImg = document.querySelector('#logo-img');

// Check if the user's browser is in dark mode
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Change the logo image based on the dark mode status
if (isDarkMode) {
  logoImg.src = '/img/logo-dark.png';
} else {
  logoImg.src = '/img/logo.png';
}
