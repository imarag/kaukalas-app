import '../styles/Home.css'

import { Link, useOutletContext } from 'react-router-dom'
import CTAImage from "../images/cta-image.png"

import { mainServices } from '../data'
import { galleryBeforeAfter } from "../data"
import { testimonials } from "../data"
import { customersImages } from '../data'
import { StarIcon } from '../SvgIcons'

import Title from "../components/Title"
import SubTitle from "../components/SubTitle"

export default function Home() {
    const [currentLang] = useOutletContext();
    return (
        <>
            <section className="bg-hero-image bg-no-repeat bg-cover bg-[position:50%_30%] h-screen min-h-[35rem] pt-10 flex items-center justify-center">
                <div>
                    <h1 className="text-7xl lg:text-8xl xl:text-9xl text-center text-light font-bold">
                        GK Pool & Villas
                        <br />
                        Services
                    </h1>
                    <h2 className="text-4xl mt-6 drop-shadow-2xl text-light text-center font-semibold">
                        {currentLang === "gr" ? "Επαγγελματικός Καθαρισμός Πισίνας, Εύκολα και Γρήγορα" : "Professional Pool Cleaning, Easy and Fast"}
                    </h2>
                    <div className="w-3/4 mx-auto mt-20 flex flex-col sm:flex-row items-stretch justify-center gap-y-5 gap-x-6">
                        <Link to="/contact" className="btn btn-light">{currentLang === "gr" ? "Κλείστε ραντεβού" : "Book an Appointment"}</Link>
                        <Link to="/services" className="btn btn-outline-light btn-outline">{currentLang === "gr" ? "Μάθετε περισσότερα" : "Learn More"}</Link>
                    </div>
                </div>
            </section>
            <section className="py-20 container">
                <Title text={currentLang === "gr" ? "Οι Υπηρεσίες μας" : "Our Services"} />
                <SubTitle text={currentLang === "gr" ?
                    "Στην εταιρεία μας, προσφέρουμε μια σειρά υπηρεσιών καθαρισμού πισίνας για να διασφαλίσουμε ότι η πισίνα σας είναι πάντα καθαρή και ασφαλής" :
                    "At our company, we offer a range of pool cleaning services to ensure that your pool is always clean and safe"}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-center my-5 gap-x-3 gap-y-4">
                    {mainServices.map(serv => (
                        <div key={serv.title}>
                            <div className="overflow-hidden">
                                <img src={serv.imageURL} alt="main pool cleaning service" className="hover:scale-110 transition-all duration-500 w-full h-full object-cover" />
                            </div>
                            <h1 className="text-secondary text-2xl font-semibold mt-2">
                                {currentLang === "gr" ? serv.title : serv.titleEn}
                            </h1>
                            <p className="font-light text-lg">
                                {currentLang === "gr" ? serv.description : serv.descriptionEn}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Link to="/services" className="btn btn-outline-secondary">
                        {currentLang === "gr" ? "Μάθε περισσότερα" : "Learn More"}
                    </Link>
                </div>
            </section>
            <section className="py-20 container">
                <Title text={currentLang === "gr" ? "Τα Εργα Μας" : "Our Projects"} />
                <SubTitle text={currentLang === "gr" ?
                    "Ανακαλύψτε τις πλήρεις υπηρεσίες καθαρισμού πισίνας μας μέσα από τη λεπτομερή συλλογή φωτογραφιών πριν και μετά τον καθαρισμό" :
                    "Discover our pool cleaning services through our collection of before and after photos"}
                />
                <div className="text-center my-16">
                    <Link to="/gallery" className="btn btn-outline-secondary">
                        {currentLang === "gr" ? "Εξερευνήστε τα έργα μας" : "Explore Our Projects"}
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-6 justify-center items-center">
                    {galleryBeforeAfter.map(image => (
                        <div key={image} className="overflow-hidden">
                            <img className="hover:scale-110 transition-all duration-500 w-full h-full object-cover" src={image} alt="gallery of pools before and after the pool cleaning services applied" />
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-20 container">
                <p className="w-full md:w-3/4 lg:w-1/2  my-5 mx-auto text-2xl font-semibold text-center">
                    {currentLang === "gr" ? "Θέλετε να εξασφαλίσετε ότι η πισίνα σας θα παραμείνει πάντα καθαρή και έτοιμη για χρήση;" :
                        "Do you want to ensure that your pool stays always clean and ready for use?"}
                </p>
                <Title text={currentLang === "gr" ? "Κλείστε Ραντεβού Τώρα" : "Book An Appointment Now"} />
                <SubTitle text={currentLang === "gr" ?
                    "Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις ή απορίες έχετε σχετικά με τις υπηρεσίες καθαρισμού πισίνας μας" :
                    "We are here to help you with any questions or concerns you may have about our pool cleaning services"}
                />
                <div className="text-center my-16">
                    <Link to="/contact" className="btn btn-outline-secondary">
                        {currentLang === "gr" ? "Κλείστε ραντεβού τώρα" : "Book an Appointment Now"}
                    </Link>
                </div>
                <div>
                    <img className="w-full h-full object-cover" src={CTAImage} alt="contact me for pool cleaning services" />
                </div>
            </section>
            <section className="py-20 container">
                <Title text={currentLang === "gr" ? "Οι Πελάτες Μας" : "Our Clients"} />
                <div className="flex flex-row justify-center mt-10 gap-x-10 gap-y-5">
                    {customersImages.map(clientURL => (
                        <div key={clientURL}>
                            <img className="size-16 mx-4" src={clientURL} alt="clients that used the pool cleaning services" />
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-20 container">
                <Title text={currentLang === "gr" ? "Τι Εχουν Πει Για Εμας ?" : "What Have They Said About Us ?"} />
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-stretch gap-6 mt-5">
                    {testimonials.map(testim => (

                        <div key={testim.name} className="p-6 bg-tertiary h-full shadow-lg">
                            <h1 className="text-2xl text-secondary text-center font-semibold">
                                {testim.name}
                            </h1>
                            <div className="flex items-center justify-center gap-2 my-4">
                                <StarIcon className="size-6 fill-secondary" />
                                <StarIcon className="size-6 fill-secondary" />
                                <StarIcon className="size-6 fill-secondary" />
                                <StarIcon className="size-6 fill-secondary" />
                                <StarIcon className="size-6 fill-secondary" />
                            </div>
                            <p className="text-center text-base/6 text-violet-50">
                                {currentLang === "gr" ? testim.description : testim.descriptionEn}
                            </p>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}
