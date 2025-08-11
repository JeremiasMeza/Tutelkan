// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded attribute
      mobileMenuButton.setAttribute('aria-expanded', (!isExpanded).toString());
      
      // Toggle menu visibility
      mobileMenu.classList.toggle('hidden');
    });
  }
});