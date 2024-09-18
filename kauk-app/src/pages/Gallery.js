
import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"
import { useOutletContext } from "react-router-dom"

import { galleryImages } from "../data.js"

export default function Gallery() {
    const [currentLang, setCurrentLang] = useOutletContext();
    
    return (
        <div className="Gallery">
            <section className="pt-nav-height">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "Ανακαλύψτε Τα Εργα Μας" : "Explore Our Work"} />
                    <SubTitle text={currentLang === "gr" ? 
                        "Εξερευνήστε τη δουλειά μας μέσα από μια ποικιλία εικόνων που αναδεικνύουν την ποιότητα, την καινοτομία, που χαρακτηρίζουν κάθε μας έργο" : 
                        "Explore our work through a variety of images showcasing the quality, innovation, and attention to detail that characterize each of our projects"} />
                        
                    <div className="row justify-content-center align-items-stretch py-5">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="w-100 h-100 img-hover-scale">
                                    <img src={image} alt={"a pool after the application of our pool cleaning services "} className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>


    )
}