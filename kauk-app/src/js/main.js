document.addEventListener("DOMContentLoaded", () => {
    const menuButtonController = document.querySelector("#menu-button-controller");
    const mainNav = document.querySelector("#main-nav");
    const languageToggleInput = document.querySelector('#language-container input');
    let langEnElements = document.querySelectorAll('[data-lang="en"]');
    let langGrElements = document.querySelectorAll('[data-lang="gr"]');
    const currentLanguage = localStorage.getItem("language") || "gr";

    function enableGreek() {
        langEnElements.forEach(el => el.style.display = 'none')
        langGrElements.forEach(el => el.style.display = '')
    }

    function enableEnglish() {
        langEnElements.forEach(el => el.style.display = '')
        langGrElements.forEach(el => el.style.display = 'none')
    }

    if (currentLanguage === "en") {
        languageToggleInput.checked = true
        enableEnglish()
    }
    else {
        languageToggleInput.checked = false
        enableGreek()
    }

    languageToggleInput.addEventListener("change", () => {
        if (languageToggleInput.checked) {
            localStorage.setItem("language", "en");
            enableEnglish()
        }
        else {
            localStorage.setItem("language", "gr");
            enableGreek()
        }
    });

    menuButtonController.checked = false;

    menuButtonController.addEventListener("change", () => {
        mainNav.classList.toggle("show-nav")
    })
});
