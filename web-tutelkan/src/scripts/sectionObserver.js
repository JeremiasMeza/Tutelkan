const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      entry.target.classList.remove('section-hidden');

      const animatedElements = entry.target.querySelectorAll('[class*="animate-"]');
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'running';
      });

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

export function initSection(selector) {
  const section = document.querySelector(selector);
  if (!section) return;

  section.classList.add('section-hidden');
  observer.observe(section);

  section.querySelectorAll('[class*="animate-"]').forEach(el => {
    el.style.animationPlayState = 'paused';
  });
}

export function initHero(selector) {
  const hero = document.querySelector(selector);
  if (!hero) return;

  hero.querySelectorAll('[class*="animate-"]').forEach(el => {
    el.style.animationPlayState = 'running';
  });
}