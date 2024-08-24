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
                    <h1 className="fs-secondary-heading fw-bold text-center margin-top-nav-height">Γνωρίστε την Ομάδα Μας</h1>
                    <h2 className="fs-subheading fw-regular text-center margin-bottom-800">Εξειδικευμένο προσωπικό, απόλυτα αφοσιωμένο στην παροχή των υπηρεσιών μας με αξιοπιστία και συνέπεια.</h2>
                    <div className="flex align-items-cener">
                        {
                            companyTeam.map(member => (
                                <div key={member["name"]} className="flex-basis-100 flex-basis-sm-max-content">
                                    <img src={member["icon-src"]} alt={member.name + " avatar"} className="avatar avatar--large"/>
                                    <h1 className="avatar__title">{member.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="section bg-primary text-light">
                <div className="container">
                    <h1 className="fs-secondary-heading fw-bold text-center margin-bottom-300">Η Ιστορία Της Εταιρείας Μας</h1>
                    <p className="fs-body fw-regular">
                        Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:
                    </p>
                    <div className="grid grid-gap-large grid-lg-two-columns margin-bottom-600 margin-top-600">
                        {
                            coreValues.map(coreValue => (
                                <div key={coreValue["title"]} className="corevalues__item">
                                    <div className="">
                                        <div className="">
                                            {coreValue["image"]}
                                        </div>
                                        <div className="">
                                            <h1 className="fs-subheading fw-bold text-center margin-bottom-200 margin-top-300">
                                                {coreValue["title"]}
                                            </h1>
                                            <p className="fs-body fw-light text-center">
                                                {coreValue["text"]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="fs-body fw-regular margin-bottom-800">
                        Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους.
                    </p>

                </div>
            </section>
            <section>
                <img src={WhyUs} className="section__image"/>
            </section>
            <section className="section why-us">
                <div className="container">
                    <h1 className="fs-secondary-heading fw-bold text-center margin-bottom-300">Γιατί Εμας ?</h1>
                    <h2 className="fs-subheading fw-regular text-center margin-bottom-800">Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους</h2>
                    <div className="flex">
                        {
                            whyUs.map(item => (
                                <div key={item["title"]} className="flex-basis-100 flex-basis-lg-0 flex-grow-1">
                                        <div> 
                                            {item["icon"]}
                                        </div>
                                    <h1 className="fs-body fw-bold">{item["title"]}</h1>
                                    <p className="fs-small">
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