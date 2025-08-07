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
    if (counter.dataset.animated) return;

    const target = parseInt(counter.dataset.target || '0');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      
      if (current < target) {
        counter.textContent = '+' + Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = '+' + target.toLocaleString();
      }
    };
    counter.dataset.animated = 'true';
    updateCounter();
  });
}