document.addEventListener("DOMContentLoaded", () => {
    const menuButtonController = document.querySelector("#menu-button-controller");
    const mainNav = document.querySelector("#main-nav");
    const accordionItems = document.querySelectorAll(".accordion-item")
    const carouselContainers = document.querySelectorAll(".carousel-container");
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

        if (mainNav.classList.contains("show-nav")) {
            document.body.classList.add("overflow-y-hidden")
            menuButtonController.setAttribute('aria-expanded', 'true');
        }
        else {
            document.body.classList.remove("overflow-y-hidden")
            menuButtonController.setAttribute('aria-expanded', 'false');
        }
    })

    accordionItems.forEach(accordion => {
        const accordionBody = accordion.querySelector(".accordion-body")
        const plusIcon = accordion.querySelector(".plus-icon");
        const minusIcon = accordion.querySelector(".minus-icon");

        plusIcon.style.display = "flex";
        minusIcon.style.display = "none";

        accordionBody.classList.remove("show-accordion")
    })

    accordionItems.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const accordionBody = accordion.querySelector(".accordion-body")
            const plusIcon = accordion.querySelector(".plus-icon");
            const minusIcon = accordion.querySelector(".minus-icon");

            accordionBody.classList.toggle("show-accordion")

            if (accordionBody.classList.contains("show-accordion")) {
                plusIcon.style.display = "none";
                minusIcon.style.display = "flex";
            }
            else {
                plusIcon.style.display = "flex";
                minusIcon.style.display = "none";
            }

        })
    })



    carouselContainers.forEach(carousel => {
        const carouselButtonLeft = carousel.querySelector(".carousel-left");
        const carouselButtonRight = carousel.querySelector(".carousel-right");
        const allImages = carousel.querySelectorAll("img");
        const totalImages = allImages.length;
        let pad = 0;

        carouselButtonLeft.addEventListener("click", () => {
            if (pad < 0) {
                pad += 100
                allImages.forEach(image => {
                    image.style.transform = `translateX(${pad}%)`
                })
            }

            carouselButtonLeft.style.visibility = "visible";
            carouselButtonRight.style.visibility = "visible";

            if (pad === 0) {
                carouselButtonLeft.style.visibility = "hidden";
            }

        })

        carouselButtonRight.addEventListener("click", () => {
            if (pad > -(totalImages - 1) * 100) {
                pad -= 100
                allImages.forEach(image => {
                    image.style.transform = `translateX(${pad}%)`
                })
            }

            carouselButtonLeft.style.visibility = "visible";
            carouselButtonRight.style.visibility = "visible";

            if (pad === -(totalImages - 1) * 100) {
                carouselButtonRight.style.visibility = "hidden";
            }

        })
    })

});
