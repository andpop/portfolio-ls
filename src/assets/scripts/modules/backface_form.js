console.log("In backface_form.js");
const authorizeLink = document.querySelector(".authorize-btn__link");
const mainPageLink = document.getElementById("mainpage-link");

authorizeLink.addEventListener("click", e => {
  const backface = document.querySelector(".backface");
  const front = document.querySelector(".front");

  e.preventDefault();
  backface.style.transform = "rotateY(180deg)";
  front.style.zIndex = "0";
});

mainPageLink.addEventListener("click", e => {
  e.preventDefault();
  console.log("Нажали");
});
