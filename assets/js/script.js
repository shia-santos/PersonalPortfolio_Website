// ABRIR E FECHAR MENU HAMBURGUER

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
