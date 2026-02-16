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

    // Scroll reveal observer
    initScrollReveal();
});

// Scroll reveal - fade-in al hacer scroll
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => observer.observe(el));
}

// Function to enter the main site
function enterSite() {
    const welcomeMenu = document.getElementById('welcomeMenu');
    welcomeMenu.classList.add('hidden');
    
    // Remove the welcome menu from DOM after animation
    setTimeout(() => {
        welcomeMenu.style.display = 'none';
    }, 1000);
}

// Reto Arthas - Juego de números tipo tragamonedas
let retoClickCount = 0;

function probarSuerte() {
    const slots = document.querySelectorAll('.reto-slot');
    const btn = document.getElementById('retoBtn');
    const messageEl = document.getElementById('retoMessage');
    
    if (btn.disabled) return;
    
    btn.disabled = true;
    messageEl.textContent = '';
    messageEl.classList.remove('premio');
    
    // Primera ejecución: 4-4-4-4
    const targetNumbers = retoClickCount === 0 ? [4, 4, 4, 4] : [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
    ];
    
    retoClickCount++;
    
    // Animación tragamonedas: números giran ~1 segundo y se detienen en cascada
    const spinDuration = 1000;
    const intervalMs = 80;
    
    slots.forEach((slot, slotIndex) => {
        slot.classList.add('spinning');
        slot.dataset.target = targetNumbers[slotIndex];
        
        const stopTime = spinDuration + (slotIndex * 120);
        let elapsed = 0;
        
        const spinInterval = setInterval(() => {
            if (elapsed >= stopTime) {
                clearInterval(spinInterval);
                slot.textContent = slot.dataset.target;
                slot.classList.remove('spinning');
            } else {
                slot.textContent = Math.floor(Math.random() * 10);
            }
            elapsed += intervalMs;
        }, intervalMs);
    });
    
    const totalDelay = spinDuration + (4 * 120) + 250;
    setTimeout(() => {
        const result = targetNumbers.join('');
        if (result === '4444') {
            messageEl.textContent = '¡Premio Arthas! Hoy la suerte está de tu lado 🔥';
            messageEl.classList.add('premio');
        } else {
            messageEl.textContent = 'Sigue intentando, el sabor ya lo tienes asegurado 😎';
        }
        btn.disabled = false;
    }, totalDelay);
}
