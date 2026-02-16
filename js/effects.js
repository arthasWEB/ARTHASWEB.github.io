// Create floating ice particles effect
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particlesContainer.appendChild(particle);
    }
});

// Function to enter the main site
function enterSite() {
    const welcomeMenu = document.getElementById('welcomeMenu');
    welcomeMenu.classList.add('hidden');
    
    // Remove the welcome menu from DOM after animation
    setTimeout(() => {
        welcomeMenu.style.display = 'none';
    }, 1000);
}
