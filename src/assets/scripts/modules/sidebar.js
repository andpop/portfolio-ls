// console.log("In sidebar.js");
const firstArticleTitle = document.querySelector(".articles__title--large");
const blogLeft = document.querySelector(".blog__left");
const blogLeftContent = document.querySelector(".blog__left-content");
const articleSmallTitles = document.querySelectorAll(".articles__title--small");

setActiveTitle(0);

window.addEventListener("scroll", e => {
  const topFirstArticleTitle = firstArticleTitle.getBoundingClientRect().top;
  // Если заголовок первой статьи подошел к верху экрана на 20px, то фиксируем сайдбар
  if (topFirstArticleTitle < 20) {
    fixSidebar();
  } else {
    unfixSidebar();
  }
});

function fixSidebar() {
  let widthBlogLeftContent = getComputedStyle(blogLeftContent).width;
  let widthBlogLeft = getComputedStyle(blogLeft).width;
  let widthFixedContent = widthBlogLeftContent;
  let leftFixedContent = widthBlogLeft - widthBlogLeftContent;
  blogLeftContent.style.cssText = `position: fixed; top: 20px; left: ${leftFixedContent}px; width: ${widthFixedContent}`;
}

function unfixSidebar() {
  blogLeftContent.style.cssText = "";
}

function setActiveTitle(numberTitle) {
  for (let i = 0; i < articleSmallTitles.length; i++) {
    if (i == numberTitle) {
      articleSmallTitles[i].classList.add("articles__title--active");
    } else {
      articleSmallTitles[i].classList.remove("articles__title--active");
    }
  }
}

function isTitleNearTop(titleElement) {
  console.log(titleElement.getBoundingClientRect().top);
}
