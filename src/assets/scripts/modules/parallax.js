const mountains = document.querySelector(".mountains");

document.addEventListener("mousemove", e => {
  const speed = 60;
  const pos_x = `${e.pageX / speed}px`;
  const pos_y = `${e.pageY / speed}px`;
  mountains.style.transform = `translate3d(${pos_x}, ${pos_y}, 0)`;
});
