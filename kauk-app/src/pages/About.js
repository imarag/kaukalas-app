import WhyUs from "../images/why-us.png"

import {companyTeam} from "../data"
import {coreValues} from "../data"
import {whyUs} from "../data"


import "../styles/About.css"

export default function About() {
    return (
        <>
            <section className="section team">
                <div className="container">
                    <h1 className="section__title">Γνωρίστε την Ομάδα Μας</h1>
                    <h2 className="section__subtitle">Εξειδικευμένο προσωπικό, απόλυτα αφοσιωμένο στην παροχή των υπηρεσιών μας με αξιοπιστία και συνέπεια.</h2>
                    <div className="team__container">
                        {
                            companyTeam.map(member => (
                                <div key={member["name"]} className="team__person">
                                    <img src={member["icon-src"]} alt={member.name + " avatar"} className="avatar avatar--large"/>
                                    <h1 className="avatar__title">{member.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="section section--dark company-history">
                <div className="container">
                    <h1 className="section__title">Η Ιστορία Της Εταιρείας Μας</h1>
                    <p className="section__paragraph">
                        Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:
                    </p>
                    <div className="corevalues">
                        {
                            coreValues.map(coreValue => (
                                <div key={coreValue["title"]} className="corevalues__item">
                                    <div className="corevalue">
                                        <div className="corevalue__item">
                                            <div class="corevalue__icon"> 
                                                    {coreValue["image"]}
                                                </div>
                                        </div>
                                        <div className="corevalue__item">
                                            <h1 className="corevalue__title">
                                                {coreValue["title"]}
                                            </h1>
                                            <p className="section__paragraph">
                                                {coreValue["text"]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="section__paragraph">
                        Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους.
                    </p>

                </div>
            </section>
            <section>
                <img src={WhyUs} className="section__image"/>
            </section>
            <section className="section why-us">
                <div className="container">
                    <h1 className="section__title">Γιατί Εμας ?</h1>
                    <h2 className="section__subtitle">Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους</h2>
                    <div className="reasons">
                        {
                            whyUs.map(item => (
                                <div key={item["title"]} className="reason">
                                    <div class="reason__icon"> 
                                            {item["icon"]}
                                        </div>
                                    <h1 className="reason__title">{item["title"]}</h1>
                                    <p className="section__paragraph">
                                        {item["description"]}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}