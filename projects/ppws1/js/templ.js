const header = document.querySelector("header");
const body = document.querySelector("header");

const searchImage = document.querySelector(".search-container img");
const searchContainer = document.querySelector(".search-container");

dupLine.style.zIndex = 5;
let headerRect, topValue;

function setDupLineTop() {
  headerRect = header.getBoundingClientRect();
  topValue = headerRect.bottom - 2;
  dupLine.style.top = `${topValue}px`; 
}

setDupLineTop();
console.log("начальный dupLine.top = ", dupLine.style.top);

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


const html = document.querySelector('html');

window.addEventListener('resize', () => {
  setDupLineTop();
});

