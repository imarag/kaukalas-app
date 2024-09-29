import { allServices } from "../data"

import { useOutletContext } from "react-router-dom"

import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"

export default function Services() {
    const [currentLang] = useOutletContext();

    return (
        <section className="py-32 container">
            <Title text={currentLang === "gr" ? "Οι Υπηρεσίες Μας" : "Our Services"} />
            <SubTitle text={currentLang === "gr" ?
                "Ανακαλύψτε τις εξειδικευμένες υπηρεσίες καθαρισμού και συντήρησης πισίνας που προσφέρουμε, προσαρμοσμένες στις ανάγκες σας!" :
                "Discover our specialized pool cleaning and maintenance services, tailored to your needs!"} />
            <div className="pb-5">
                {
                    allServices.map(service => (
                        <div key={service.title} className="py-4">
                            <h1 className="text-secondary font-semibold text-2xl">
                                {currentLang === "gr" ? service.title : service.titleEn}
                            </h1>
                            <p className="text-light text-lg font-light mt-2 mb-4">
                                {currentLang === "gr" ? service.description : service.descriptionEn}
                            </p>
                            <div className="flex flex-col md:flex-row items-stretch justify-start gap-6">
                                {
                                    service.imageURLs.map(imageURL => (
                                        <div key={imageURL} className="overflow-hidden flex-grow">
                                            <img src={imageURL} className="hover:scale-110 transition-all duration-500 w-full h-full object-cover" alt="a pool cleaning service offered" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}