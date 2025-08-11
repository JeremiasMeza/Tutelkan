document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      if (menu && button && !menu.classList.contains('max-h-0')) {
        button.setAttribute('aria-expanded', 'false');
        menu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
        menu.classList.remove('max-h-screen', 'opacity-100', 'pointer-events-auto');
      }
    });
  });
  if (button && menu) {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', (!expanded).toString());
      menu.classList.toggle('max-h-0');
      menu.classList.toggle('max-h-screen');
      menu.classList.toggle('opacity-0');
      menu.classList.toggle('opacity-100');
      menu.classList.toggle('pointer-events-none');
      menu.classList.toggle('pointer-events-auto');
    });
  }
});
