import { scrollToElement } from "../functions";

const firstArticleTitle = document.querySelector(".articles__title--content");
const blogLeft = document.querySelector(".blog__left");
const blogLeftContent = document.querySelector(".blog__left-content");
const swipeLink = document.querySelector(".blog__swipe-link");
const sidebarArticleTitles = document.querySelectorAll(
  ".articles__title--sidebar"
);
const contentArticleTitles = document.querySelectorAll(
  ".articles__title--content"
);

// console.log("firstArticleTitle =", firstArticleTitle);

const numberPixelsFromTop = 20; // Статья станет активной, когда ее заголовок подойдет к верхнему краю экрана на столько пикселей

// Делаем активным заголовок первой статьи
setActiveTitle(0);

// Обрабатываем щелчок на иконке для открытия/закрытия списка статей на узких экранах
swipeLink.addEventListener("click", e => {
  e.preventDefault();
  if (parseInt(getComputedStyle(blogLeft).left) < 0) {
    blogLeftContent.removeAttribute("style");
    blogLeft.classList.add("blog__left--visible");
    // Показываем список с заголовками статей
    blogLeft.style.left = "0";
    // Отключаем прокрутку мышью в главном окне
    document.body.style.overflow = "hidden";
  } else {
    blogLeft.classList.remove("blog__left--visible");
    // Прячем список с заголовками статей (по умолчанию он сдвинут влево за экран)
    blogLeft.style.left = "";
    // Включаем прокрутку мышью в главном окне
    document.body.style.overflow = "";
  }
});

// Обрабатываем щелчки на названиях статей в сайдбаре
for (let i = 0; i < sidebarArticleTitles.length; i++) {
  const currentSidebarArticleTitle = sidebarArticleTitles[i];
  currentSidebarArticleTitle.addEventListener("click", e => {
    e.preventDefault();
    scrollToElement(contentArticleTitles[i]);
    setActiveTitle(i);
  });
}

// Обрабатываем скроллинг окна
window.addEventListener("scroll", e => {
  // Если панель с заголовками статей выдвинута (на узких экранах, то фиксировать сайдбар не нужно)
  if (blogLeft.classList.contains("blog__left--visible")) return;
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
  // let widthBlogLeft = getComputedStyle(blogLeft).width;
  let widthBlogLeft = blogLeft.clientWidth;
  let widthFixedContent = widthBlogLeftContent;
  let leftFixedContent = widthBlogLeft - widthBlogLeftContent;
  blogLeftContent.style.cssText = `position: fixed; top: 20px; left: ${leftFixedContent}px; width: ${widthFixedContent}`;
}

function unfixSidebar() {
  blogLeftContent.removeAttribute("style");
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
