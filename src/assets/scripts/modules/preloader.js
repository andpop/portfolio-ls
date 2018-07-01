console.log("In preloader.js");
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
}

console.log(imagesTotalAmount, imagesLoadedAmount);

function imageLoaded() {
  imagesLoadedAmount++;
  percentElement.innerHTML =
    parseInt((imagesLoadedAmount * 100) / imagesTotalAmount) + "%";
  if (imagesLoadedAmount >= imagesTotalAmount) {
    setTimeout(function() {
      if (!preloader.classList.contains("done"))
        preloader.classList.add("done");
    }, 1000);
  }
}

// function test() {
//   setTimeout(function() {
//     const preloader = document.querySelector(".preloader");
//     if (!preloader.classList.contains("done")) preloader.classList.add("done");
//   }, 1000);
// };
