import Avatar1 from "../images/avatar1.png"
import Avatar2 from "../images/avatar2.png"
import Avatar3 from "../images/avatar3.png"
import Avatar4 from "../images/avatar4.png"
import WhyUs from "../images/why-us.png"
import Person from "../icons/person.svg"
import Truck from "../icons/truck.svg"
import Helmet from "../icons/helmet.svg"

import "../styles/About.css"

export default function About() {
    return (
        <>
            <section className="section section--team">
                <div className="section__content">
                    <h1 className="section__title">Γνωρίστε την Ομάδα Μας </h1>
                    <h2 className="section__subtitle">Εξειδικευμένο προσωπικό, απόλυτα αφοσιωμένο στην παροχή των υπηρεσιών μας με αξιοπιστία και συνέπεια.</h2>
                    <div className="section__grid">
                        <div className="section__grid-item">
                            <img src={Avatar1} alt="avatar 1" className="avatar"/>
                            <h1 className="section__smalltitle">Ιωάννης Μαραγκάκης</h1>
                        </div>
                        <div className="section__grid-item">
                            <img src={Avatar2} alt="avatar 2" className="avatar"/>
                            <h1 className="section__smalltitle">Γιώργος Μαραγκάκης</h1>
                        </div>
                        <div className="section__grid-item">
                            <img src={Avatar3} alt="avatar 3" className="avatar"/>
                            <h1 className="section__smalltitle">Ιωάννης Περουλάκης</h1>
                        </div>
                        <div className="section__grid-item">
                            <img src={Avatar4} alt="avatar 4" className="avatar"/>
                            <h1 className="section__smalltitle">Πετρος Πατεράκης</h1>
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
                    <div className="section__grid section__grid--cores">
                        <div className="section__grid-item">
                            <div className="elements">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"/>
                                </svg>
                                <div>
                                    <h1 className="section__smalltitle">
                                        Οικολογικές Πρακτικές
                                    </h1>
                                    <p className="section__paragraph">
                                        Εισάγαμε καινοτόμες βιώσιμες λύσεις καθαρισμού για την προστασία του περιβάλλοντος.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section__grid-item">
                            <div className="elements">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"/>
                                </svg>
                                <div>
                                    <h1 className="section__smalltitle">
                                        Οικολογικές Πρακτικές
                                    </h1>
                                    <p className="section__paragraph">
                                    Εισάγαμε καινοτόμες βιώσιμες λύσεις καθαρισμού για την προστασία του περιβάλλοντος.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section__grid-item">
                            <div className="elements">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/>
                                </svg>
                                <div>
                                    <h1 className="section__smalltitle">
                                        Οικολογικές Πρακτικές
                                    </h1>
                                    <p className="section__paragraph">
                                        Εισάγαμε καινοτόμες βιώσιμες λύσεις καθαρισμού για την προστασία του περιβάλλοντος.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section__grid-item">
                            <div className="elements">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                                    <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595m7.173 3.876a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199m-8.999-.65a.5.5 0 1 1-.276-.96A7.6 7.6 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.6 6.6 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/>
                                </svg>
                                <div>
                                    <h1 className="section__smalltitle">
                                        Οικολογικές Πρακτικές
                                    </h1>
                                    <p className="section__paragraph">
                                        Εισάγαμε καινοτόμες βιώσιμες λύσεις καθαρισμού για την προστασία του περιβάλλοντος.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="section__paragraph">
                        Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους. Παρά την ανάπτυξή μας, παραμένουμε αφοσιωμένοι στις αρχές με τις οποίες ιδρύθηκε η εταιρεία μας:
                    </p>
                    {/* <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                            </svg>
                            <span>
                                Εξαιρετική Ποιότητα
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                            </svg>
                            <span>
                                Ευθύνη
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                            </svg>
                            <span>
                                Ικανοποίηση Πελατών
                            </span>
                        </li>
                    </ul> */}
                </div>
            </section>
            <section>
                <img src={WhyUs} className="standalone__image"/>
            </section>
            <section className="section section--why-us">
                <div className="section__content">
                    <h1 className="section__title">Γιατί Εμας ?</h1>
                    <h2 className="section__subtitle">Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους</h2>
                    <div className="why-us--grid">
                        <div className="why-us--grid-item">
                            <img src={Truck} className="svg-small svg-dark"/>
                            <h1 className="section__smalltitle">Οικολογικές Λύσεις</h1>
                            <p className="section__paragraph">
                                Χρησιμοποιούμε οικολογικά προϊόντα και μεθόδους για να διατηρούμε την πισίνα σας καθαρή, ενώ προστατεύουμε τον πλανήτη.
                            </p>
                        </div>
                        <div className="why-us--grid-item">
                            <img src={Truck} className="svg-small svg-dark"/>
                            <h1 className="section__smalltitle">Οικολογικές Λύσεις</h1>
                            <p className="section__paragraph">
                                Χρησιμοποιούμε οικολογικά προϊόντα και μεθόδους για να διατηρούμε την πισίνα σας καθαρή, ενώ προστατεύουμε τον πλανήτη.
                            </p>
                        </div>
                        <div className="why-us--grid-item">
                            <img src={Truck} className="svg-small svg-dark"/>
                            <h1 className="section__smalltitle">Οικολογικές Λύσεις</h1>
                            <p className="section__paragraph">
                                Χρησιμοποιούμε οικολογικά προϊόντα και μεθόδους για να διατηρούμε την πισίνα σας καθαρή, ενώ προστατεύουμε τον πλανήτη.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}