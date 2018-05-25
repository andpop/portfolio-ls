const elements = document.querySelectorAll("*");
const preloader = document.getElementById("preloader");
let loadedImages = 0;

const collectBg = () => {
  const bgPaths = [];

  elements.forEach(elem => {
    const bg = getComputedStyle(elem).backgroundImage;
    if (elem.tagName === "IMG") {
      bgPaths.push(elem.src);
    }

    if (bg !== "none" && /gradient/gim.test(bg) === false) {
      bgPaths.push(bg.replace('url("', "").replace('")', ""));
    }
  });

  return bgPaths;
};

const countPersents = images => {
  loadedImages++;
  return loadedImages * 100 / images.length;
};

const drawLoader = persents => {
  const text = preloader.querySelector(".preloader__text");
  const circles = preloader.querySelectorAll(".preloader__circle");

  text.textContent = `${persents}%`;

  circles.forEach(circle => {
    const dashOffset = parseInt(
      getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
    );

    const loaded = dashOffset / 100 * (100 - persents);

    circle.style.strokeDashoffset = `${loaded}px`;
  });
};

const showHidePreloder = persentsLoaded => {
  if (persentsLoaded >= 100) {
    preloader.classList.remove("active");
  }
};

const preloadImage = images => {
  let persentsLoaded = countPersents(images);
  showHidePreloder(persentsLoaded);
  drawLoader(persentsLoaded);
};

collectBg().forEach((bg, i, images) => {
  const image = new Image();

  image.src = bg;

  image.addEventListener("load", preloadImage.bind(null, images));
  image.addEventListener("error", preloadImage.bind(null, images));
});
