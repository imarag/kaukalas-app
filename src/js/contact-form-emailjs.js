import emailjs from "@emailjs/browser";

const alertComponent = document.querySelector("#alert-component");
const alertErrorIcon = alertComponent.querySelector("#alert-error-icon");
const alertSuccessIcon = alertComponent.querySelector("#alert-success-icon");
const spinner = document.querySelector("#spinner");
const emailField = document.querySelector("#email-field");
const messageField = document.querySelector("#message-field");
const languageToggleInput = document.querySelector('#language-container input');

const emailInput = emailField.querySelector("input[type='email']");
const messageInput = messageField.querySelector("textarea");
const emailInputErrorMessage = emailField.querySelector(".error");
const messageInputErrorMessage = messageField.querySelector(".error");

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const messages = {
    en: {
        "email-sent": "Your message has been successfully sent!",
        "email-not-sent": "There was an issue sending your message. Please try again!",
        "email-empty": "Email cannot be left empty.",
        "invalid-email": "Please provide a valid email address.",
        "message-empty": "Message cannot be left empty.",
        "message-short": "Message should be at least 8 characters long."
    },
    gr: {
        "email-sent": "Το μήνυμα έχει αποσταλεί με επιτυχία!",
        "email-not-sent": "Παρουσιάστηκε πρόβλημα με την αποστολή του μηνύματος. Δοκιμάστε ξανά!",
        "email-empty": "Το email δεν μπορεί να είναι κενό.",
        "invalid-email": "Πρέπει να εισάγετε μια έγκυρη διεύθυνση email.",
        "message-empty": "Το μήνυμα δεν μπορεί να είναι κενό.",
        "message-short": "Το μήνυμα πρέπει να έχει τουλάχιστον 8 χαρακτήρες."
    }
};

(function () {
    emailjs.init({
        publicKey: publicKey,
    });
})();

function showAlert(type) {
    const language = languageToggleInput.checked ? 'en' : 'gr';
    const message = type === "success" ? messages[language]["email-sent"] : messages[language]["email-not-sent"];
    const alertBgColor = type === "success" ? "bg-success/85" : "bg-error/85";

    alertComponent.classList.remove("-translate-y-full");
    alertComponent.classList.add("translate-y-0", alertBgColor);
    alertComponent.setAttribute("aria-hidden", false);
    alertComponent.querySelector("#alert-message").textContent = message;

    if (type === "success") {
        alertErrorIcon.style.display = "none";
        alertSuccessIcon.style.display = "flex"
    } else {
        alertErrorIcon.style.display = "flex";
        alertSuccessIcon.style.display = "none"
    }

    setTimeout(() => {
        alertComponent.classList.remove("translate-y-0", alertBgColor);
        alertComponent.classList.add("-translate-y-full");
        alertComponent.setAttribute("aria-hidden", true);
    }, 5000);
}

function activateSpinner() {
    spinner.style.display = "flex"
}

function deactivateSpinner() {
    spinner.style.display = "none"
}

function formIsValid() {
    emailInputErrorMessage.textContent = "";
    messageInputErrorMessage.textContent = "";
    const emailRegexValidation = /^[\w\.+-]+@([\w-]+\.)+[a-zA-Z]{2,}$/;

    const languageSelected = languageToggleInput.checked ? 'en' : 'gr';
    let isValid = true;

    if (emailInput.value.trim() === "") {
        emailInputErrorMessage.textContent = messages[languageSelected]["email-empty"];
        isValid = false;
    }

    if (!emailRegexValidation.test(emailInput.value)) {
        emailInputErrorMessage.textContent = messages[languageSelected]["invalid-email"];
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        messageInputErrorMessage.textContent = messages[languageSelected]["message-empty"];
        isValid = false;
    }

    if (messageInput.value.trim().length < 8) {
        messageInputErrorMessage.textContent = messages[languageSelected]["message-short"];
        isValid = false;
    }

    if (isValid) {
        emailInputErrorMessage.textContent = "";
        messageInputErrorMessage.textContent = "";
    }

    return isValid;
}

window.onload = function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            activateSpinner();

            let isValid = formIsValid();
            if (!isValid) {
                deactivateSpinner();
                return;
            }

            emailjs.sendForm(serviceId, templateId, this).then(
                () => {
                    showAlert("success");
                    deactivateSpinner();
                },
                (error) => {
                    showAlert("error");
                    deactivateSpinner();
                }
            );
        });
};
