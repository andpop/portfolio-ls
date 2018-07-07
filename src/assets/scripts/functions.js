// Плавный скроллинг окна до нужного элемента, переданного в качестве аргумента
export function scrollToElement(theElement) {
  const scrollDelay = 7;
  let box = theElement.getBoundingClientRect();
  const deltaY = box.top > 0 ? 10 : -10;
  let previousTop = box.top; // Для анализа того, идет ли скроллинг или мы уже уперлись в край

  const timerId = setInterval(() => {
    window.scrollBy(0, deltaY);
    box = theElement.getBoundingClientRect();
    console.log(box.top, deltaY);
    if (
      (deltaY > 0 && box.top <= 0) ||
      (deltaY < 0 && box.top >= 0) ||
      previousTop === box.top
    )
      clearInterval(timerId);
    previousTop = box.top;
  }, scrollDelay);
}
