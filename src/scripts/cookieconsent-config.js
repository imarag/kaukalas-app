import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "We value your privacy",
                    description:
                        "This website uses cookies to ensure basic functionality and to analyze site usage. You can choose to accept all cookies or manage your preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Only necessary",
                    showPreferencesBtn: "Manage preferences",
                    footer:
                        "<a href=\"/privacy-policy\">Privacy Policy</a>\n<a href=\"/terms\">Terms of Service</a>"
                },
                preferencesModal: {
                    title: "Privacy Preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Only necessary",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "About cookies",
                            description:
                                "Cookies help us provide a better experience. You can manage your preferences below. Necessary cookies are always active."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description:
                                "These cookies are required for the website to function properly and cannot be disabled.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description:
                                "These cookies help us understand how visitors interact with the website so we can improve user experience.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description:
                                "If you have any questions regarding our cookie policy, please <a class=\"cc__link\" href=\"/contact\">contact us</a>."
                        }
                    ]
                }
            }
        }
    }
});
