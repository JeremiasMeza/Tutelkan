const faqs = [
    {
      question: '¿Por qué optar por una solución de software personalizada?',
      answer: 'Optar por una solución de software personalizada significa elegir la innovación y la adaptabilidad en un mercado en constante cambio. En Tutelkan, nos especializamos en el desarrollo de software a medida, un proceso que implica la creación de soluciones únicas que se ajustan perfectamente a las necesidades y requisitos específicos de cada empresa. Este enfoque no solo permite una mayor flexibilidad y personalización sino que también promueve la innovación y la agilidad en tu negocio.'
    },
    {
      question: '¿Por qué elegir a Tutelkan?',
      answer: 'En Tutelkan combinamos experiencia técnica con un enfoque centrado en el cliente. Nuestro equipo especializado entiende las necesidades únicas de cada negocio y desarrolla soluciones que impulsan el crecimiento y la eficiencia.'
    },
    {
      question: '¿Cómo se asegura Tutelkan de entender y satisfacer las necesidades específicas de mi empresa?',
      answer: 'Realizamos un análisis exhaustivo de tus procesos de negocio, entrevistas con stakeholders clave y sesiones de discovery para comprender completamente tus objetivos y desafíos. Este proceso nos permite diseñar soluciones que se alineen perfectamente con tu visión empresarial.'
    },
    {
      question: '¿Ofrece Tutelkan soporte técnico y mantenimiento post-desarrollo?',
      answer: 'Sí, proporcionamos soporte técnico continuo, actualizaciones de seguridad, mantenimiento preventivo y correctivo. Nuestro compromiso contigo se extiende más allá del desarrollo inicial para asegurar el óptimo funcionamiento de tu solución.'
    },
    {
      question: '¿Cómo se involucra Tutelkan en la fase de implementación de las soluciones desarrolladas?',
      answer: 'Acompañamos todo el proceso de implementación, desde la planificación y despliegue hasta la capacitación de usuarios y la migración de datos. Nuestro equipo trabaja de cerca contigo para asegurar una transición suave y exitosa.'
    }
  ];

  const container = document.getElementById('faqs');

  faqs.forEach((faq, index) => {
    const detail = document.createElement('details');
    detail.className = `group rounded-lg overflow-hidden fade-card accordion bg-white shadow hover:shadow-md transition-shadow duration-300`;
    detail.style.animationDelay = `${index * 100}ms`;

    detail.innerHTML = `
      <summary class="cursor-pointer px-8 py-6 font-bold text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-between list-none">
        <span>${faq.question}</span>
        <i class="bi bi-chevron-compact-down mx-4 text-xl text-red-500 transition-transform duration-300 group-open:rotate-180"></i>
      </summary>
      <div class="accordion-content px-8 bg-gray-100 text-gray-600">
        <div class="accordion-inner">
          <p class="py-6">${faq.answer}</p>
        </div>
      </div>
    `;
    container.appendChild(detail);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
      const summary = accordion.querySelector('summary');

      summary.addEventListener('click', function (e) {
        e.preventDefault();

        const isOpen = accordion.hasAttribute('open');

        accordions.forEach((a) => {
          if (a !== accordion) {
            a.removeAttribute('open');
            a.querySelector('.accordion-inner').classList.remove('slide-in');
          }
        });

        if (isOpen) {
          accordion.removeAttribute('open');
          accordion.querySelector('.accordion-inner').classList.remove('slide-in');
        } else {
          accordion.setAttribute('open', '');
          accordion.querySelector('.accordion-inner').classList.add('slide-in');
        }
      });
    });
  });