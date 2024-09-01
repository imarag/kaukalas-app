import WhyUs from "../images/why-us.png"

import {companyTeam} from "../data"
import {coreValues} from "../data"
import {whyUs} from "../data"

import "../styles/About.css"

export default function About() {
    return (
        <div className="About">
            <section className="section team">
                <div className="container">
                    <h1 className="section-title text-center">Γνωρίστε την Ομάδα Μας</h1>
                    <h2 className="section-subtitle text-center">Εξειδικευμένο προσωπικό, απόλυτα αφοσιωμένο στην παροχή των υπηρεσιών μας με αξιοπιστία και συνέπεια.</h2>
                    <div className="team-members-grid">
                        {
                            companyTeam.map(member => (
                                <div key={member["name"]} className="team-member">
                                    <img src={member["icon-src"]} alt={member.name + " avatar"} className="avatar"/>
                                    <h1 className="avatar-title">{member.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="section company-history bg-primary">
                <div className="container">
                    <h1 className="section-title text-light">Η Ιστορία Της Εταιρείας Μας</h1>
                    <p className="section-paragraph text-light">
                        Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:
                    </p>
                    <div className="core-values">
                        {
                            coreValues.map(coreValue => (
                                <div key={coreValue["title"]}>
                                    <div className="core-value">
                                        <div>
                                            {coreValue["image"]}
                                        </div>
                                        <div className="">
                                            <h1 className="core-value-title">
                                                {coreValue["title"]}
                                            </h1>
                                            <p className="section-paragraph">
                                                {coreValue["text"]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="section-paragraph text-light">
                        Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους.
                    </p>
                </div>
            </section>
            <section>
                <img src={WhyUs} className="image"/>
            </section>
            <section className="section why-us">
                <div className="container">
                    <h1 className="section-title text-center">Γιατί Εμας ?</h1>
                    <h2 className="section-subtitle text-center">Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους</h2>
                    <div className="why-us-cards">
                        {
                            whyUs.map(item => (
                                <div key={item["title"]}>
                                        <div> 
                                            {item["icon"]}
                                        </div>
                                    <h1 className="why-us-title">{item["title"]}</h1>
                                    <p className="why-us-description">
                                        {item["description"]}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}