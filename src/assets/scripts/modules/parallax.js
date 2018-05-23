const parallaxContainer = document.getElementById("parallax");
const layers = parallaxContainer.children;

const moveLayers = e => {
  const initialX = window.innerWidth / 2 - e.pageX;
  const initialY = window.innerHeight / 2 - e.pageY;

  Array.from(layers).forEach((layer, i) => {
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;
    const bottomPosition = window.innerHeight / 2 * divider;
    const leftPosition = window.innerWidth / 2 * divider;
    const transformString = `translate(${positionX}px, ${positionY}px)`;
    const image = layer.firstElementChild;

    layer.style.transform = transformString;
    image.style.marginBottom = "-" + bottomPosition + "px";
    image.style.marginLeft = "-" + leftPosition + "px";
  });
};

window.addEventListener("mousemove", moveLayers);
