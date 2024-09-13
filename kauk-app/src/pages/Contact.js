
import "../styles/Contact.css"

import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import ContactForm from "../components/ContactForm"

import { LocationIcon } from "../SvgIcons"
import { EnvelopeIcon } from "../SvgIcons"
import { TelephoneIcon } from "../SvgIcons"

export default function Contact() {
    return (
        <div className="Contact">
            <section className="pt-nav-height">
                <div className="container-lg">
                    <Title text="ΕΠΙΚΟΙΝΩΝΙΣΤΕ ΜΑΖΙ ΜΑΣ" />
                    <SubTitle text="Η ομάδα μας είναι έτοιμη να σας εξυπηρετήσει και να σας βοηθήσει με ό,τι χρειάζεστε, με στόχο την καλύτερη εξυπηρέτησή σας" />
                    <div className="row justify-content-center py-2">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 bg-tertiary rounded p-5">
                            <div className="fs-6 row align-items-center justify-content-start justify-content-md-center row-gap-4 my-2">
                                <div className="col-12 col-md-4 d-flex flex-column gap-2 align-items-center">
                                    <div className="d-flex align-items-center bg-light p-2 my-1">
                                        <LocationIcon className="icon icon-medium" />
                                    </div>
                                    <p className="m-0">Μηνά Βίστα 33, Θεσσαλονίκη</p>
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column gap-2 align-items-center">
                                    <div className="d-flex align-items-center bg-light p-2 my-1">
                                        <TelephoneIcon className="icon icon-medium" />
                                    </div>
                                    <p className="m-0">+30 6982972144</p>
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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}