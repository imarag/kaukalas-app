import '../styles/Home.css'


import MainServiceImage from "../images/main-service.png"
import Image1Before from "../images/image 1 before.png"
import Image1After from "../images/image 1 after.png"
import Image2Before from "../images/image 2 before.png"
import Image2After from "../images/image 2 after.png"
import Image3Before from "../images/image 3 before.png"
import Image3After from "../images/image 3 after.png"
import Image4Before from "../images/image 4 before.png"
import Image4After from "../images/image 4 after.png"
import CTAImage from "../images/cta-image.png"
import ClientsImage from "../images/clients.png"
import UserImage from "../images/user.png"

const testimonyData = [
    {
        "name": "Ιωάννης Μαραγκάκης",
        "profession": "Ελεύθερος Επαγγελματίας",
        "description": "Οι οικολογικές λύσεις καθαρισμού τους, διατηρούν την πισίνα μου αρκετά καθαρή, και μου αρέσει που ξέρω ότι η οικογένειά μου κολυμπά σε ένα καθαρό και ασφαλές περιβάλλον. Τους συνιστώ ανεπιφύλακτα!"
    },
    {
        "name": "Ιωάννης Περουλάκης",
        "profession": "Ελεύθερος Επαγγελματίας",
        "description": "Η εμπορική υπηρεσία καθαρισμού πισίνας τους είναι εξαιρετική, και η δέσμευσή τους για χρήση βιώσιμων προϊόντων ταυτίζεται πλήρως με τις δικές μας αξίες. Το προσωπικό είναι εξαιρετικά συνεργάσιμο και προσεκτικό σε κάθε λεπτομέρεια."
    },
    {
        "name": "Πέτρος Πατεράκης",
        "profession": "Δημόσιος Υπάλληλος",
        "description": "Η οικολογική τους προσέγγιση και οι εξειδικευμένοι τεχνικοί τους εξασφαλίζουν ότι οι πισίνες μας είναι πάντα άψογες. Είναι ένα αξιόπιστο μέλος της ομάδας συντήρησής μας και δεν θα μπορούσαμε να είμαστε πιο ευχαριστημένοι με την υπηρεσία τους."
    },
]


export default function Home() {
    return (
        <>
            <section className="section section--hero">
                <div className="section__content">
                    <h1 className="section__title">GK Pool & Villas<br />Services</h1>
                    <h2 className="section__subtitle">Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα</h2>
                    <button className="btn btn--large btn--dark">Κλείστε ραντεβού τώρα</button>
                </div>
            </section>
            <section className="section section--main-service">
                <div className="section__content">
                    <div className="section__grid">
                        <div className="section__grid-item">
                            <h1 className="section__title">Αξιόπιστες Υπηρεσίες Συντήρησης Και Καθαρισμού Πισίνας</h1>
                            <p className="section__paragraph">
                                Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών 
                                καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα 
                                καθαρή και ασφαλής. Η έμπειρη ομάδα μας παρέχει αξιόπιστες και 
                                αποτελεσματικές λύσεις που ικανοποιούν τις ανάγκες σας.
                            </p>
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={MainServiceImage} alt=" " />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--dark section--gallery">
                <div className="section__content">
                    <h1 className="section__title">Τα Εργα Μας</h1>
                    <h2 className="section__subtitle">Ανακαλύψτε τις υπηρεσίες καθαρισμού πισίνας μας μέσα από την συλλογή φωτογραφιών πριν και μετά τον καθαρισμό</h2>
                    <div className="section__grid">
                        <div className="section__grid-item">
                            <img className="section__image" src={Image1Before} alt="image 1 before" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image1After} alt="image 1 after" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image2Before} alt="image 2 before" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image2After} alt="image 2 after" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image3Before} alt="image 3 before" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image3After} alt="image 3 after" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image4Before} alt="image 4 before" />
                        </div>
                        <div className="section__grid-item">
                            <img className="section__image" src={Image4After} alt="image 4 after" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--contact">
                <div className="section__content">
                    <div className="section__grid">
                        <div className="section__grid-item">
                            <img className="section__image" src={CTAImage} alt="contact me" />
                        </div>
                        <div className="section__grid-item">
                            <h1 className="section__title">Επικοινωνήστε για να κλείσετε ραντεβού τώρα</h1>
                            <p className="section__paragraph">
                                Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας. Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσετε το επόμενο ραντεβού σας.
                            </p>
                            <button className="btn btn--medium btn--dark">Κλείστε ραντεβού τώρα</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--dark section--clients">
                <div className="section__content">
                    <h1 className="section__title">Οι Πελάτες Μας</h1>
                    <h2 className="section__subtitle">Οργανισμοί που έχουν εμπιστευτεί την εταιρεία μας για τις υπηρεσίες που προσφέρουμε</h2>
                    <div>
                        <img className="section__image" src={ClientsImage} alt="image of the company's clients" />
                    </div>
                </div>
            </section>
            <section className="section section--testimonials">
                <div className="section__content">
                    <h1 className="section__title">Σχόλια Πελατών</h1>
                    <h2 className="section__subtitle">Οι απόψεις των πελατών μας για τις υπηρεσίες μας </h2>
                    <div className="section__grid">
                        {
                            testimonyData.map(person => (
                                <div key={person.name} className="card section__grid-item">
                                    <img src={UserImage} className="avatar" />
                                    <h1 className="card__title">{person.name}</h1>
                                    <h2 className="card__subtitle">{person.profession}</h2>
                                    <p className="card__quotation card__quotation--start">🙶</p>
                                    <p className="card__paragraph">
                                        {person.description}
                                    </p>
                                    <p className="card__quotation card__quotation--end">🙸</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}


