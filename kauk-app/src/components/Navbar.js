import { NavLink } from "react-router-dom"

import '../styles/Navbar.css'

import Logo from "../images/Logo.svg"

export default function Navbar({ className = "nav-secondary"}) {
    return (
        <nav className={className}>
            <NavLink className="logo" to="/">
                <img src={Logo} alt="logo of the page"/>
            </NavLink>
            <NavLink className="nav-link" to="/">Αρχική Σελίδα</NavLink>
            <NavLink className="nav-link" to="/about">Σχετικά με εμάς</NavLink>
            <NavLink className="nav-link" to="/gallery">Τα έργα μας</NavLink>
            <NavLink className="nav-link" to="/services">Οι υπηρεσίες μας</NavLink>
            <NavLink className="nav-link" to="/contact">Επικοινωνία</NavLink>
        </nav>
    )
}