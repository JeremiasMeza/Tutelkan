function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#eff0ef';
    navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  } else {
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = 'none';
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const button = document.getElementById('mobile-menu-button');
  
  if (!mobileMenu || !button) return;
  
  const isHidden = mobileMenu.classList.contains('hidden');
  
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    button.setAttribute('aria-expanded', 'true');
  } else {
    mobileMenu.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleNavbarScroll);
  
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-button');
      if (mobileMenu && button) {
        mobileMenu.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
});