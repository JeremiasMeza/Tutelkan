A// Configuración del observador para animaciones de secciones
const observerOptions = { 
  threshold: 0.1, 
  rootMargin: '0px 0px -100px 0px' 
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
        startCounters();
      }
    }
  });
}, observerOptions);

// Función para iniciar los contadores animados
function startCounters() {
  const counters = document.querySelectorAll('.counter');
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

// Inicializar cuando el DOM esté listo
function initializeAnimations() {
  // Observar todas las secciones con animación
  document.querySelectorAll('.section-animate').forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });
  
  // Pausar todas las animaciones inicialmente
  document.querySelectorAll('[class*="animate-"]').forEach(el => {
    el.style.animationPlayState = 'paused';
  });
  
  // Iniciar animaciones del hero inmediatamente
  const heroElements = document.querySelectorAll('#home [class*="animate-"]');
  heroElements.forEach(el => {
    el.style.animationPlayState = 'running';
  });
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Backup para cuando la ventana esté completamente cargada
window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('#home [class*="animate-"]');
  heroElements.forEach(el => {
    el.style.animationPlayState = 'running';
  });
});