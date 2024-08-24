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
            <section className="hero">
                <div className="container">
                    <h1 className="fs-primary-heading text-light shadow-large fw-bold text-center margin-top-nav-height">GK Pool & Villas<br />Services</h1>
                    <h2 className="fs-primary-subheading text-light shadow-large fw-semibold text-center margin-top-400 margin-bottom-800">Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα</h2>
                    <button className="btn btn--large btn--dark btn--center">Κλείστε ραντεβού τώρα</button>
                </div>
            </section>
            <section className="section services">
                <div className="container">
                    <div className="grid grid-gap-large grid-lg-two-columns">
                        <div className="column">
                            <h1 className="fs-secondary-heading fw-bold text-center text-lg-start margin-bottom-300">Αξιόπιστες Υπηρεσίες Συντήρησης Και Καθαρισμού Πισίνας</h1>
                            <p className="fs-body text-center text-lg-start margin-bottom-800">
                                Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών 
                                καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα 
                                καθαρή και ασφαλής. Η έμπειρη ομάδα μας παρέχει αξιόπιστες και 
                                αποτελεσματικές λύσεις που ικανοποιούν τις ανάγκες σας.
                            </p>
                        </div>
                        <div className="column">
                            <img src={MainServiceImage} alt=" " />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section gallery bg-primary text-light">
                <div className="container">
                    <h1 className="fs-secondary-heading fw-bold text-center margin-bottom-300">Τα Εργα Μας</h1>
                    <h2 className="fs-subheading fw-regular text-center margin-bottom-800">Ανακαλύψτε τις υπηρεσίες καθαρισμού πισίνας μας μέσα από την συλλογή φωτογραφιών πριν και μετά τον καθαρισμό</h2>
                    <div className="grid grid-gap-small grid-two-columns">
                        {
                            galleryImages.map(image => (
                                <div className="column">
                                    <img className="section__image" src={image} alt="gallery" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="section cta">
                <div className="container">
                    <div className="grid grid-gap-large grid-lg-two-columns">
                        <div className="column">
                            <img className="section__image" src={CTAImage} alt="contact me" />
                        </div>
                        <div className="column">
                            <h1 className="fs-secondary-heading fw-bold text-center text-lg-start margin-bottom-300">Επικοινωνήστε για να κλείσετε ραντεβού τώρα</h1>
                            <p className="fs-body fw-regular text-center text-lg-start margin-bottom-800">
                                Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας. Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσετε το επόμενο ραντεβού σας.
                            </p>
                            <button className="btn btn--medium btn--dark cta__button">Κλείστε ραντεβού τώρα</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section clients bg-primary text-light">
                <div className="container">
                    <h1 className="fs-secondary-heading fw-bold text-center margin-bottom-300">Οι Πελάτες Μας</h1>
                    <h2 className="fs-subheading fw-regular text-center margin-bottom-800">Οργανισμοί που έχουν εμπιστευτεί την εταιρεία μας για τις υπηρεσίες που προσφέρουμε</h2>
                    <div>
                        <img className="section__image" src={ClientsImage} alt="image of the company's clients" />
                    </div>
                </div>
            </section>
            <section className="section testimonials">
                <div className="container">
                    <h1 className="fs-secondary-heading fw-bold text-center margin-bottom-300">Σχόλια Πελατών</h1>
                    <h2 className="fs-subheading fw-regular text-center margin-bottom-800">Οι απόψεις των πελατών μας για τις υπηρεσίες μας </h2>
                    <div className="flex align-items-stretch">
                        {
                            testimonyData.map(person => (
                                <div key={person.name} className="testimonial flex-basis-100 flex-basis-lg-0 flex-grow-1 margin-bottom-500">
                                    <img src={UserImage} className="avatar avatar--medium" />
                                    <h1 className="fs-subheading fw-semibold text-center">{person.name}</h1>
                                    <h2 className="fs-small fw-regular text-muted text-center">{person.profession}</h2>
                                    <p className="text-start">🙶</p>
                                    <p className="fs-body fs-small fst-italic fw-light text-center">{person.description}</p>
                                    <p className="text-end">🙸</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
