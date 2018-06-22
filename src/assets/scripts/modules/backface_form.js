console.log("In backface_form.js");
const authorizeLink = document.querySelector(".authorize-btn__link");
const mainPageLink = document.getElementById("mainpage-link");
const backface = document.querySelector(".backface");
const front = document.querySelector(".front");
const welcome = document.querySelector(".welcome");
const backfaceContainer = document.querySelector(".backface-container");

// Переворачиваем плашку, показываем оборотную сторону - форму авторизации
authorizeLink.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  backface.style.transform = "rotateY(180deg)";
  front.style.zIndex = "0";
  authorizeLink.style.display = "none";
});

// Возвращаем плашку в исходное положение
mainPageLink.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  backface.style.transform = "";
  front.style.zIndex = "";
  authorizeLink.style.display = "";
});

backfaceContainer.addEventListener("click", e => {
  e.stopPropagation();
});

welcome.addEventListener("click", e => {
  if (front.style.zIndex === "0") {
    backface.style.transform = "";
    front.style.zIndex = "";
    authorizeLink.style.display = "";
  }
  console.log(e.target);
});
