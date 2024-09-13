import '../styles/Home.css'

import { Link } from 'react-router-dom'

import CTAImage from "../images/cta-image.png"

import { mainServices } from '../data'
import { galleryBeforeAfter } from "../data"
import { testimonials } from "../data"
import { customersImages } from '../data'

import { StarIcon } from '../SvgIcons'

import Title from "../components/Title"
import SubTitle from "../components/SubTitle"

export default function Home() {
    return (
        <div className="Home">
            <section className="hero pt-nav-height d-flex align-items-center justify-content-center">
                <div className="container-lg">
                    <h1 className="display-1 text-center text-primary fw-bold">
                        GK Pool & Villas
                        <br />
                        Services
                    </h1>
                    <h2 className="fs-1 text-light text-center fw-semibold">
                        Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα
                    </h2>
                    <div className="d-flex flex-wrap align-items-stretch justify-content-center gap-3 mt-5">
                        <Link className="btn btn-primary btn-lg border-3" to="/contact">Κλείστε ραντεβού</Link>
                        <Link className="btn btn-outline-light btn-lg border-3 fw-semibold" to="/services">Μάθετε περισσότερα</Link>
                    </div>
                </div>
            </section>
            <section className="services py-5">
                <div className="container-lg">
                    <Title text="ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ" />
                    <SubTitle text="Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών
                    καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα
                        καθαρή και ασφαλής" />
                    <div className="row align-items-stretch justify-content-center my-5">
                        {
                            mainServices.map(serv => (
                                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                                    <div className="img-hover-scale">
                                        <img src={ serv.imageURL } alt="main service" className="img-fluid w-100 h-100" />
                                    </div>
                                    <h1 className="text-secondary fs-3 mt-2">{ serv.title }</h1>
                                    <p className="fw-light fs-5">{ serv.description }</p>
                                </div>
                            ))
                        }  
                    </div>
                    <div className="text-center">
                        <Link to="/services" className="btn btn-outline-secondary btn-lg">
                            Μάθε περισσότερα
                        </Link>
                    </div>
                </div>
            </section>
            <section className="gallery py-5">
                <div className="container-lg">
                    <Title text="ΤΑ ΕΡΓΑ ΜΑΣ" />
                    <SubTitle text="Ανακαλύψτε τις υπηρεσίες καθαρισμού πισίνας μας μέσα από την συλλογή φωτογραφιών πριν και μετά τον καθαρισμό" />
                    <div className="text-center my-5">
                        <Link to="/gallery" className="btn btn-outline-secondary btn-lg">
                            Εξερευνήστε τα έργα μας
                        </Link>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        {
                            galleryBeforeAfter.map(image => (
                                <div key={image} className="col-6 p-2">
                                    <div className="img-hover-scale w-100 h-100">
                                        <img className="img-fluid w-100 h-100 object-fit-cover" src={image} alt="gallery of services offered" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="cta py-5">
                <div className="container-lg">
                    <p className="fs-4 fw-semibold text-center">Θέλετε να εξασφαλίσετε ότι η πισίνα σας θα παραμείνει πάντα καθαρή και έτοιμη για χρήση; </p>
                    <Title text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ ΤΩΡΑ" />
                    <SubTitle text="Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας. Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσετε το επόμενο ραντεβού σας." />
                    <div className="text-center my-5">
                        <Link to="/contact" className="btn btn-outline-secondary btn-lg">
                            Κλείστε ραντεβού τώρα
                        </Link>
                    </div>
                    <div>
                        <img className="img-fluid w-100 h-100 object-fit-cover" src={CTAImage} alt="contact me" />
                    </div>
                </div>
            </section>
            <section className="clients py-5">
                <div className="container-lg">
                <Title text="ΟΙ ΠΕΛΑΤΕΣ ΜΑΣ" />
                    <div className="d-flex flex-wrap align-items-center justify-content-center my-5 gap-5">
                        {
                            customersImages.map(clientURL => (
                                <div key={clientURL}>
                                    <img className="icon-very-large icon mx-4" src={clientURL} alt="company's clients" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="testimonials py-5">
                <div className="container-lg">
                    <Title text="ΤΙ ΕΧΟΥΝ ΠΕΙ ΓΙΑ ΕΜΑΣ ?" />
                    <div className="row justify-content-center align-items-stretch row-gap-4 mt-5">
                       {
                            testimonials.map(testim => (
                                <div key={testim.name} className="col-10 col-lg-4">
                                    <div className="p-4 bg-tertiary h-100 shadow-lg">
                                        <h1 className="fs-4 text-secondary text-center">{ testim.name }</h1>
                                        {/* <h2 className="fs-5 text-light text-center ">{ testim.profession }</h2> */}
                                        <div className="my-4 d-flex align-items-center justify-content-center gap-2">
                                            <StarIcon className="icon-secondary" />
                                            <StarIcon className="icon-secondary" />
                                            <StarIcon className="icon-secondary" />
                                            <StarIcon className="icon-secondary" />
                                            <StarIcon className="icon-secondary" />
                                        </div>
                                        <p className="text-center fs-6 fst-italic text-light">
                                            { testim.description }
                                        </p>
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
