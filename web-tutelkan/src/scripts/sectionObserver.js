// Configuración del observador para animaciones de secciones
const observerOptions = {
  threshold: 0.1,
  // Trigger animations slightly before the section enters the viewport
  rootMargin: '0px 0px -50px 0px'
};

// Crear el observador de intersección
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      entry.target.classList.remove('section-hidden');

      // Iniciar animaciones de elementos
      const animatedElements = entry.target.querySelectorAll('[class*="animate-"]');
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'running';
      });

      // Iniciar contadores si existen
      if (entry.target.querySelector('.counter')) {
        startCounters(entry.target);
      }

      // Dejar de observar la sección una vez animada
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Función para iniciar los contadores animados dentro de una sección
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
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    counter.dataset.animated = 'true';
    updateCounter();
  });
}

// Inicializar animaciones para una sección
export function initSection(selector) {
  const section = document.querySelector(selector);
  if (!section) return;

  section.classList.add('section-hidden');
  observer.observe(section);

  // Pausar animaciones inicialmente
  section.querySelectorAll('[class*="animate-"]').forEach(el => {
    el.style.animationPlayState = 'paused';
  });
}

// Iniciar animaciones del hero inmediatamente
export function initHero(selector) {
  const hero = document.querySelector(selector);
  if (!hero) return;

  hero.querySelectorAll('[class*="animate-"]').forEach(el => {
    el.style.animationPlayState = 'running';
  });
}

