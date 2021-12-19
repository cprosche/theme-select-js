const variablesToToggleArray = ["--bg-color", "--text-color"];
const themeNames = ["light", "dark", "color"];

let root = document.documentElement;
let themeSelect = document.querySelector(".theme-select");

const setThemeMode = (mode) => {
  variablesToToggleArray.forEach((el) => {
    root.style.setProperty(el, `var(${el}-${mode})`);
  });
};

themeSelect.addEventListener('change', () => {
  let selectValue = themeSelect.value;
  if(themeNames.includes(selectValue)){
    setThemeMode(selectValue);
  }
})
