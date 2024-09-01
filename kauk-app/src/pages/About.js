import WhyUs from "../images/why-us.png"

import {companyTeam} from "../data"
import {coreValues} from "../data"
import {whyUs} from "../data"

import "../styles/About.css"

export default function About() {
    return (
        <div className="About">
            <section className="team py-6 mt-nav-height">
                <div className="container">
                    <h1 className="section-title">
                        Γνωρίστε την Ομάδα Μας
                    </h1>
                    <h2 className="section-subtitle">
                        Εξειδικευμένο προσωπικό, απόλυτα αφοσιωμένο στην παροχή των υπηρεσιών μας με αξιοπιστία και συνέπεια.
                    </h2>
                    <div className="team-members-grid">
                        {
                            companyTeam.map(member => (
                                <div key={member["name"]} className="team-member">
                                    <img src={member["icon-src"]} alt={member.name + " avatar"} className="avatar"/>
                                    <h1 className="fw-semibold my-4">{member.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="company-history bg-primary py-6">
                <div className="container">
                    <h1 className="section-title text-light text-start">Η Ιστορία Της Εταιρείας Μας</h1>
                    <p className="text-light">
                        Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:
                    </p>
                    <div className="core-values my-5">
                        {
                            coreValues.map(coreValue => (
                                <div key={coreValue["title"]}>
                                    <div className="core-value">
                                        <div>
                                            {coreValue["image"]}
                                        </div>
                                        <div className="">
                                            <h1 className="text-light fw-bold">
                                                {coreValue["title"]}
                                            </h1>
                                            <p className="text-light">
                                                {coreValue["text"]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-light">
                        Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους.
                    </p>
                </div>
            </section>
            <section>
                <img src={WhyUs} className="image"/>
            </section>
            <section className="why-us py-6">
                <div className="container">
                    <h1 className="section-title">Γιατί Εμας ?</h1>
                    <h2 className="section-subtitle">Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους</h2>
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