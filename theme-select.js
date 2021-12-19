let htmlElement = document.querySelector("html");
let selectThemeElement = document.querySelector(".theme-select");

const getDefultColorTheme = () => {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    setColorTheme("dark");
    selectThemeElement.value = "dark";
  }
}

const setColorTheme = (theme) => {
  htmlElement.setAttribute('data-theme', theme)
}

selectThemeElement.addEventListener("change", () => {
  setColorTheme(selectThemeElement.value);
})

getDefultColorTheme();