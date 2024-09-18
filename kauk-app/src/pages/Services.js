import { allServices } from "../data"

import { useOutletContext } from "react-router-dom"

import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"

export default function Services() {
    const [currentLang, setCurrentLang] = useOutletContext();
    
    return (
        <div className="Services">
            <section className="all-services pt-nav-height">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "Μάθετε Για Τις Υπηρεσίες Μας" : "Learn About Our Services"} />
                    <SubTitle text={currentLang === "gr" ? 
                        "Ανακαλύψτε τις υπηρεσίες που προσφέρουμε και σας ταιριάζουν!" : 
                        "Discover the services we offer that suit you!"} />
                        
                    <div className="pb-5">
                        {
                            allServices.map(service => (
                                <div key={service.title} className="py-4">
                                    <h1 className="text-secondary fw-semibold fs-4 my-0">
                                        {currentLang === "gr" ? service.title : service.titleEn}
                                    </h1>
                                    
                                    <p className="text-light mt-2 mb-4 fs-5">
                                        {currentLang === "gr" ? service.description : service.descriptionEn}
                                    </p>
                                    
                                    <div className="row align-items-stretch justify-content-start row-gap-4">
                                        {
                                            service.imageURLs.map(imageURL => (
                                                <div key={imageURL} className="col-12 col-md-4 col-lg-3">
                                                    <div className="img-hover-scale w-100 h-100">
                                                        <img src={imageURL} className="img-fluid object-fit-cover w-100 h-100" alt="a pool cleaning service offered"/>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>

    )
}