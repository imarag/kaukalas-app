
import { NavLink, Outlet, Link } from "react-router-dom"
import { useState } from "react"
import Logo from "../images/logo.svg"
import { useEffect } from "react"
import { LocationIcon } from "../SvgIcons"
import { EnvelopeIcon } from "../SvgIcons"
import { TelephoneIcon } from "../SvgIcons"
import { FacebookIcon } from "../SvgIcons"
import { InstagramIcon } from "../SvgIcons"
import { TwitterIcon } from "../SvgIcons"
import { useLocation } from "react-router-dom"
import '../styles/RootLayout.css'

import { menuLinks } from "../data"
import { allServices } from "../data"

export default function RootLayout() {
    const [currentLang, setCurrentLang] = useState("gr");
    const [sidebarActive, setSidebarActive] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    function closeOffCanvas() {
        let btnNavCloseButton = document.querySelector(".btn-close");
        if (btnNavCloseButton) {
            btnNavCloseButton.click();
        }
    }

    function switchLanguage(lang) {
        setCurrentLang(lang)
        closeOffCanvas()
    }

    return (
        <>
            <header className="py-3 px-8 absolute left-0 right-0 text-light">
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <Link to="/" className="navbar-brand me-1">
                            <img src={Logo} className="logo-img" alt="logo of the page" />
                        </Link>
                    </div>
                    <nav className={`fixed z-50 lg:hidden bg-primary/50 backdrop-blur-lg shadow-lg top-0 right-0 bottom-0 transition-all duration-500 overflow-hidden whitespace-nowrap ${sidebarActive ? "w-full md:w-80" : "w-0"}`}>
                        <div className="flex flex-row items-center justify-between px-6 py-4">
                            <button onClick={() => setSidebarActive(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 fill-light">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex items-center justify-start">
                                <button className="border-transparent hover:border-slate-200 border-2 inline-block py-2 px-4 rounded transition-colors duration-300 ease-in-out;" onClick={() => switchLanguage("gr")}>
                                    GR
                                </button>
                                <span className="mx-2">|</span>
                                <button className="border-transparent hover:border-slate-200 border-2 inline-block py-2 px-4 rounded transition-colors duration-300 ease-in-out;" onClick={() => switchLanguage("en")}>
                                    EN
                                </button>
                            </div>
                        </div>
                        <ul className="flex flex-col h-full items-center justify-center gap-x-5">
                            {
                                menuLinks.map((item, ind) => (
                                    <li key={item.label} className="nav-item">
                                        <NavLink className="inline-block px-3 py-2 rounded hover:bg-light/15" aria-current="page" to={item.to} onClick={() => setSidebarActive(false)}>
                                            {currentLang === "gr" ? item.label : item.labelEn}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                    </nav>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center justify-center gap-x-5">
                            {
                                menuLinks.map((item, ind) => (
                                    <li key={item.label} className="nav-item">
                                        <NavLink className="inline-block px-3 py-2 rounded hover:bg-light/15" aria-current="page" to={item.to} onClick={() => setSidebarActive(false)}>
                                            {currentLang === "gr" ? item.label : item.labelEn}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <button className="menu-toggle-button p-3 lg:hidden" onClick={() => setSidebarActive(!sidebarActive)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <div className="hidden lg:block flex items-center justify-start">
                        <button className="border-transparent hover:border-slate-200 border-2 inline-block py-2 px-4 rounded transition-colors duration-300 ease-in-out;" onClick={() => switchLanguage("gr")}>
                            GR
                        </button>
                        <span className="mx-2">|</span>
                        <button className="border-transparent hover:border-slate-200 border-2 inline-block py-2 px-4 rounded transition-colors duration-300 ease-in-out;" onClick={() => switchLanguage("en")}>
                            EN
                        </button>
                    </div>
                </div>

            </header>
            <main className="bg-primary text-light fs-5">
                <Outlet context={[currentLang]} />
            </main>
            <footer className="bg-primary text-light font-light text-base container-lg py-5 px-4">
                <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-8">
                    <div className="flex items-center justify-center">
                        <div>
                            <div className="text-center">
                                <img src={Logo} className="mx-auto size-20" alt="site logo" />
                            </div>
                            <div className="text-center my-8">
                                <Link to="/contact" className="btn btn-outline-secondary btn-small">
                                    {currentLang === "gr" ? "Κλείσε ραντεβού τώρα" : "Book an appointment now"}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-secondary text-xl font-semibold">
                            {currentLang === "gr" ? "Οι Υπηρεσίες Μας" : "Our Services"}
                        </h1>
                        <ul>
                            {allServices.map((item) => (
                                <li key={item.title}>{currentLang === "gr" ? item.title : item.titleEn}</li>
                            ))}
                        </ul>
                        <p className="mt-2">
                            <Link to="/services" className="text-light underline">
                                {currentLang === "gr" ? "Μάθετε περισσότερα" : "Learn more"}
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h1 className="text-secondary text-xl font-semibold">
                            {currentLang === "gr" ? "Ωράριο Εργασίας" : "Working Hours"}
                        </h1>
                        <ul>
                            <li>{currentLang === "gr" ? "Δευτ. - Κυρ. 09:00 - 17:00" : "Mon. - Sun. 09:00 - 17:00"}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-secondary text-xl font-semibold">
                            {currentLang === "gr" ? "Γρήγοροι Σύνδεσμοι" : "Quick Links"}
                        </h1>
                        <ul>
                            {menuLinks.map((item) => (
                                <li key={item.label}>
                                    <Link className="text-light font-light" to={item.to}>
                                        {currentLang === "gr" ? item.label : item.labelEn}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <address className="not-italic">
                            <h1 className="text-secondary text-xl font-semibold">
                                {currentLang === "gr" ? "Πληροφορίες Επικοινωνίας" : "Contact Information"}
                            </h1>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center bg-secondary p-2 my-2">
                                    <LocationIcon className="size-6 fill-primary" />
                                </div>
                                <p className="m-0">
                                    {currentLang === "gr" ? "Μηνά Βίστα 33, Θεσσαλονίκη" : "Mina Bista 33, Thessaloniki"}
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center bg-secondary p-2 my-2">
                                    <TelephoneIcon className="size-6 fill-primary" />
                                </div>
                                <p className="m-0">+30 6973341740</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center bg-secondary p-2 my-2">
                                    <EnvelopeIcon className="size-6 fill-primary" />
                                </div>
                                <p className="m-0">giannis.marar@hotmail.com</p>
                            </div>
                        </address>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-8">
                    <div className="flex items-center justify-center bg-secondary p-2 my-2 rounded-full">
                        <FacebookIcon className="size-6 fill-primary" />
                    </div>
                    <div className="flex items-center justify-center bg-secondary p-2 my-2 rounded-full">
                        <InstagramIcon className="size-6 fill-primary" />
                    </div>
                    <div className="flex items-center justify-center bg-secondary p-2 my-2 rounded-full">
                        <TwitterIcon className="size-6 fill-primary" />
                    </div>
                </div>
            </footer>

        </>
    )
}
