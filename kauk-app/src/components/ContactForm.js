import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ currentLang }) {
    const form = useRef();
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [telephoneError, setTelephoneError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    function sendEmail(e) {
        e.preventDefault();

        // Declare local variables for errors
        let localNameError = null;
        let localEmailError = null;
        let localTelephoneError = null;
        let localMessageError = null;

        // Validate Name
        if (!name) {
            localNameError = currentLang === "gr" ? "Παρακαλώ εισάγετε το ονοματεπώνυμό σας" : "Please enter your full name.";
        } else if (name.length > 50) {
            localNameError = currentLang === "gr" ? "Το όνομα είναι πολύ μεγάλο." : "The name is too long.";
        } else if (name.length < 5) {
            localNameError = currentLang === "gr" ? "Το όνομα είναι πολύ μικρό." : "The name is too short.";
        }

        // Validate Email
        const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

        if (!email) {
            localEmailError = currentLang === "gr" ? "Παρακαλώ εισάγετε το email σας." : "Please enter your email.";
        } else if (!isEmail) {
            localEmailError = currentLang === "gr" ? "Η μορφή του email δεν είναι σωστή." : "Invalid email format.";
        } else if (email.length > 250) {
            localEmailError = currentLang === "gr" ? "Το email είναι πολύ μεγάλο." : "The email is too long.";
        }
        
        // Validate Telephone
        const hasOnlyDigits = /^\d+$/.test(telephone);
        if (!telephone) {
            localTelephoneError = currentLang === "gr" ? "Παρακαλώ εισάγετε το τηλέφωνό σας." : "Please enter your telephone number.";
        } else if (telephone.length < 8 || telephone.length > 15) {
            localTelephoneError = currentLang === "gr" ? "Το τηλέφωνο πρέπει να έχει 8-15 ψηφία." : "The telephone must have 8-15 digits.";
        } else if (!hasOnlyDigits) {
            localTelephoneError = currentLang === "gr" ? "Το τηλέφωνο πρέπει να περιέχει μόνο ψηφία." : "The telephone should only contain digits.";
        }

        // Validate Message
        if (!message) {
            localMessageError = currentLang === "gr" ? "Παρακαλώ εισάγετε το μήνυμά σας." : "Please enter your message.";
        } else if (message.length < 10) {
            localMessageError = currentLang === "gr" ? "Το μήνυμα είναι πολύ μικρό." : "The message is too short.";
        }
        else if (message.length > 1000) {
            localMessageError = currentLang === "gr" ? "Το μήνυμα είναι πολύ μεγάλο." : "The message is too large.";
        }

        // Check if there are any validation errors
        if (localNameError || localEmailError || localTelephoneError || localMessageError) {
            // Update state with local error messages
            setNameError(localNameError);
            setEmailError(localEmailError);
            setTelephoneError(localTelephoneError);
            setMessageError(localMessageError);
            return;
        }

        // reseting the errors
        setNameError(null);
        setEmailError(null);
        setTelephoneError(null);
        setMessageError(null);

        // Proceed with form submission if no errors
        setIsSubmitting(true);

        emailjs
            .sendForm('service_6tgskmr', 'template_aj14h5c', form.current, {
                publicKey: 'ux8hQOzLCp6f8Utvu',
            })
            .then(() => {
                
                // Clear form fields after successful submission
                setName('');
                setEmail('');
                setTelephone('');
                setMessage('');

                setIsSubmitting(false);
                
                setStateMessage(currentLang === "gr" ? 'Το μήνυμα εστάλη με επιτυχία!' : 'Message sent successfully!');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000);
            })
            .catch((error) => {
                // Handle network or server error
                setStateMessage(currentLang === "gr" ? 'Υπήρξε κάποιο πρόβλημα, παρακαλούμε δοκιμάστε αργότερα.' : 'There was an issue, please try again later.');
                setIsSubmitting(false);
                setError(error.message);

                // Hide error message after 5 seconds
                setTimeout(() => {
                    setError(null);
                }, 5000);
            });
    }

    return (
        <div>
            {error && <p className="my-5 py-4 text-danger fw-light bg-dark">{error}</p>}
            
            <form ref={form} onSubmit={sendEmail}>
                <div className="my-3">
                    <label htmlFor="name" className="block text-sm mb-2 font-semibold leading-6 text-light">
                        {currentLang === "gr" ? "ΟΝΟΜΑΤΕΠΩΝΥΜΟ" : "FULL NAME"}
                    </label>
                    <input 
                        type="text" 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name" 
                        name="user_name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    {nameError && <p className="text-danger fw-light">{nameError}</p>}
                </div>
                <div className="my-3">
                    <label htmlFor="email" className="block text-sm mb-2 font-semibold leading-6 text-light">
                        {currentLang === "gr" ? "EMAIL" : "EMAIL"}
                    </label>
                    <input 
                        type="email" 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="email" 
                        name="user_email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    {emailError && <p className="text-danger fw-light">{emailError}</p>}
                </div>
                <div className="my-3">
                    <label htmlFor="telephone" className="block text-sm mb-2 font-semibold leading-6 text-light">
                        {currentLang === "gr" ? "ΤΗΛΕΦΩΝΟ" : "TELEPHONE"}
                    </label>
                    <input 
                        type="tel" 
                        id="telephone" 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="telephone" 
                        value={telephone} 
                        onChange={(e) => setTelephone(e.target.value)} 
                        required 
                    />
                    {telephoneError && <p className="text-danger fw-light">{telephoneError}</p>}
                </div>
                <div className="my-3">
                    <label htmlFor="message" className="block text-sm mb-2 font-semibold leading-6 text-light">
                        {currentLang === "gr" ? "ΜΗΝΥΜΑ" : "MESSAGE"}
                    </label>
                    <textarea 
                        id="message" 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="message" 
                        value={message} 
                        rows="5" 
                        onChange={(e) => setMessage(e.target.value)} 
                        disabled={isSubmitting} 
                        required
                    ></textarea>
                    {messageError && <p className="text-danger fw-light">{messageError}</p>}
                </div>
                <div className="mt-5 text-center">
                    <button 
                        className="btn btn-secondary btn-lg d-inline-flex align-items-center" 
                        type="submit" 
                        disabled={isSubmitting}
                    >
                        {currentLang === "gr" ? "Αποστολή" : "Send"}
                        <span 
                            className="spinner-border spinner-border-sm ms-2" 
                            role="status" 
                            aria-hidden="true" 
                            hidden={!isSubmitting} 
                        ></span>
                    </button>
                </div>
            </form>
            {stateMessage && <p className="mt-3 text-success text-center fw-light">{stateMessage}</p>}
        </div>
    );
}
