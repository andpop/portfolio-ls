console.log("In preloader.js");
// const backgroundVideo = document.getElementById("bg-video");

// console.log(backgroundVideo);
// backgroundVideo.addEventListener("onload", e => {
//   console.log("video loaded");
// });

document.addEventListener("DOMContentLoaded", e => {
  const images = document.images;
  const imagesTotalAmount = images.length;
  let imagesLoadedAmount = 0;
  const percentElement = document.getElementById("load-percent");
  const preloader = document.querySelector(".preloader-2");
  for (let i = 0; i < imagesTotalAmount; i++) {
    const imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
    // Этот вариант не срабатывает, т.к. некоторые изображения уже загружены и обработчики этих событий не срабатывают
    // images[i].onload = imageLoaded;
    // images[i].onerror = imageLoaded;
  }

  function imageLoaded() {
    const previousProcent =
      parseInt((imagesLoadedAmount * 100) / imagesTotalAmount) + 1;
    imagesLoadedAmount++;
    const currentProcent = parseInt(
      (imagesLoadedAmount * 100) / imagesTotalAmount
    );
    for (let procent = previousProcent; procent <= currentProcent; procent++) {
      console.log(procent);
      percentElement.innerHTML = procent + "%";
    }
    if (imagesLoadedAmount >= imagesTotalAmount) {
      setTimeout(function() {
        if (!preloader.classList.contains("done"))
          preloader.classList.add("done");
      }, 1000);
    }
  }
});
