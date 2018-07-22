import { scrollToElement } from "../functions";

const arrowDown = document.querySelector(".arrow");

arrowDown.addEventListener("click", e => {
  let content = document.querySelector(".header").nextElementSibling;
  scrollToElement(content);
});
