import { scrollToElement } from "../functions";

const arrowDown = document.querySelector(".arrow");
const content = document.querySelector(".header").nextElementSibling;

arrowDown.addEventListener("click", e => {
  scrollToElement(content);
});
