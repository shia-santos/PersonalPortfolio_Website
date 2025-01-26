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
