import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { validateFormData } from "../validate.js";

export default function ContactForm() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [formDataError, setFormDataError] = useState(null);
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();
      
        // Validate form data
        let errorsList = validateFormData(name, email, telephone, message);

        if (errorsList.length !== 0) {
            setFormDataError(errorsList);
            return;
        }

        setFormDataError(null);  // Clear any form errors
        setIsSubmitting(true);
       
        // Send the email using emailjs
        emailjs
            .sendForm('service_6tgskmr', 'template_aj14h5c', form.current, {
                publicKey: 'ux8hQOzLCp6f8Utvu',
            })
            .then(() => {
                setStateMessage('Το μήνυμα εστάλει!');
                setIsSubmitting(false);
                
                // Clear form fields after successful submission
                setName('');
                setEmail('');
                setTelephone('');
                setMessage('');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000);
            })
            .catch((error) => {
                // Handle network or server error
                setStateMessage('Κάτι πήγε στραβά, παρακαλώ προσπαθήστε αργότερα!');
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
            {formDataError && formDataError.map((err, index) => (
                <p key={index} className="text-danger text-center my-2">{err}</p>
            ))}
            {error && <p className="my-5 py-4 text-danger fw-light bg-dark">{error}</p>}
            
            <form ref={form} onSubmit={sendEmail}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label text-light">ΟΝΟΜΑΤΕΠΩΝΥΜΟ</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="name" 
                        name="user_name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="email" className="form-label text-light">EMAIL</label>
                    <input 
                        type="email" 
                        className="form-control"
                        id="email" 
                        name="user_email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="telephone" className="form-label text-light">ΤΗΛΕΦΩΝΟ</label>
                    <input 
                        type="tel"  // Changed to "tel" for better handling of phone numbers
                        id="telephone" 
                        className="form-control"
                        name="telephone" 
                        value={telephone} 
                        onChange={(e) => setTelephone(e.target.value)} 
                        required 
                    />
                </div>
                <div className="my-3" disabled={isSubmitting}>
                    <label htmlFor="message" className="form-label text-light">ΜΗΝΥΜΑ</label>
                    <textarea 
                        id="message" 
                        className="form-control"
                        name="message" 
                        value={message} 
                        rows="5" 
                        onChange={(e) => setMessage(e.target.value)} 
                        disabled={isSubmitting} 
                        required
                    ></textarea>
                </div>
                <div className="mt-5 text-center">
                    <button 
                        className="btn btn-secondary btn-lg d-inline-flex align-items-center" 
                        type="button" 
                        disabled={isSubmitting}
                        onClick={sendEmail}
                        >
                        Αποστολή
                        <span 
                            className="spinner-border spinner-border-sm ms-2" 
                            role="status" 
                            aria-hidden="true" 
                            hidden={!isSubmitting} 
                        ></span>
                        <span className="visually-hidden">Αποστολή...</span>
                    </button>
                </div>
                {stateMessage && <p className="my-5 py-4 text-light fw-light bg-dark">{stateMessage}</p>}
            </form>
        </div>
    );
}
