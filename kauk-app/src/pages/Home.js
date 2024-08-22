import '../styles/Home.css'

import MainServiceImage from "../images/main-service.png"
import CTAImage from "../images/cta-image.png"
import ClientsImage from "../images/clients.png"
import UserImage from "../images/user.png"

import {galleryImages} from "../data"
import {testimonyData} from "../data"

export default function Home() {
    return (
        <>
            <section className="section hero">
                <div className="container">
                    <h1 className="hero__title">GK Pool & Villas<br />Services</h1>
                    <h2 className="hero__subtitle">Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα</h2>
                    <button className="hero__button btn btn--large btn--dark btn--center">Κλείστε ραντεβού τώρα</button>
                </div>
            </section>
            <section className="section services">
                <div className="container">
                    <div className="services__container">
                        <div className="services__item">
                            <h1 className="section__title">Αξιόπιστες Υπηρεσίες Συντήρησης Και Καθαρισμού Πισίνας</h1>
                            <p className="section__paragraph">
                                Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών 
                                καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα 
                                καθαρή και ασφαλής. Η έμπειρη ομάδα μας παρέχει αξιόπιστες και 
                                αποτελεσματικές λύσεις που ικανοποιούν τις ανάγκες σας.
                            </p>
                        </div>
                        <div className="services__item">
                            <img className="section__image" src={MainServiceImage} alt=" " />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--dark gallery">
                <div className="container">
                    <h1 className="section__title">Τα Εργα Μας</h1>
                    <h2 className="section__subtitle">Ανακαλύψτε τις υπηρεσίες καθαρισμού πισίνας μας μέσα από την συλλογή φωτογραφιών πριν και μετά τον καθαρισμό</h2>
                    <div className="gallery__container">
                        {
                            galleryImages.map(image => (
                                <div className="gallery__item">
                                    <img className="section__image" src={image} alt="gallery" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="section cta">
                <div className="container">
                <div className="cta__container">
                    <div className="cta__item">
                            <img className="section__image" src={CTAImage} alt="contact me" />
                        </div>
                        <div className="cta__item">
                            <h1 className="section__title">Επικοινωνήστε για να κλείσετε ραντεβού τώρα</h1>
                            <p className="section__paragraph">
                                Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας. Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσετε το επόμενο ραντεβού σας.
                            </p>
                            <button className="btn btn--medium btn--dark cta__button">Κλείστε ραντεβού τώρα</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--dark clients">
                <div className="container">
                    <h1 className="section__title">Οι Πελάτες Μας</h1>
                    <h2 className="section__subtitle">Οργανισμοί που έχουν εμπιστευτεί την εταιρεία μας για τις υπηρεσίες που προσφέρουμε</h2>
                    <div>
                        <img className="section__image" src={ClientsImage} alt="image of the company's clients" />
                    </div>
                </div>
            </section>
            <section className="section testimonials">
                <div className="container">
                    <h1 className="section__title section__title--center">Σχόλια Πελατών</h1>
                    <h2 className="section__subtitle section__subtitle--center">Οι απόψεις των πελατών μας για τις υπηρεσίες μας </h2>
                    <div className="testimonials__container">
                        {
                            testimonyData.map(person => (
                                <div key={person.name} className="testimonial">
                                    <img src={UserImage} className="avatar avatar--medium" />
                                    <h1 className="testimonial__title">{person.name}</h1>
                                    <h2 className="testimonial__subtitle">{person.profession}</h2>
                                    <p className="testimonial__quotation card__quotation--start">🙶</p>
                                    <p className="testimonial__paragraph">{person.description}</p>
                                    <p className="testimonial__quotation testimonial__quotation--end">🙸</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
