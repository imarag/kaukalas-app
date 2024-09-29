
import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import { useOutletContext } from "react-router-dom"

import { galleryImages } from "../data.js"

export default function Gallery() {
    const [currentLang] = useOutletContext();

    return (
        <section className="py-32 container">
            <Title text={currentLang === "gr" ? "Ανακαλύψτε Τα Εργα Μας" : "Explore Our Work"} />
            <SubTitle text={currentLang === "gr" ?
                "Εξερευνήστε τη δουλειά μας μέσα από μια ποικιλία εικόνων που αναδεικνύουν την ποιότητα, την καινοτομία, που χαρακτηρίζουν κάθε μας έργο" :
                "Explore our work through a variety of images showcasing the quality, innovation, and attention to detail that characterize each of our projects"} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-stretch py-5">
                {galleryImages.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                        <img src={image} alt="a pool after the application of our pool cleaning services" className="hover:scale-110 transition-all duration-500 w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}