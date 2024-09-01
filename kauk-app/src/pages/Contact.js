import { useState } from "react";

import "../styles/Contact.css"

import Accordion from "../components/Accordion.js"

import CompanyMap from "../images/company-map-location.png"

import { BiInstagram } from "../SvgIcons"
import { BiFacebook } from "../SvgIcons"
import { BiTwitter } from "../SvgIcons"
import { BiTelephone } from "../SvgIcons";
import { BiEnvelopeFill } from "../SvgIcons";
import { Location } from "../SvgIcons";
import { Time } from "../SvgIcons";

import { qaList } from '../data';

import CompanyInfoCard from "../components/CompanyInfoCard.js";

export default function Contact() {
    const [accordionShownId, setAccordionShownId] = useState(null)

    function handleClickAccordion(index) {
        if (index === accordionShownId) {
            setAccordionShownId(null)
        }
        else {
            setAccordionShownId(index)
        }
    }

    return (
        <div className="Contact">
            <section className="form-section mt-nav-height">
                <form className="form">
                    <h1 className="form-title">Επικοινωνίστε Μαζί Μας</h1>
                    <div className="form-element">
                        <label className="form-label" htmlFor="name">ΟΝΟΜΑ</label>
                        <input className="form-textinput" type="text" id="name" placeholder="π.χ. Ιωάννης"/>
                    </div>
                    <div className="form-element">
                        <label className="form-label" htmlFor="surname">ΕΠΙΘΕΤΟ</label>
                        <input className="form-textinput" type="text" id="surname" placeholder="π.χ. Μαραγκάκης"/>
                    </div>
                    <div className="form-element">
                        <label className="form-label" htmlFor="comments">ΣΧΟΛΙΑ</label>
                        <textarea className="form-textarea" rows="4" placeholder="Πληκτρολογήστε τα σχόλιά σας">

                        </textarea>
                    </div>
                    <button className="btn">Αποστολή</button>
                </form>
            </section>
            <section className="communication mt-very-big">
                <div className="container">
                    <h1 className="section-title">
                        Στοιχεία Επικοινωνίας
                    </h1>
                    <CompanyInfoCard title="Τηλέφωνο Επικοινωνίας" info="+306982972144">
                        <BiTelephone className="icon icon-dark"/>
                    </CompanyInfoCard>
                    <CompanyInfoCard title="Ηλεκτρονική Διεύθυνση" info="giannis.marar@hotmail.com">
                        <BiEnvelopeFill className="icon icon-dark"/>
                    </CompanyInfoCard>
                </div>
            </section>
            <section className="company my-6">
                <div className="container">
                    <h1 className="section-title">
                        Η Εταιρεία Μας
                    </h1>
                    <CompanyInfoCard title="Τοποθεσία" info="Μηνα Βίστα 33, Θεσσαλονίκη, 73005">
                        <Location className="icon icon-dark"/>
                    </CompanyInfoCard>
                    <CompanyInfoCard title="Ωρες Λειτουργίας" info="Δευτ. - Παρ. 08:00 AM - 06:00 PM">
                        <Time className="icon icon-dark"/>
                    </CompanyInfoCard>
                    <div className="mt-5">
                        <img className="image map" src={CompanyMap} alt="company map" />
                    </div>
                </div>
            </section>
            <section className="contact-social-media my-6">
                <div className="container">
                    <h1 className="section-title">
                        Κοινωνικά Μέσα Δικτύωσης
                    </h1>
                    <div className="contact-social-media-container">
                        <div>
                            <BiInstagram className="icon icon-dark"/>
                        </div>
                        <div>
                            <BiFacebook className="icon icon-dark"/>
                        </div>
                        <div>
                            <BiTwitter className="icon icon-dark"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq my-6">
                <div className="container">
                    <h1 className="section-title">
                        Συχνές Ερωτήσεις
                    </h1>
                    <div className="mt-5 container">
                        {
                            qaList.map((item, index) => (
                                <div key = {item.question} onClick={() => handleClickAccordion(index)}>
                                    <Accordion
                                        question = {item.question}
                                        answer = {item.answer}
                                        show = {accordionShownId === index}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}