let currentPageName = "p1";
let currentPageNum = "1";
let selectedPageNum;
let selectedPageName;

document.body.addEventListener("click", f33);

function f33(e) {
  const target = e.target;

  // console.log(target);
  let isPageBtn =
    target.classList.contains("pagination") &&
    target.classList.contains("item");
  if (!isPageBtn || target.classList.contains("active")) {
    return;
  }

  const currentPageBtn = document.querySelector(
    ".pagination.container>.active"
  );

  selectedPageNum = target.firstChild.textContent;
  selectedPageName = "p" + selectedPageNum; // эта строка совпадает с именем класса

  const selectedPageItems = document.getElementsByClassName(selectedPageName);
  for (let i = 0; i < selectedPageItems.length; i++) {
    selectedPageItems[i].classList.remove("hidden");
  }

  const currentPageItems = document.getElementsByClassName(currentPageName);
  for (let i = 0; i < currentPageItems.length; i++) {
    currentPageItems[i].classList.add("hidden");
  }

  currentPageBtn.classList.remove("active");
  target.classList.add("active");
  currentPageName = selectedPageName;
  currentPageNum = selectedPageNum;
  console.log("--" + selectedPageName + "--");
}
