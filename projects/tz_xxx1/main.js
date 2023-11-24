const header = document.querySelector("header");
const body = document.querySelector("header");
const headerRect = header.getBoundingClientRect();

const searchImage = document.querySelector(".search-container img");
const searchContainer = document.querySelector(".search-container");

// const headerEndLine = document.querySelector('.header-end-line')  
// const headerEndLineRect = headerEndLine.getBoundingClientRect();
// если с headerRect.bottom будут проблемы, то можно перейти на 
// этот Rect напрямую

dupLine.style.zIndex = 5;

let topValue = headerRect.bottom - 2;
dupLine.style.top = `${topValue}px`; 
// dupLine.style.backgroundColor = "rgba(0, 0, 0, 0)";

const menuItems = document.querySelectorAll(".menu-item");
for (const menuItem of menuItems) {
  menuItem.addEventListener("mouseenter", drawDupLine);
  menuItem.addEventListener("mouseleave", hideDupLine);
}

searchContainer.addEventListener("mouseenter", changeImageSource);
searchContainer.addEventListener("mouseleave", restoreImageSource);

function changeImageSource() {
  searchImage.src = "./img/search_yellow44.png";
}

function restoreImageSource() {
  searchImage.src = "./img/search_white44.png";
}

function drawDupLine(event) {
  const target = event.target;
  const targetRect = target.getBoundingClientRect();

  dupLine.style.width = `${targetRect.width}px`;
  dupLine.style.left = `${targetRect.left}px`;
  dupLine.style.backgroundColor = "white";
}

function hideDupLine() {
  dupLine.style.backgroundColor = "rgba(0, 0, 0, 0)";
}

let burger = document.querySelector('.burger')
let popUpMenu = document.querySelector('.pop-up-menu')
burger.addEventListener('click', function () {
  popUpMenu.classList.toggle('active')
  burger.classList.toggle('active')
})



// работа с CSS-переменными
// let tt = document.querySelector(':root');
// let tt3 = getComputedStyle(tt).getPropertyValue('--cur-body-width');
// console.log(tt3);
