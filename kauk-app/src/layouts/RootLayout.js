
import { NavLink, Outlet, Link } from "react-router-dom"

import Logo from "../images/Logo-dark.svg"

import { LocationIcon } from "../SvgIcons"
import { EnvelopeIcon } from "../SvgIcons"
import { TelephoneIcon } from "../SvgIcons"
import { FacebookIcon } from "../SvgIcons"
import { InstagramIcon } from "../SvgIcons"
import { TwitterIcon } from "../SvgIcons"

import '../styles/RootLayout.css'

import { menuLinks } from "../data"
import { allServices } from "../data"

export default function RootLayout() {

    function setPreferedLanguage(lang) {
        localStorage.setItem('lang', lang);
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
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    {
                                        menuLinks.map((item, ind) => (
                                            <li key={item.label} className="nav-item">
                                                <NavLink className="nav-link text-light mx-1" aria-current="page" to={item.to}>
                                                    {item.label}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="language-switcher d-flex align-items-center justify-content-center">
                                    <button className="btn btn-outline-light btn-sm" onClick={() => setPreferedLanguage("gr")}>
                                        GR
                                    </button>
                                    <span className="text-light mx-2">|</span>
                                    <button className="btn btn-outline-light btn-sm" onClick={() => setPreferedLanguage("en")}>
                                        EN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="bg-primary text-light fs-5">
                <Outlet />
            </main>
            <footer className="footer bg-primary py-5 text-light fw-light fs-6 px-2">
                <div className="row align-items-stretch justify-content-start justify-content-lg-center row-gap-4">
                    <div className="col-auto d-flex align-items-center justify-content-center">
                        <div>
                            <div className="text-center">
                                <img src={Logo} className="logo-img" alt="site logo" />
                            </div>
                            <div className="text-center my-3">
                                <Link to="/contact" className="btn btn-outline-secondary btn-md">Κλείσε ραντεβού τώρα</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            Οι Υπηρεσίες Μας
                        </h1>
                        <ul>
                            {
                                allServices.map(item => (
                                    <li key={item.title}>{item.title}</li>
                                ))
                            }
                        </ul>
                        <p className="mt-2"><Link to="/services" className="text-light text-underline">Μάθετε περισσότερα</Link></p>
                    </div>
                    <div className="col-auto">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            Ωράριο Εργασίας
                        </h1>
                        <ul>
                            <li>Δευτ. - Σαβ: 08:00 - 16:00</li>
                            <li>Κυρ. - Κλειστά</li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            Γρήγοροι Σύνδεσμοι
                        </h1>
                        <ul>
                            {
                                menuLinks.map(item => (
                                    <li key={item.label}>
                                        <Link className="text-light fw-light" to={item.to}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-auto">
                        <h1 className="text-secondary fs-5 fw-semibold">
                            Πληροφορίες Επικοινωνίας
                        </h1>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-secondary p-2 my-2">
                                <LocationIcon />
                            </div>
                            <p className="m-0">Μηνά Βίστα 33, Θεσσαλονίκη</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-secondary p-2 my-2">
                                <TelephoneIcon />
                            </div>
                            <p className="m-0">+30 6982972144</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-secondary p-2 my-2">
                                <EnvelopeIcon />
                            </div>
                            <p className="m-0">gypsodomiki@lagarakis.gr</p>
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
