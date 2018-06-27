// console.log("In sidebar.js");
const firstArticleTitle = document.querySelector(".articles__title--large");
const blogLeft = document.querySelector(".blog__left");
const blogLeftContent = document.querySelector(".blog__left-content");
const articleSmallTitles = document.querySelectorAll(".articles__title--small");
const articleLargeTitles = document.querySelectorAll(".articles__title--large");
const numberPixelsFromTop = 20; // Статья станет активной, когда ее заголовок подойдет к верхнему краю экрана на столько пикселей

// Делаем активным заголовок первой статьи
setActiveTitle(0);

window.addEventListener("scroll", e => {
  const topFirstArticleTitle = firstArticleTitle.getBoundingClientRect().top;
  // Если заголовок первой статьи подошел к верху экрана на 20px, то фиксируем сайдбар
  if (topFirstArticleTitle < numberPixelsFromTop) {
    fixSidebar();
  } else {
    unfixSidebar();
  }

  for (let i = 0; i < articleLargeTitles.length; i++) {
    if (isTitleNearTop(articleLargeTitles[i])) {
      // console.log(articleLargeTitles[i]);
      setActiveTitle(i);
    }
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
  const topArticleTitle = titleElement.getBoundingClientRect().top;
  return topArticleTitle > 0 && topArticleTitle < numberPixelsFromTop;
}
