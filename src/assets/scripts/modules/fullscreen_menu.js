const fullscreenMenu = document.querySelector(".fullscreen-menu");
const hamburger = document.querySelector(".hamburger");
const hamburgermenuLink = document.querySelector(".hamburger__link");
const fullscreenMenuClose = document.querySelector(".fullscreen-menu__close");

hamburgermenuLink.addEventListener("click", e => {
  e.preventDefault();
  hamburger.style.display = "none";
  fullscreenMenu.style.display = "flex";
  document.body.style.overflow = "hidden";
});

fullscreenMenuClose.addEventListener("click", e => {
  e.preventDefault();
  hamburger.style.display = "";
  fullscreenMenu.style.display = "";
  document.body.style.overflow = "";
});
