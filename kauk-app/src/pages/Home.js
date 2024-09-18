import '../styles/Home.css'

import { Link, useOutletContext } from 'react-router-dom'
import CTAImage from "../images/cta-image.png"

import { mainServices } from '../data'
import { galleryBeforeAfter } from "../data"
import { testimonials } from "../data"
import { customersImages } from '../data'
import MainServiceImage1 from "../images/services1.jpg"
import MainServiceImage2 from "../images/services2.jpg"
import MainServiceImage3 from "../images/services3.jpg"
import { StarIcon } from '../SvgIcons'

import Title from "../components/Title"
import SubTitle from "../components/SubTitle"

export default function Home() {
    const [currentLang, setCurrentLang] = useOutletContext();
    return (
        <div className="Home">
            <section className="hero pt-nav-height d-flex align-items-center justify-content-center">
                <div className="container-lg">
                    <h1 className="display-1 text-center text-light fw-bold">
                        GK Pool & Villas
                        <br />
                        Services
                    </h1>
                    <h2 className="fs-1 text-light text-center fw-semibold">
                        {currentLang === "gr" ? "Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα" : "Professional Pool Cleaning, Easy and Fast"}
                    </h2>
                    <div className="d-flex flex-column flex-sm-row  align-items-stretch justify-content-center gap-3 mt-5">
                        <Link className="btn btn-primary btn-lg border-3" to="/contact">
                            {currentLang === "gr" ? "Κλείστε ραντεβού" : "Book an Appointment"}
                        </Link>
                        <Link className="btn btn-outline-light btn-lg border-3 fw-semibold" to="/services">
                            {currentLang === "gr" ? "Μάθετε περισσότερα" : "Learn More"}
                        </Link>
                    </div>
                </div>
            </section>
            <section className="services py-4">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "Οι Υπηρεσίες μας" : "Our Services"} />
                    <SubTitle text={currentLang === "gr" ? 
                        "Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα καθαρή και ασφαλής" :
                        "At our company, we offer a range of pool cleaning services to ensure that your pool is always clean and safe"} 
                    />
                    <div className="row row-cols-1 row-cols-md-3 align-items-stretch justify-content-center my-5 gx-3 gy-4">
                        {mainServices.map(serv => (
                            <div className="col" key={serv.title}>
                                <div className="img-hover-scale">
                                    <img src={serv.imageURL} alt="main pool cleaning service" className="img-fluid w-100 h-100" />
                                </div>
                                <h1 className="text-secondary fs-4 fw-semibold mt-2">
                                    {currentLang === "gr" ? serv.title : serv.titleEn}
                                </h1>
                                <p className="fw-light">
                                    {currentLang === "gr" ? serv.description : serv.descriptionEn}
                                </p>
                            </div>
                        ))}  
                    </div>
                    <div className="text-center">
                        <Link to="/services" className="btn btn-outline-secondary btn-lg">
                            {currentLang === "gr" ? "Μάθε περισσότερα" : "Learn More"}
                        </Link>
                    </div>
                </div>
            </section>
            <section className="gallery py-4">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "Τα Εργα Μας" : "Our Projects"} />
                    <SubTitle text={currentLang === "gr" ? 
                        "Ανακαλύψτε τις πλήρεις υπηρεσίες καθαρισμού πισίνας μας μέσα από τη λεπτομερή συλλογή φωτογραφιών πριν και μετά τον καθαρισμό" :
                        "Discover our pool cleaning services through our collection of before and after photos"} 
                    />
                    <div className="text-center my-5">
                        <Link to="/gallery" className="btn btn-outline-secondary btn-lg">
                            {currentLang === "gr" ? "Εξερευνήστε τα έργα μας" : "Explore Our Projects"}
                        </Link>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        {galleryBeforeAfter.map(image => (
                            <div key={image} className="col-6 p-2">
                                <div className="img-hover-scale w-100 h-100">
                                    <img className="img-fluid w-100 h-100 object-fit-cover" src={image} alt="gallery of pools before and after the pool cleaning services applied" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta py-4">
                <div className="container-lg">
                    <p className="col-12 col-md-10 col-lg-8 col-xl-7 my-5 mx-auto fs-3 fw-normal text-center">
                        {currentLang === "gr" ? "Θέλετε να εξασφαλίσετε ότι η πισίνα σας θα παραμείνει πάντα καθαρή και έτοιμη για χρήση;" : 
                        "Do you want to ensure that your pool stays always clean and ready for use?"}
                    </p>
                    <Title text={currentLang === "gr" ? "Κλείστε Ραντεβού Τώρα" : "Book An Appointment Now"} />
                    <SubTitle text={currentLang === "gr" ? 
                        "Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας" : 
                        "We are here to help you with any questions or concerns you may have about our pool cleaning services"} 
                    />
                    <div className="text-center my-5">
                        <Link to="/contact" className="btn btn-outline-secondary btn-lg">
                            {currentLang === "gr" ? "Κλείστε ραντεβού τώρα" : "Book an Appointment Now"}
                        </Link>
                    </div>
                    <div>
                        <img className="img-fluid w-100 h-100 object-fit-cover" src={CTAImage} alt="contact me for pool cleaning services" />
                    </div>
                </div>
            </section>

            <section className="clients py-4">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "Οι Πελάτες Μας" : "Our Clients"} />
                    <div className="row row-cols-auto justify-content-center mt-2 mb-5 gy-5">
                        {customersImages.map(clientURL => (
                            <div key={clientURL} className="col">
                                <img className="icon-very-large icon mx-4" src={clientURL} alt="clients that used the pool cleaning services" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonials py-4">
                <div className="container-lg">
                    <Title text={currentLang === "gr" ? "Τι Εχουν Πει Για Εμας ?" : "What Have They Said About Us ?"} />
                    <div className="row row-cols-1 row-cols-lg-3 justify-content-center align-items-stretch gy-4 mt-5">
                        {testimonials.map(testim => (
                            <div key={testim.name} className="col">
                                <div className="p-4 bg-tertiary h-100 shadow-lg">
                                    <h1 className="fs-4 text-secondary text-center">
                                        {testim.name}
                                    </h1>
                                    <div className="d-flex align-items-center justify-content-center gap-2 my-4">
                                        <StarIcon className="icon-secondary" />
                                        <StarIcon className="icon-secondary" />
                                        <StarIcon className="icon-secondary" />
                                        <StarIcon className="icon-secondary" />
                                        <StarIcon className="icon-secondary" />
                                    </div>
                                    <p className="text-center fs-6 fst-italic text-light">
                                        {currentLang === "gr" ? testim.description : testim.descriptionEn}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>


    )
}
