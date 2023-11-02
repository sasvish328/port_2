const switcher = document.querySelector(".switcher");
let colScheme = "dark";
let theme = document.querySelector("#theme-link");
console.log(theme.getAttribute("href"));
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

switcher.addEventListener("click", function () {
  // Выбираем таблицу стилей
  let theme_full_file_name = theme.getAttribute("href");
  let file_path_parts = theme_full_file_name.match(/^(.*\/)?(.+)$/);

  let themePath, themeFileName;

  if (file_path_parts) {
    themePath = file_path_parts[1]; // Путь к файлу
    themeFileName = file_path_parts[2]; // Имя файла
  }

  // Если текущий адрес содержит "light-theme.css"
  if (themeFileName == "light_colors.css") {
    // …то переключаемся на dark"
    theme.href = themePath + "dark_colors.css";
    // В противном случае…
    console.log("переключаемся на тёмную " + themePath + "dark_colors.css");
  }
  if (themeFileName == "dark_colors.css") {
    // …переключаемся на светлую тему"
    theme.setAttribute("href", themePath + "light_colors.css");
    // theme.href = themePath + "light_colors.css";
    console.log("переключаемся на светлую ");
  }

  console.log(theme.href);
  theme_full_file_name = theme.getAttribute("href");
  console.log(theme_full_file_name);
  file_path_parts = theme_full_file_name.match(/^(.*\/)?(.+)$/);
  console.log(file_path_parts);
});
