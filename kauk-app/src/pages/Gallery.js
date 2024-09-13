
import Title from "../components/Title.js"
import SubTitle from "../components/SubTitle.js"

import { galleryImages } from "../data.js"

export default function Gallery() {
    return (
        <div className="Gallery">
            <section className="pt-nav-height">
                <div className="container-lg">
                    <Title text="ΤΑ ΕΡΓΑ ΜΑΣ" />
                    <SubTitle text="Εξερευνήστε τη δουλειά μας μέσα από μια ποικιλία εικόνων που αναδεικνύουν την ποιότητα, την καινοτομία και την προσοχή στη λεπτομέρεια, που χαρακτηρίζουν κάθε μας έργο" />
                    <div className="row justify-content-center align-items-stretch py-5">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="w-100 h-100 img-hover-scale">
                                    <img src={image} alt={`Gallery ${index}`} className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}