// **************** ABRIR E FECHAR MENU HAMBURGUER

const hamburguerMenu = document.getElementById("hamburguerMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

// Função para abrir o menu
hamburguerMenu.addEventListener("click", () => {
  menuOverlay.style.right = "0";
});

// Função para fechar o menu
closeMenu.addEventListener("click", () => {
  menuOverlay.style.right = "-30%";
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
