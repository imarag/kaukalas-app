import "../styles/Contact.css"

export default function Contact() {
    return (
        <>
            <section className="section section--contact-form">
                <h1 className="form__title">Επικοινωνίστε Μαζί Μας</h1>
                <div className="form__content">
                    <form className="form">
                        <div className="form__element">
                            <label className="form__label" for="name">ΟΝΟΜΑ</label>
                            <input className="form__textinput" type="text" id="name" placeholder="π.χ. Ιωάννης"/>
                        </div>
                        <div className="form__element">
                            <label className="form__label" for="surname">ΕΠΙΘΕΤΟ</label>
                            <input className="form__textinput" type="text" id="surname" placeholder="π.χ. Μαραγκάκης"/>
                        </div>
                        <div className="form__element">
                            <label className="form__label" for="comments">ΣΧΟΛΙΑ</label>
                            <textarea className="form__textarea" rows="5" placeholder="Πληκτρολογήστε τα σχόλιά σας">

                            </textarea>
                        </div>
                        <button className="btn btn--dark btn--medium">Αποστολή</button>
                    </form>
                </div>
            </section>
            <section>
               
            </section>
        </>
    )
}