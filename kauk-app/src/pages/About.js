
import { useState } from "react"
import {whyUs} from "../data"
import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import {coreValues} from "../data"
import { faqs } from "../data"
import { DashIcon } from "../SvgIcons.js"
import { PlusIcon } from "../SvgIcons.js"
import "../styles/About.css"

export default function About() {

    // create the accordion item shown state
    const [accordionShownId, setAccordionShownId] = useState(null)

    // handle the current clicked accordion item
    function handleClickAccordion(index) {
        // if the current acoordion item id (index) clicked is already active, then close it
        if (index === accordionShownId) {
            setAccordionShownId(null)
        }
        // else open it
        else {
            setAccordionShownId(index)
        }
    }


    return (
        <div className="About">
            <section className="pt-nav-height">
                <div className="container-lg">
                    <Title text="ΜΕΡΙΚΑ ΛΟΓΙΑ ΓΙΑ ΕΜΑΣ" />
                    <p>
                        Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:
                    </p>
                    <div className="row justify-content-center align-items-stretch my-5">
                        {
                            coreValues.map(coreValue => (
                                <div className="col-12 col-lg-6 col-xxl-3 text-center">
                                    <div>
                                        {coreValue["image"]}
                                    </div>
                                    <h1 className="text-secondary fs-3 fw-semibold my-2">
                                        {coreValue["title"]}
                                    </h1>
                                    <p className="text-light fw-light">
                                        {coreValue["text"]}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <p>
                        Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους.
                    </p>
                </div>
            </section>
            <section>
                <div className="container-lg">
                <Title text="ΓΙΑΤΙ ΕΜΑΣ ?" />
                <p>
                    Οι Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους αποτελούν:
                </p>
                    <div className="d-flex flex-wrap align-items-stretch justify-content-center gap-5 py-5">
                        {
                            whyUs.map(item => (
                                <div key={item["title"]}>
                                    <div className="mx-auto border d-flex align-items-center justify-content-center text-center container-rect bg-secondary rounded-circle p-4"> 
                                        {item["icon"]}
                                    </div>
                                    <h1 className="fs-5 fw-semibold my-4 text-center text-secondary">{item["title"]}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section> 
            <section className="faq py-4">
                <div className="container-lg">
                    <Title text="ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ" />
                    <div className="row justify-content-center fs-5 text-light">
                        <div className="col">
                            {
                                faqs.map((item, index) => (
                                    <div key = {item.question} className="my-4 bg-tertiary p-4" onClick={() => handleClickAccordion(index)}>
                                        <div className="d-flex justify-content-between">
                                            <p className="m-0">
                                                { item.question }
                                            </p>
                                            <div>
                                                { accordionShownId === index ? (
                                                    <DashIcon className="icon-light"/>
                                                ) : (
                                                    <PlusIcon className="icon-light"/>
                                                )}
                                            </div>
                                        </div>
                                        {accordionShownId === index && (
                                            <div className="pt-2">
                                                <p className="fw-light">{ item.answer }</p>
                                            </div>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}