// Theme toggle functionality - optimized and simple
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const lightIcon = document.getElementById('theme-toggle-light');
  const darkIcon = document.getElementById('theme-toggle-dark');
  const html = document.documentElement;
  
  // Get theme from localStorage or default to light
  const getTheme = () => {
    return localStorage.getItem('theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };
  
  // Apply theme to document and update icons
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      html.classList.add('dark');
      lightIcon.style.transform = 'rotate(90deg) scale(0)';
      lightIcon.style.opacity = '0';
      darkIcon.style.transform = 'rotate(0deg) scale(1)';
      darkIcon.style.opacity = '1';
    } else {
      html.classList.remove('dark');
      lightIcon.style.transform = 'rotate(0deg) scale(1)';
      lightIcon.style.opacity = '1';
      darkIcon.style.transform = 'rotate(-90deg) scale(0)';
      darkIcon.style.opacity = '0';
    }
    localStorage.setItem('theme', theme);
  };
  
  // Initialize theme on page load
  applyTheme(getTheme());
  
  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = getTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }
});