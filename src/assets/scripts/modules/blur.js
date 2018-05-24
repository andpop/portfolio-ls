const getOffset = element => {
  const rect = element.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
};

const setBg = e => {
  const form = document.getElementById("blurred-form");
  const bg = form.children[0];

  bg.style.backgroundPositionY = `${-form.offsetTop}px`;
};

document.addEventListener("DOMContentLoaded", setBg);
window.addEventListener("resize", setBg);
