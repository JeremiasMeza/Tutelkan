import { initSection } from '../sectionObserver.js';

document.addEventListener('DOMContentLoaded', function () {
  initSection('#clients');

  const logos = [
    { src: '/images/clients-logos/1-CMPC.webp', alt: 'CMPC' },
    { src: '/images/clients-logos/2-Arauco.webp', alt: 'Arauco' },
    { src: '/images/clients-logos/3-PF-Alimentos.webp', alt: 'PF Alimentos' },
    { src: '/images/clients-logos/3-white.webp', alt: 'White' },
    { src: '/images/clients-logos/4-Unifrutti.webp', alt: 'Unifrutti' },
    { src: '/images/clients-logos/5-LFE.webp', alt: 'LFE' },
    { src: '/images/clients-logos/6-UTalca.webp', alt: 'Utalca' },
    { src: '/images/clients-logos/7-Socoepa.webp', alt: 'Socoepa' },
    { src: '/images/clients-logos/8-Oriencoop.webp', alt: 'Oriencoop' },
    { src: '/images/clients-logos/9-Puertos-de-Talcahuano.webp', alt: 'Puertos de Talcahuano' },
    { src: '/images/clients-logos/10-Danich.webp', alt: 'Danich' },
    { src: '/images/clients-logos/11-Nebiolo.webp', alt: 'Nebiolo' },
    { src: '/images/clients-logos/12-Servimak.webp', alt: 'Servimak' },
    { src: '/images/clients-logos/13-Forestal-Río-Claro.webp', alt: 'Friosur Klaro' },
    { src: '/images/clients-logos/14-Promaule.webp', alt: 'Promaule' },
    { src: '/images/clients-logos/15-double-ju.webp', alt: 'Double Ju' },
    { src: '/images/clients-logos/16-subus.webp', alt: 'Subus' },
    { src: '/images/clients-logos/17-flowersindesign.webp', alt: 'Flowers in Design' },
    { src: '/images/clients-logos/18-pasche.webp', alt: 'Pasche' },
    { src: '/images/clients-logos/19-logo-gottingen.webp', alt: 'Gottingen' }
  ];

  const track = document.getElementById('carousel-track');
  let currentIndex = 0;
  const visibleLogos = 6;

  function updateCarousel() {
    track.innerHTML = '';

    for (let i = 0; i < visibleLogos; i++) {
      const logoIndex = (currentIndex + i) % logos.length;
      const logoData = logos[logoIndex];

      const img = document.createElement('img');
      img.src = logoData.src;
      img.alt = logoData.alt;
      img.className = `h-24 md:h-28 w-auto flex-shrink-0 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-scale animate-delay-${i + 1}`;

      track.appendChild(img);
    }

    currentIndex = (currentIndex + 1) % logos.length;
  }

  updateCarousel();
  setInterval(updateCarousel, 3000);
});
