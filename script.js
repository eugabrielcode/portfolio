window.addEventListener('load', () => {
    // tsParticles
    tsParticles.load("tsparticles", {
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      background: {
        color: { value: "#000000" }
      },
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            area: 1000
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.7,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
            sync: false
          }
        },
        size: {
          value: { min: 0.5, max: 2 },
          random: true
        },
        move: {
          enable: true,
          direction: "bottom",
          speed: 0.5,
          random: false,
          straight: false,
          outModes: {
            default: "out"
          }
        }
      },
      detectRetina: true
    });
  
    // Typed.js
    new Typed('#typed-name', {
      strings: ["Gabriel Poças de Almeida"],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "_",
      loop: false
    });
  
    // Swiper Initialization
     new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Inicialização do Swiper para os Certificados
  new Swiper('.certificates-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.certificates-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.certificates-next',
      prevEl: '.certificates-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

function openModal(imgSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = imgSrc;
    modal.classList.add("show");
  }
  
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
  }

  //

  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
  
    // Remove toasts antigos
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) existingToast.remove();
  
    // Cria o toast estiloso
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = 'Enviando mensagem... 🚀';
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(0, 0, 0, 0.8)',
      color: '#00ffff',
      padding: '14px 28px',
      borderRadius: '14px',
      fontWeight: '600',
      fontSize: '0.95rem',
      fontFamily: 'Poppins, sans-serif',
      boxShadow: '0 0 20px #00ffff',
      zIndex: '9999',
      opacity: '0',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    });
  
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 100);
  
    // Envia com EmailJS
    emailjs.sendForm('service_9kme2lt', 'template_zihpgfb', form)
      .then(() => {
        form.reset();
        toast.textContent = 'Mensagem enviada com sucesso! ✅';
        toast.style.background = 'rgba(0, 60, 60, 0.9)';
        toast.style.boxShadow = '0 0 25px #00ffcc';
        toast.style.color = '#00ffcc';
      })
      .catch(() => {
        toast.textContent = 'Erro ao enviar a mensagem 😢';
        toast.style.background = 'rgba(60, 0, 0, 0.9)';
        toast.style.boxShadow = '0 0 20px #ff5555';
        toast.style.color = '#ff7777';
      });
  
    // Remove o toast após 4s
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(0)';
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  });

  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.classList.add("fade-out");
    }, 500); // Tempo em ms (2.2s)
  });