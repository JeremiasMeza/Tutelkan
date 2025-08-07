import { initSection } from '../sectionObserver.js';

document.addEventListener('DOMContentLoaded', () => {
  initSection('#stats');
  initStatsCounters();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.querySelector('.counter')) {
      startCounters(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

function initStatsCounters() {
  const statsSection = document.querySelector('#stats');
  if (!statsSection) return;
  
  statsObserver.observe(statsSection);
}

function startCounters(section) {
  const counters = section.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    // Evitar ejecutar múltiples veces el mismo contador
    if (counter.dataset.animated) return;

    const target = parseInt(counter.dataset.target || '0');
    const duration = 2000; // 2 segundos para la animación
    const increment = target / (duration / 16); // 60fps aproximadamente
    let current = 0;

    const updateCounter = () => {
      current += increment;
      
      if (current < target) {
        // Durante la animación, mostrar el número con +
        counter.textContent = '+' + Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        // Al final, mostrar el número exacto con +
        counter.textContent = '+' + target.toLocaleString();
      }
    };

    // Marcar como animado para evitar repeticiones
    counter.dataset.animated = 'true';
    
    // Iniciar la animación
    updateCounter();
  });
}