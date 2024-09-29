
import "../styles/Contact.css"
import { useOutletContext } from "react-router-dom"

import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import ContactForm from "../components/ContactForm"

import { LocationIcon } from "../SvgIcons"
import { EnvelopeIcon } from "../SvgIcons"
import { TelephoneIcon } from "../SvgIcons"

export default function Contact() {
    const [currentLang] = useOutletContext();

    return (
        <section className="py-32 container">
            <Title text={currentLang === "gr" ? "Επικοινωνίστε Μαζί Μας" : "Contact Us"} />
            <SubTitle text={currentLang === "gr" ?
                "Η ομάδα μας είναι έτοιμη να σας εξυπηρετήσει και να σας βοηθήσει με ό,τι χρειάζεστε, με στόχο την καλύτερη εξυπηρέτησή σας" :
                "Our team is ready to assist you and help with whatever you need, aiming to provide the best service possible"} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center justify-center gap-3 bg-tertiary p-8">
                    <div className="flex items-center justify-center p-2 my-1 bg-secondary w-max mx-auto">
                        <LocationIcon className="size-8 fill-primary" />
                    </div>
                    <p className="m-0 text-center text-lg">
                        {currentLang === "gr" ? "Μηνά Βίστα 33, Θεσσαλονίκη" : "Minas Vista 33, Thessaloniki"}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-tertiary p-8">
                    <div className="flex items-center justify-center p-2 my-1 bg-secondary w-max mx-auto">
                        <TelephoneIcon className="size-8 fill-primary" />
                    </div>
                    <p className="m-0 text-center text-lg">+30 6973341740</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-tertiary p-8">
                    <div className="flex items-center justify-center p-2 my-1 bg-secondary w-max mx-auto">
                        <EnvelopeIcon className="size-8 fill-primary" />
                    </div>
                    <p className="m-0 text-center text-lg">giannis.marar@hotmail.com</p>
                </div>
            </div>
            <div className="bg-tertiary mt-8 py-16">
                <div className=" w-full md:w-4/6 lg:w-3/6 mx-auto">
                    <ContactForm currentLang={currentLang} />

                </div>
            </div>
        </section>
    )
}