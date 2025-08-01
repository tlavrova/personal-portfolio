import React from 'react';
import './styles/Contact.css';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactFormProps {
    formData: FormData;
    error: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, error, handleChange, handleSubmit }) => (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send Me a Message</h3>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
            />
        </div>

        <button type="submit" className="submit-button">
            Send Message
        </button>
    </form>
);

export default ContactForm;
export type { FormData, ContactFormProps };
