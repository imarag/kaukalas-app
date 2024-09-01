import '../styles/Home.css'

import MainServiceImage from "../images/main-service.png"
import CTAImage from "../images/cta-image.png"
import ClientsImage from "../images/clients.png"
import UserImage from "../images/user.png"

import Card from '../components/Card'

import {galleryImages} from "../data"
import {testimonyData} from "../data"

export default function Home() {
    return (
        <div className="Home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title text-center text-light">GK Pool & Villas<br />Services</h1>
                    <h2 className="hero-subtitle text-center text-light">Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα</h2>
                    <button className="btn btn-large">Κλείστε ραντεβού τώρα</button>
                </div>
            </section>
            <section className="section services">
                <div className="container">
                    <div className="services-grid">
                        <div>
                            <h1 className="section-title text-center text-lc-start">
                                Αξιόπιστες υπηρεσίες συντήρησης και καθαρισμού πισίνας
                            </h1>
                            <p className="section-paragraph text-center text-lc-start">
                                Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών 
                                καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα 
                                καθαρή και ασφαλής. Η έμπειρη ομάδα μας παρέχει αξιόπιστες και 
                                αποτελεσματικές λύσεις που ικανοποιούν τις ανάγκες σας.
                            </p>
                            <button className="btn btn-center btn-lc-start">Μάθε περισσότερα</button>
                        </div>
                        <div>
                            <img className="image" src={MainServiceImage} alt=" " />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section gallery bg-primary">
                <div className="container">
                    <h1 className="section-title text-light text-center">Τα Εργα Μας</h1>
                    <h2 className="section-subtitle text-light text-center">
                        Ανακαλύψτε τις υπηρεσίες καθαρισμού πισίνας μας μέσα από την συλλογή φωτογραφιών πριν και μετά τον καθαρισμό
                    </h2>
                    <button className="btn btn-center btn-outline-light">Εξερευνήστε τα έργα μας</button>
                    <div className="gallery-grid">
                        {
                            galleryImages.map(image => (
                                <div key={image}>
                                    <img className="image" src={image} alt="gallery" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="section cta">
                <div className="container">
                    <div className="cta-grid">
                        <div>
                            <img className="image" src={CTAImage} alt="contact me" />
                        </div>
                        <div>
                            <h1 className="section-title text-center text-lc-start">Επικοινωνήστε για να κλείσετε ραντεβού τώρα</h1>
                            <p className="section-paragraph text-center text-lc-start">
                                Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας. Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσετε το επόμενο ραντεβού σας.
                            </p>
                            <button className="btn btn-center btn-lc-start">Κλείστε ραντεβού τώρα</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section clients bg-primary">
                <div className="container">
                    <h1 className="section-title text-center text-light">Οι Πελάτες Μας</h1>
                    <h2 className="section-subtitle text-center text-light">Οργανισμοί που έχουν εμπιστευτεί την εταιρεία μας για τις υπηρεσίες που προσφέρουμε</h2>
                    <div>
                        <img className="image" src={ClientsImage} alt="image of the company's clients" />
                    </div>
                </div>
            </section>
            <section className="section testimonials">
                <div className="container">
                    <h1 className="section-title text-center">Σχόλια Πελατών</h1>
                    <h2 className="section-subtitle text-center">Οι απόψεις των πελατών μας για τις υπηρεσίες μας </h2>
                    <div className="testimonials-grid">
                        {
                            testimonyData.map(person => (
                                <div>
                                    <Card person={person}>
                                        <img src={UserImage} />
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
