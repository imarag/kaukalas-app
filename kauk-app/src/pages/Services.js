import { allServices } from "../data"


import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"

export default function Services() {
    return (
        <div className="Services">
            <section className="all-services pt-nav-height">
                <div className="container-lg">
                    <Title text="ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ" />
                    <SubTitle text="Ανακαλύψτε τις υπηρεσίες που προσφέρουμε και σας ταιριάζουν!" /> 
                    <div className="pb-5">
                    {
                        allServices.map(service => (
                            <div key={service.title} className="py-4">
                                <h1 className="text-secondary fw-semibold fs-4 my-0">{ service.title }</h1>
                                <p className="text-light mt-2 mb-4 fs-5">{ service.description }</p>
                                <div className="row align-items-stretch justify-content-start row-gap-4">
                                    {
                                        service.imageURLs.map(imageURL => (
                                            <div key={imageURL} className="col-12 col-md-3">
                                                <div className="img-hover-scale w-100 h-100">
                                                    <img src={imageURL} className="img-fluid object-fit-cover w-100 h-100" alt="a service offered"/>
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