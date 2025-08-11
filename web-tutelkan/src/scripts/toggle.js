document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const getTheme = () =>
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    toggles.forEach((toggle) => {
      const lightIcon = toggle.querySelector('.theme-toggle-light');
      const darkIcon = toggle.querySelector('.theme-toggle-dark');

      if (theme === 'dark') {
        lightIcon.style.transform = 'rotate(90deg) scale(0)';
        lightIcon.style.opacity = '0';
        darkIcon.style.transform = 'rotate(0deg) scale(1)';
        darkIcon.style.opacity = '1';
      } else {
        lightIcon.style.transform = 'rotate(0deg) scale(1)';
        lightIcon.style.opacity = '1';
        darkIcon.style.transform = 'rotate(-90deg) scale(0)';
        darkIcon.style.opacity = '0';
      }
    });

    localStorage.setItem('theme', theme);
  };

  applyTheme(getTheme());

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });
});
