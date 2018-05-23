const authForm = document.querySelector(".auth__form");

document.getElementById("auth-btn").addEventListener("click", e => {
  e.preventDefault();
  authForm.classList.toggle("active");
});
