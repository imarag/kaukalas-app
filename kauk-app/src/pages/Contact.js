
import "../styles/Contact.css"
import { useOutletContext } from "react-router-dom"

import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import ContactForm from "../components/ContactForm"

import { LocationIcon } from "../SvgIcons"
import { EnvelopeIcon } from "../SvgIcons"
import { TelephoneIcon } from "../SvgIcons"

export default function Contact() {
    const [currentLang, setCurrentLang] = useOutletContext();
    
    return (
        <div className="Contact" id="Contact">
            <section className="pt-nav-height">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ" : "CONTACT US"} />
                    <SubTitle text={currentLang === "gr" ? 
                        "Η ομάδα μας είναι έτοιμη να σας εξυπηρετήσει και να σας βοηθήσει με ό,τι χρειάζεστε, με στόχο την καλύτερη εξυπηρέτησή σας" : 
                        "Our team is ready to assist you and help with whatever you need, aiming to provide the best service possible"} />
                        
                    <div className="row justify-content-center py-2">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 bg-tertiary rounded p-5">
                            <div className="fs-6 row align-items-center justify-content-start justify-content-md-center row-gap-4 my-2">
                                <div className="col-12 col-md-4 d-flex flex-column gap-2 align-items-center">
                                    <div className="d-flex align-items-center bg-light p-2 my-1">
                                        <LocationIcon className="icon icon-medium" />
                                    </div>
                                    <p className="m-0">
                                        {currentLang === "gr" ? "Μηνά Βίστα 33, Θεσσαλονίκη" : "Minas Vista 33, Thessaloniki"}
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column gap-2 align-items-center">
                                    <div className="d-flex align-items-center bg-light p-2 my-1">
                                        <TelephoneIcon className="icon icon-medium" />
                                    </div>
                                    <p className="m-0">+30 6973341740</p>
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column gap-2 align-items-center">
                                    <div className="d-flex align-items-center bg-light p-2 my-1">
                                        <EnvelopeIcon className="icon icon-medium" />
                                    </div>
                                    <p className="m-0">giannis.marar@hotmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center py-2">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 bg-tertiary rounded p-5">
                            <ContactForm currentLang={currentLang} />
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}