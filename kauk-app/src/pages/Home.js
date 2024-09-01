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
                    <h1 className="hero-title">
                        GK Pool & Villas
                        <br />
                        Services
                    </h1>
                    <h2 className="hero-subtitle">
                        Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα
                    </h2>
                    <button className="btn btn-large">
                        Κλείστε ραντεβού τώρα
                    </button>
                </div>
            </section>
            <section className="services py-6">
                <div className="container">
                    <div className="services-grid">
                        <div>
                            <h1 className="section-title text-lg-start">
                                Αξιόπιστες υπηρεσίες συντήρησης και καθαρισμού πισίνας
                            </h1>
                            <p className="text-center text-lg-start">
                                Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών 
                                καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα 
                                καθαρή και ασφαλής. Η έμπειρη ομάδα μας παρέχει αξιόπιστες και 
                                αποτελεσματικές λύσεις που ικανοποιούν τις ανάγκες σας.
                            </p>
                            <button className="btn btn-lg-start">Μάθε περισσότερα</button>
                        </div>
                        <div>
                            <img className="image" src={MainServiceImage} alt="services offered" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery bg-primary py-6">
                <div className="container">
                    <h1 className="section-title text-light">Τα Εργα Μας</h1>
                    <h2 className="section-subtitle text-light">
                        Ανακαλύψτε τις υπηρεσίες καθαρισμού πισίνας μας μέσα από την συλλογή φωτογραφιών πριν και μετά τον καθαρισμό
                    </h2>
                    <button className="btn btn-outline-secondary">Εξερευνήστε τα έργα μας</button>
                    <div className="gallery-grid">
                        {
                            galleryImages.map(image => (
                                <div key={image}>
                                    <img className="image" src={image} alt="gallery image of services offered" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="cta py-6">
                <div className="container">
                    <div className="cta-grid">
                        <div>
                            <img className="image" src={CTAImage} alt="contact me" />
                        </div>
                        <div>
                            <h1 className="section-title text-lg-start">
                                Επικοινωνήστε για να κλείσετε ραντεβού τώρα
                                </h1>
                            <p className="text-center text-lg-start">
                                Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας. Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσετε το επόμενο ραντεβού σας.
                            </p>
                            <button className="btn btn-lg-start">Κλείστε ραντεβού τώρα</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients bg-primary py-6">
                <div className="container">
                    <h1 className="section-title text-light">
                        Οι Πελάτες Μας
                        </h1>
                    <h2 className="section-subtitle text-light">
                        Οργανισμοί που έχουν εμπιστευτεί την εταιρεία μας για τις υπηρεσίες που προσφέρουμε
                    </h2>
                    <div>
                        <img className="image" src={ClientsImage} alt="company's clients" />
                    </div>
                </div>
            </section>
            <section className="testimonials py-6">
                <div className="container">
                    <h1 className="section-title">Σχόλια Πελατών</h1>
                    <h2 className="section-subtitle">Οι απόψεις των πελατών μας για τις υπηρεσίες μας </h2>
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
