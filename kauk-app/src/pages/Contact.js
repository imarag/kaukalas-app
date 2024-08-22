import { useState } from "react";

import "../styles/Contact.css"

import CompanyMap from "../images/company-map-location.png"

import Accordion from '../components/Accordion';

import { BiInstagram } from "../SvgIcons"
import { BiFacebook } from "../SvgIcons"
import { BiTwitter } from "../SvgIcons"
import { BiTelephone } from "../SvgIcons";
import { BiEnvelopeFill } from "../SvgIcons";
import { Location } from "../SvgIcons";
import { Time } from "../SvgIcons";

import { qaList } from '../data';

function CompanyInfoCard({title, info, children}) {
    return (
        <div>
            <div className="company-info-card">
                <div className="company-info-card__item">
                    { children }
                </div>
                <div className="company-info-card__item">
                    <h1 className="company-info-card__title">{ title }</h1>
                    <p className="company-info-card__info">{ info }</p>
                </div>
            </div>
        </div>
    )
}

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
        <>
            <section className="contact-form form">
                <h1 className="form__title">Επικοινωνίστε Μαζί Μας</h1>
                <div className="form__content">
                    <form className="form">
                        <div className="form__element">
                            <label className="form__label" htmlFor="name">ΟΝΟΜΑ</label>
                            <input className="form__textinput" type="text" id="name" placeholder="π.χ. Ιωάννης"/>
                        </div>
                        <div className="form__element">
                            <label className="form__label" htmlFor="surname">ΕΠΙΘΕΤΟ</label>
                            <input className="form__textinput" type="text" id="surname" placeholder="π.χ. Μαραγκάκης"/>
                        </div>
                        <div className="form__element">
                            <label className="form__label" htmlFor="comments">ΣΧΟΛΙΑ</label>
                            <textarea className="form__textarea" rows="5" placeholder="Πληκτρολογήστε τα σχόλιά σας">

                            </textarea>
                        </div>
                        <button className="btn btn--dark btn--medium">Αποστολή</button>
                    </form>
                </div>
            </section>
            <section className="contact contact-info">
                <div className="container">
                    <h1 className="contact__title">Στοιχεία Επικοινωνίας</h1>
                    <CompanyInfoCard title="Τηλέφωνο Επικοινωνίας" info="+306982972144">
                        <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                            <BiTelephone classParam="icon__svg icon__svg--small icon__svg--light" />
                        </div>
                    </CompanyInfoCard>
                    <CompanyInfoCard title="Ηλεκτρονική Διεύθυνση" info="giannis.marar@hotmail.com">
                        <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                            <BiEnvelopeFill classParam="icon__svg icon__svg--small icon__svg--light" />
                        </div>
                    </CompanyInfoCard>
                </div>
            </section>
            <section className="contact company-info">
                <div className="container">
                    <h1 className="contact__title">Η Εταιρεία Μας</h1>
                    <CompanyInfoCard title="Τοποθεσία" info="Μηνα Βίστα 33, Θεσσαλονίκη, 73005">
                        <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                            <Location classParam="icon__svg icon__svg--small icon__svg--light" />
                        </div>
                    </CompanyInfoCard>
                    <CompanyInfoCard title="Ωρες Λειτουργίας" info="Δευτ. - Παρ. 08:00 AM - 06:00 PM">
                        <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                            <Time classParam="icon__svg icon__svg--small icon__svg--light" />
                        </div>
                    </CompanyInfoCard>
                    <div className="company-info__map">
                        <img className="section__image section__image--small" src={CompanyMap} alt="company map" />
                    </div>
                </div>
            </section>
            <section className="contact social-media">
                <div className="container">
                    <h1 className="contact__title">Social Media</h1>
                    <div className="social-media__container">
                        <div className="social-media__item">
                            <div className="icon">
                                <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                                    <BiInstagram classParam="icon__svg icon__svg--small icon__svg--light" />
                                </div>
                            </div>
                        </div>
                        <div className="social-media__item">
                            <div className="icon">
                                <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                                    <BiFacebook classParam="icon__svg icon__svg--small icon__svg--light" />
                                </div>
                            </div>
                        </div>
                        <div className="social-media__item">
                            <div className="icon">
                                <div className="icon__container icon__container--dark icon__container--medium icon__container--pill">
                                    <BiTwitter classParam="icon__svg icon__svg--small icon__svg--light" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact company-faq">
                <div className="container">
                    <h1 className="contact__title">Συχνές Ερωτήσεις</h1>
                    <div className="accordion">
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
        </>
    )
}