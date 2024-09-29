

import { useState } from "react"
import { whyUs } from "../data"
import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import { coreValues } from "../data"
import { faqs } from "../data"
import { DashIcon } from "../SvgIcons.js"
import { PlusIcon } from "../SvgIcons.js"
import "../styles/About.css"
import { useOutletContext } from "react-router-dom"

export default function About() {

    const [currentLang] = useOutletContext();
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
        <>
            <div className="container pt-32">
                <section>
                    <Title text={currentLang === "gr" ? "Σχετικά Με Εμας" : "About Us"} />
                    <SubTitle text={currentLang === "gr" ?
                        "Μάθετε περισσότερα για την εμπειρία και την αφοσίωσή μας στον καθαρισμό πισίνας" :
                        "Learn more about our experience and dedication to pool cleaning"} />
                    <p className="mt-5">
                        {currentLang === "gr" ?
                            "Η GK Pool Cleaning ιδρύθηκε το 2012 με σκοπό να επαναστατήσει στον καθαρισμό πισίνας μέσω οικολογικών πρακτικών και επαγγελματισμού. Αυτό που ξεκίνησε ως μια μικρή τοπική επιχείρηση έχει εξελιχθεί σε ένα αξιόπιστο όνομα, δεσμευμένο στη διατήρηση άψογων πισίνων με έμφαση στη βιωσιμότητα. Οι βασικές αξίες της εταιρείας μας περιλαμβάνουν:" :
                            "GK Pool Cleaning was founded in 2012 with the aim of revolutionizing pool cleaning through eco-friendly practices and professionalism. What started as a small local business has grown into a trusted name, committed to maintaining pristine pools with a focus on sustainability. Our core values include:"}
                    </p>
                    <div className="my-8 grid grid-cols-1 lg:grid-cols-3 items-stretch justify-center gap-8">
                        {coreValues.map(value => (
                            <div key={value.title} className="w-full h-full bg-tertiary p-6">
                                <div className="flex items-center justify-center">
                                    {value.icon}
                                </div>
                                <div>
                                    <h1 className="text-secondary text-center text-2xl font-semibold my-3">{currentLang === "gr" ? value.title : value.titleEn}</h1>
                                    <p className="font-light text-center m-0">{currentLang === "gr" ? value.text : value.textEn}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">
                        {currentLang === "gr" ?
                            "Προσφέρουμε μια γκάμα υπηρεσιών, από καθαρισμό οικιακών πισίνων έως πλήρη συντήρηση εμπορικών πισίνων. Οι οικολογικές μας λύσεις διατηρούν τις πισίνες λαμπερές και συμβάλλουν σε ένα υγιέστερο περιβάλλον, εξασφαλίζοντας ασφαλείς και ευχάριστες εμπειρίες κολύμβησης για όλους. Οι Βασικοί λόγοι για τους οποίους οι πελάτες μας, μας εμπιστεύονται για τη Φροντίδα της πισίνας τους αποτελούν:" :
                            "We offer a range of services, from residential pool cleaning to full commercial pool maintenance. Our eco-friendly solutions keep pools sparkling and contribute to a healthier environment, ensuring safe and enjoyable swimming experiences for all. The main reasons our customers trust us for their pool care include:"}
                    </p>
                    <div className="my-8 grid grid-cols-1 lg:grid-cols-3 items-stretch justify-center gap-8">
                        {whyUs.map(item => (
                            <div key={item.title} className="w-full h-full bg-tertiary p-4">
                                <div className="flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h1 className="text-secondary text-center text-2xl font-semibold my-3">{currentLang === "gr" ? item.title : item.titleEn}</h1>
                                    <p className="font-light text-center m-0">{currentLang === "gr" ? item.description : item.descriptionEn}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="py-16">
                    <Title text={currentLang === "gr" ? "Συχνές Ερωτήσεις" : "Frequently Asked Questions"} />
                    <div className="flex flex-col items-stretch justify-center mt-16 gap-6 text-light w-full md:w-5/6 lg:w-3/4 mx-auto">
                        {faqs.map((item, index) => (
                            <div key={item.question} className=" bg-tertiary p-6" onClick={() => handleClickAccordion(index)}>
                                <div className="flex justify-between">
                                    <p className="m-0">{currentLang === "gr" ? item.question : item.questionEn}</p>
                                    <div>
                                        {accordionShownId === index ? (
                                            <DashIcon className="size-8 fill-secondary" />
                                        ) : (
                                            <PlusIcon className="size-8 fill-secondary" />
                                        )}
                                    </div>
                                </div>
                                {accordionShownId === index && (
                                    <div className="pt-2">
                                        <p className="font-light">{currentLang === "gr" ? item.answer : item.answerEn}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}