const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");

// Alternar função suspensa
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

// Alternar o menu suspenso aberto/fechado quando o botão suspenso é clicado
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Fechar menu suspenso quando o elemento dom é clicado
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});