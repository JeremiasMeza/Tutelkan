document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const getTheme = () =>
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const applyTheme = (theme) => {
    html.classList.toggle('dark', theme === 'dark');

    toggles.forEach((toggle) => {
      const lightIcon = toggle.querySelector('.theme-toggle-light');
      const darkIcon = toggle.querySelector('.theme-toggle-dark');

      if (!lightIcon || !darkIcon) return;

      if (theme === 'dark') {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
      } else {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
      }
    });

    localStorage.setItem('theme', theme);
  };

  applyTheme(getTheme());

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });
});
