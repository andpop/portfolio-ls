// console.log("In sidebar.js");
const firstArticleTitle = document.querySelector(".articles__title--content");
const blogLeft = document.querySelector(".blog__left");
const blogLeftContent = document.querySelector(".blog__left-content");
const sidebarArticleTitles = document.querySelectorAll(
  ".articles__title--sidebar"
);
const contentArticleTitles = document.querySelectorAll(
  ".articles__title--content"
);
const numberPixelsFromTop = 20; // Статья станет активной, когда ее заголовок подойдет к верхнему краю экрана на столько пикселей

// Делаем активным заголовок первой статьи
setActiveTitle(0);

// Обрабатываем щелчки на названиях статей в сайдбаре
for (let i = 0; i < sidebarArticleTitles.length; i++) {
  const currentSidebarArticleTitle = sidebarArticleTitles[i];
  currentSidebarArticleTitle.addEventListener("click", e => {
    e.preventDefault;
    scrollToElement(contentArticleTitles[i]);
  });
}

// Обрабатываем скроллинг окна
window.addEventListener("scroll", e => {
  const topFirstArticleTitle = firstArticleTitle.getBoundingClientRect().top;
  // Если заголовок первой статьи подошел к верху экрана на 20px, то фиксируем сайдбар
  if (topFirstArticleTitle < numberPixelsFromTop) {
    fixSidebar();
  } else {
    unfixSidebar();
  }

  // Если заголовок очередной статьи подошел к верху экрана на 20px, то делаем активной ее заголовок в сайдбаре
  for (let i = 0; i < contentArticleTitles.length; i++) {
    if (isTitleNearTop(contentArticleTitles[i])) {
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
  for (let i = 0; i < sidebarArticleTitles.length; i++) {
    if (i == numberTitle) {
      sidebarArticleTitles[i].classList.add("articles__title--active");
    } else {
      sidebarArticleTitles[i].classList.remove("articles__title--active");
    }
  }
}

// Определяем, подошел ли заголовок статьи близко к верху экрана (для активирования соответствующего пункта в сайдбаре)
function isTitleNearTop(titleElement) {
  const topArticleTitle = titleElement.getBoundingClientRect().top;
  return topArticleTitle > 0 && topArticleTitle < numberPixelsFromTop;
}

// Скроллим окно до нужного элемента, переданного в качестве аргумента
function scrollToElement(theElement) {
  let selectedPosX = 0;
  let selectedPosY = 0;
  while (theElement != null) {
    selectedPosX += theElement.offsetLeft;
    selectedPosY += theElement.offsetTop;
    theElement = theElement.offsetParent;
  }
  window.scrollTo(selectedPosX, selectedPosY);
}
