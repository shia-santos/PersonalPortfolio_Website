// **************** ABRIR E FECHAR MENU HAMBURGUER

document.addEventListener("DOMContentLoaded", () => {
  const menuOverlay = document.getElementById("menuOverlay");
  const menuIcon = document.getElementById("menuIcon");

  // Abrir o menu
  menuIcon.addEventListener("click", () => {
    if (menuOverlay.classList.contains("active")) {
      menuOverlay.classList.remove("active");
      menuIcon.src = "./assets/img/menuHamburguer.png";
    } else {
      menuOverlay.classList.add("active");
      menuIcon.src = "./assets/img/menuHamburguerFechar.png";
    }
  });

  // Fechar o menu
  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove("active");
      menuIcon.src = "./assets/img/menuHamburguer.png";
    }
  });
});

// **************** EFEITO SCROLLREVEAL

document.addEventListener("DOMContentLoaded", function () {
  window.revel = ScrollReveal({
    reset: true,
  });

  revel.reveal("#efeito-scrollReveal1", {
    origin: "bottom",
    distance: "150px",
    duration: 1000,
    delay: 400,
  });
  revel.reveal("#efeito-scrollReveal2", {
    origin: "bottom",
    distance: "150px",
    duration: 1500,
    delay: 400,
  });
  revel.reveal("#efeito-scrollReveal3", {
    origin: "bottom",
    distance: "150px",
    duration: 2000,
    delay: 400,
  });
  revel.reveal("#efeito-scrollReveal4", {
    origin: "bottom",
    distance: "150px",
    duration: 2000,
    delay: 400,
  });
});

// **************** ANIMAÇÃO MOUSE ENTER ORIGAMI FOOTER

document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("image5");

  function activateAnimation() {
    img.style.opacity = "1";
    img.style.animation = "fadeInFromBottom 1s forwards";
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateAnimation();
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(img);

  img.addEventListener("mouseover", activateAnimation);
});

// **************** HOVER H4 E ICON LINKEDIN CARDS FEEDBACK

const cardsTodos = document.querySelectorAll(".cards_feedback_hover");

function hoverFeedback(event) {
  const card = event.currentTarget;
  const H4novo = card.querySelector(".mensagem-linkedin");
  const pAntigo = card.querySelector(".feedback__card-text");
  const linkedinIconAntigo = card.querySelector(".linkedin_icon");
  const linkedinIconNovo = card.querySelector(".linkedin_icon_branco");

  H4novo.style.display = "flex";
  pAntigo.style.display = "none";
  linkedinIconAntigo.style.display = "none";
  linkedinIconNovo.style.display = "flex";
}

function hoverFeedback2(event) {
  const card = event.currentTarget;
  const H4novo = card.querySelector(".mensagem-linkedin");
  const pAntigo = card.querySelector(".feedback__card-text");
  const linkedinIconAntigo = card.querySelector(".linkedin_icon");
  const linkedinIconNovo = card.querySelector(".linkedin_icon_branco");

  H4novo.style.display = "none";
  pAntigo.style.display = "flex";
  linkedinIconAntigo.style.display = "flex";
  linkedinIconNovo.style.display = "none";
}

// Adiciona eventos de mouseover e mouseout para cada card individualmente
cardsTodos.forEach((card) => {
  card.addEventListener("mouseover", hoverFeedback);
  card.addEventListener("mouseout", hoverFeedback2);
});

// **************** BOTAO CONTACT ME HOVER ICONE PARA BRANCO

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".footer__button--contact");
  const icon = button.querySelector(".button-icon");

  const originalSrc = icon.src;

  const hoverSrc = "./assets/img/envelopeHover.png";

  button.addEventListener("mouseover", () => {
    icon.src = hoverSrc;
  });

  button.addEventListener("mouseout", () => {
    icon.src = originalSrc;
  });
});

/* **************** FEEDBACK MOBILE EXPERIENCIA */

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".feedback__card");
  const prevButton = document.querySelector(".left-arrow");
  const nextButton = document.querySelector(".right-arrow");

  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth; // Pega a largura do slide para calcular deslocamento

  // Atualiza a posição do carrossel
  function updateSlidePosition() {
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Avança para o próximo slide
  nextButton.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Retorna ao primeiro slide
    }
    updateSlidePosition();
  });

  // Retrocede para o slide anterior
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1; // Vai para o último slide
    }
    updateSlidePosition();
  });

  // Ajusta o container para que os slides fiquem em linha
  container.style.display = "flex";
  container.style.transition = "transform 0.5s ease-in-out";

  // Define largura fixa do container para comportar todos os slides corretamente
  container.style.width = `${slides.length * slideWidth}px`;
});
