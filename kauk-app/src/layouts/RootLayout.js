
import { NavLink, Outlet, Link } from "react-router-dom"
import { useState } from "react"
import Logo from "../images/Logo-dark.svg"
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
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute start-0 end-0 top-0 py-4">
                    <div className="container-lg">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} className="logo-img" alt="logo of the page" />
                        </Link>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="ms-3 ms-lg-0 navbar-nav justify-content-end flex-grow-1 pe-3">
                                    {
                                        menuLinks.map((item, ind) => (
                                            <li key={item.label} className="nav-item">
                                                <NavLink className="nav-link text-light mx-1" aria-current="page" to={item.to} onClick={closeOffCanvas}>
                                                    {currentLang === "gr" ? item.label : item.labelEn}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="mt-3 mt-lg-0 ms-3 ms-lg-0 language-switcher d-flex align-items-center justify-content-start">
                                    <button className="btn btn-outline-light btn-sm" onClick={() => switchLanguage("gr")}>
                                        GR
                                    </button>
                                    <span className="text-light mx-2">|</span>
                                    <button className="btn  btn-outline-light btn-sm" onClick={() => switchLanguage("en")}>
                                        EN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="bg-primary text-light fs-5">
                <Outlet context={[currentLang, setCurrentLang]}/>
            </main>
            <footer className="footer bg-primary py-5 text-light fw-light fs-6 container-fluid py-5">
                <div className="row row-cols-1 row-cols-sm-auto align-items-stretch justify-content-center  g-4">
                    <div className="col d-flex align-items-center justify-content-center">
                        <div>
                            <div className="text-center">
                                <img src={Logo} className="logo-img" alt="site logo" />
                            </div>
                            <div className="text-center my-3">
                                <Link to="/contact" className="btn btn-outline-secondary btn-md">
                                    {currentLang === "gr" ? "Κλείσε ραντεβού τώρα" : "Book an appointment now"}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-block d-xl-none"></div>
                    <div className="col ">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            {currentLang === "gr" ? "Οι Υπηρεσίες Μας" : "Our Services"}
                        </h1>
                        <ul>
                            {
                                allServices.map(item => (
                                    <li key={item.title}>
                                        {currentLang === "gr" ? item.title : item.titleEn}
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="mt-2">
                            <Link to="/services" className="text-light text-underline">
                                {currentLang === "gr" ? "Μάθετε περισσότερα" : "Learn more"}
                            </Link>
                        </p>
                    </div>
                    <div className="col ">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            {currentLang === "gr" ? "Ωράριο Εργασίας" : "Working Hours"}
                        </h1>
                        <ul>
                            <li>
                                {currentLang === "gr" ? "Δευτ. - Κυρ. 09:00 - 17:00" : "Mon. - Sun. 09:00 - 17:00"}
                            </li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            {currentLang === "gr" ? "Γρήγοροι Σύνδεσμοι" : "Quick Links"}
                        </h1>
                        <ul>
                            {
                                menuLinks.map(item => (
                                    <li key={item.label}>
                                        <Link className="text-light fw-light" to={item.to}>
                                            {currentLang === "gr" ? item.label : item.labelEn}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col ">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            {currentLang === "gr" ? "Πληροφορίες Επικοινωνίας" : "Contact Information"}
                        </h1>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-secondary p-2 my-2">
                                <LocationIcon />
                            </div>
                            <p className="m-0">
                                {currentLang === "gr" ? "Μηνά Βίστα 33, Θεσσαλονίκη" : "Mina Bista 33, Thessaloniki"}
                            </p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-secondary p-2 my-2">
                                <TelephoneIcon />
                            </div>
                            <p className="m-0">+30 6973341740</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-secondary p-2 my-2">
                                <EnvelopeIcon />
                            </div>
                            <p className="m-0">giannis.marar@hotmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                    <div className="d-flex align-items-center justify-content-center bg-secondary p-2 my-2 rounded-circle">
                        <FacebookIcon />
                    </div>
                    <div className="d-flex align-items-center justify-content-center bg-secondary p-2 my-2 rounded-circle">
                        <InstagramIcon />
                    </div>
                    <div className="d-flex align-items-center justify-content-center bg-secondary p-2 my-2 rounded-circle">
                        <TwitterIcon />
                    </div>
                </div>
            </footer>
        </>
    )
}
