const windowScrollTo = (reqmove, duration) => {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  window.requestAnimationFrame = requestAnimationFrame;

  const moveDivider = duration / reqmove;
  const scrollHeight = window.scrollY;

  const animate = (draw, duration) => {
    const start = performance.now();
    requestAnimationFrame(function move(time) {
      let timePassed = time - start;

      if (timePassed > duration) timePassed = duration;

      draw(timePassed);

      if (timePassed < duration) requestAnimationFrame(move);
    });
  };

  animate(timePassed => {
    if (window.scrollY < reqmove) {
      window.scroll(0, timePassed / moveDivider + scrollHeight);
    }
  }, duration);
};

document.querySelector("#down-arrow").addEventListener("click", e => {
  const heroHeight = document.querySelector(".hero").clientHeight;

  windowScrollTo(heroHeight, 300);
});
