import { NavLink, Outlet, Link } from "react-router-dom"

import Logo from "../images/Logo.svg"
import LogoDark from "../images/Logo-dark.svg"

import { LinkIcon } from "../SvgIcons"
import { CloseX } from "../SvgIcons"

import '../styles/RootLayout.css'

import { menuLinks } from "../data"

export default function RootLayout() {

    function handleMenuButtonClick() {
        const navOffcanvas = document.querySelector(".nav-offcanvas")
        navOffcanvas.classList.toggle("visible");
    }

    function handleOffCanvasCloseButton() {
        const navOffcanvas = document.querySelector(".nav-offcanvas")
        navOffcanvas.classList.remove("visible");
    }

    function handleOffCanvasLinkClick() {
        const navOffcanvas = document.querySelector(".nav-offcanvas")
        navOffcanvas.classList.remove("visible");
    }

    return (
        <>
            <nav className="nav-offcanvas">
                <div className="nav-offcanvas__menu">
                    <Link to="/" className="nav-offcanvas__logo">
                        <img className="nav-offcanvas__logo-img" src={LogoDark} alt="logo of the page"/>
                    </Link>
                    <button className="nav-offcanvas__closebutton" onClick={handleOffCanvasCloseButton}>
                        <CloseX classParam="nav-offcanvas__closebutton-svg" />
                    </button>
                </div>
                <ul className="nav-offcanvas__list">
                    {
                        menuLinks.map(item => (
                            <li className="nav-offcanvas__item" key={ item["label"] }>
                                <NavLink className="nav-offcanvas__link" to={ item["to"] } onClick={handleOffCanvasLinkClick}>
                                    <LinkIcon classParam="nav-offcanvas__link-svg" />
                                    <span>
                                        { item["label"] }
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className="nav">
                <div className="nav__logo">
                    <Link to="/">
                        <img className="nav__logo-img" src={LogoDark} alt="logo of the page"/>
                    </Link>
                </div>
                <ul className="nav__list">
                    {
                        menuLinks.map(item => (
                            <li className="nav__item" key={ item["label"] }>
                                <NavLink className="nav__link" to={ item["to"] }>
                                    { item["label"] }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button className="nav_menubutton" onClick={handleMenuButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list nav_menubutton-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className="footer fs-small bg-primary text-light padding-inline-600 padding-block-600">
                <div className="flex align-items-stretch">
                    <div className="flex-basis-100 flex-basis-lg-0 flex-grow-1 flex align-items-center justify-content-center">
                        <div className=" ">
                            <div className="footer__logo">
                                <img className="footer__logo-img" src={Logo} alt="logo of the page"/>
                            </div>
                            <div className="flex align-items-center margin-top-400">
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </div>
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                </div>
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-basis-100 flex-basis-lg-0 flex-grow-1">
                        <h1 className="fs-body fw-bold margin-bottom-200">Σχετικά με την εταιρία</h1>
                        <p className="fs-small fw-light">
                            Στην GK POOL & VILLAS SERVICES, προσφέρουμε οικολογικές λύσεις καθαρισμού πισίνας με εξαιρετικά εκπαιδευμένο προσωπικό για να εξασφαλίσουμε ότι η πισίνα σας είναι πάντα άψογη.
                       </p>
                    </div>
                    <div className="flex-basis-100 flex-basis-lg-0 flex-grow-1">
                        <h1 className="fs-body fw-bold margin-bottom-200">Sitemap</h1>
                        <ul>
                            <li className="flex align-items-center margin-bottom-200">
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div>
                                <div className="flex-grow-1">
                                    <NavLink className="text-light" to="/">Αρχική Σελίδα</NavLink>
                                </div>
                            </li>
                            <li className="flex align-items-center margin-bottom-200">
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div>
                                <div className="flex-grow-1">
                                    <NavLink className="text-light" to="/about">Σχετικά με εμάς</NavLink>
                                </div>
                            </li>
                            <li className="flex align-items-center margin-bottom-200">
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div>
                                <div className="flex-grow-1">
                                    <NavLink className="text-light" to="/gallery">Τα έργα μας</NavLink>
                                </div>
                            </li>
                            <li className="flex align-items-center margin-bottom-200">
                                <div className="flex-grow-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div>
                                <div className="flex-grow-1">
                                    <NavLink className="text-light" to="/contact">Επικοινωνία</NavLink>
                                </div>
                            </li> 
                        </ul>
                    </div>
                    <div className="flex-basis-100 flex-basis-lg-0 flex-grow-1">
                        <h1 className="fs-body fw-bold margin-bottom-200">Πληροφορίες Επικοινωνίας</h1>
                        <div className="flex flex-no-wrap align-items-stretch margin-bottom-200">
                            <div className="flex-grow-0 flex-basis-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                            </div>
                            <div className="flex-grow-1 flex-basis-0">
                                <p className="no-break">
                                    Μηνά Βίστα 33, Θεσσαλονίκη
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-no-wrap align-items-stretch margin-bottom-200">
                            <div className="flex-grow-0 flex-basis-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                            </div>
                            <div className="flex-grow-1 flex-basis-0">
                                <p className="no-break">
                                    +30 6982972144
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-no-wrap align-items-stretch margin-bottom-200">
                            <div className="flex-grow-0 flex-basis-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon__svg--light icon__svg--small" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                </svg>
                            </div>
                            <div className="flex-grow-1 flex-basis-0">
                                <p className="no-break">
                                    info@yourcompany.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
