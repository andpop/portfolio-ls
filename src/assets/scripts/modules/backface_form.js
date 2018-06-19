console.log("In backface_form.js");
const authorizeLink = document.querySelector(".authorize-btn__link");

authorizeLink.addEventListener("click", e => {
  const card = document.querySelector(".card");
  const front = document.querySelector(".front");

  e.preventDefault();
  card.style.transform = "rotateY(180deg)";
  front.style.zIndex = "0";
  console.log(front);
});
