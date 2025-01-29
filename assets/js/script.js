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

// **************** HOVER CARDS FEEDBACK

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os cards
  const cards = document.querySelectorAll(
    ".feedback__card1, .feedback__card2, .feedback__card3, .feedback__card4"
  );

  function handleMouseOver(event) {
    const card = event.currentTarget;
    const textElement = card.querySelector(".feedback__card-text");

    const newH4 = document.createElement("h4");
    newH4.classList.add("hover-text");

    if (
      card.classList.contains("feedback__card1") ||
      card.classList.contains("feedback__card2") ||
      card.classList.contains("feedback__card4")
    ) {
      newH4.textContent = "Feel free to reach out directly via LinkedIn!";
    } else if (card.classList.contains("feedback__card3")) {
      newH4.textContent = "Sorry, but my dog doesn’t have a LinkedIn account!";
    }

    card.replaceChild(newH4, textElement);
  }

  function handleMouseOut(event) {
    const card = event.currentTarget;
    const newH4 = card.querySelector(".hover-text");

    const originalText = card.querySelector(".feedback__card-text");
    card.replaceChild(originalText, newH4);
  }

  cards.forEach((card) => {
    card.addEventListener("mouseover", handleMouseOver);
    card.addEventListener("mouseout", handleMouseOut);
  });
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
