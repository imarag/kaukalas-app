import Avatar1 from "../images/avatar1.png"
import Avatar2 from "../images/avatar2.png"
import Avatar3 from "../images/avatar3.png"
import Avatar4 from "../images/avatar4.png"

import "../styles/About.css"

export default function About() {
    return (
        <>
            <section className="section section--team">
                <div className="section__content">
                    <h1 className="section__title">Γνωρίστε την Ομάδα Μας </h1>
                    <h2 className="section__subtitle">Εξειδικευμένο προσωπικό, απόλυτα αφοσιωμένο στην παροχή των υπηρεσιών μας με αξιοπιστία και συνέπεια.</h2>
                    <div className="avatars">
                        <div className="avatar">
                            <img src={Avatar1} alt="avatar 1" className="avatar__img"/>
                            <h1 className="avatar__title">Ιωάννης Μαραγκάκης</h1>
                        </div>
                        <div className="avatar">
                            <img src={Avatar2} alt="avatar 1" className="avatar__img"/>
                            <h1 className="avatar__title">Γιώργος Μαραγκάκης</h1>
                        </div>
                        <div className="avatar">
                            <img src={Avatar3} alt="avatar 1" className="avatar__img"/>
                            <h1 className="avatar__title">Ιωάννης Περουλάκης</h1>
                        </div>
                        <div className="avatar">
                            <img src={Avatar4} alt="avatar 1" className="avatar__img"/>
                            <h1 className="avatar__title">Πετρος Πατεράκης</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--dark section--company">
                <div className="section__content">
                    <h1 className="section__title">Η Ιστορία Της Εταιρείας Μας</h1>
                    <p className="section__paragraph">
                        Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:
                    </p>
                    <div className="items-grid">

                    </div>
                </div>
            </section>
        </>
    )
}