const el = document.querySelector(".begin-form-box");
let computedStyle = window.getComputedStyle(el);
// let fontSize = computedStyle.getPropertyValue("font-size");
let width = computedStyle.getPropertyValue("width");
console.log("Ширина блока:", width);
