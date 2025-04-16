const burgerButton = document.querySelector("#burger-button");
const mainNav = document.querySelector("#main-nav");
const themeToggleInput = document.querySelector('#theme-container input');
const htmlElement = document.documentElement;

const themes = {
    light: "light",
    dark: "synthwave"
}
const currentTheme = localStorage.getItem("theme") || themes["light"]
if (currentTheme === themes["dark"]) {
    themeToggleInput.checked = true
}
htmlElement.setAttribute("data-theme", currentTheme);

themeToggleInput.addEventListener("change", () => {
    const themeValue = htmlElement.getAttribute("data-theme") === themes["light"] ? themes["dark"] : themes["light"];
    htmlElement.setAttribute("data-theme", themeValue);
    localStorage.setItem("theme", themeValue);
});

burgerButton.addEventListener("click", () => {
    mainNav.classList.toggle("show-nav")
})