// Выбираем кнопку
const switcher = document.querySelector(".switcher");
let theme_link = document.querySelector("#theme-link");
let theme_full_file_name = theme_link.getAttribute("href");
let file_path_parts = theme_full_file_name.match(/^(.*\/)?(.+)$/);

let themePath, themeFileName;
if (file_path_parts) {
  themePath = file_path_parts[1]; // Путь к файлу
  themeFileName = file_path_parts[2]; // Имя файла
}

// Выбираем настройки темы из localStorage
let currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
  currentTheme = "dark";
  localStorage.setItem("theme", currentTheme);
} else if (currentTheme == "light") {
  theme_link.setAttribute("href", themePath + "light_colors.css");

  console.log("такой путь к светлой схеме сейчас:");
  console.log(theme_link.getAttribute("href"));
} else if (currentTheme == "dark") {
  console.log("для проформы. Тема дб тёмная.");
  console.log(theme_link.getAttribute("href"));
}

switcher.addEventListener("click", function () {
  console.log("зашли в обработчик");
  console.log("была тема = " + currentTheme);

  if (currentTheme == "dark") {
    theme_link.setAttribute("href", themePath + "light_colors.css");
    currentTheme = "light";
    localStorage.setItem("theme", "light");
  } else if (currentTheme == "light") {
    theme_link.setAttribute("href", themePath + "dark_colors.css");
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
  }
  console.log("стала  = " + currentTheme);
});

// let colScheme = "dark";

// switcher.addEventListener("click", function (e) {
//   if (colScheme == "dark") {
//     document.documentElement.style.setProperty("--color-scheme", "light");
//     colScheme = "light";
//     switchScheme(colScheme);
//   } else if (colScheme == "light") {
//     document.documentElement.style.setProperty("--color-scheme", "dark");
//     colScheme = "dark";
//     switchScheme(colScheme);
//   }
// });

// function switchScheme(colScheme) {
//   if (colScheme == "dark") {
//     document.documentElement.style.setProperty("--prim-bg-color", "black");
//     document.documentElement.style.setProperty("--prim-color", "white");
//     document.documentElement.style.setProperty("--h2text-color", "--yeDS");
//   }
//   if (colScheme == "light") {
//     document.documentElement.style.setProperty("--prim-bg-color", "white");
//     document.documentElement.style.setProperty("--prim-color", "black");
//     document.documentElement.style.setProperty("--h2text-color", "blue");
//   }
// }

// можно добавлять класс .light-theme
// document.body.classList.add("light-theme");
// тут у меня будет более сложный выбор элементов
// theme_link.href = themePath + "light_colors.css";
