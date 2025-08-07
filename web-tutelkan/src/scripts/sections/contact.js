import { initSection } from '../sectionObserver.js';

document.addEventListener('DOMContentLoaded', () => {
  initSection('#contact');
});
function openModal() {
  document.getElementById('certificationModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('certificationModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
  const isoImage = document.getElementById('isoImage');
  if (isoImage) {
    isoImage.addEventListener('click', openModal);
  }

  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalBtnBottom = document.getElementById('closeModalBtnBottom');
  const modal = document.getElementById('certificationModal');

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (closeModalBtnBottom) {
    closeModalBtnBottom.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});