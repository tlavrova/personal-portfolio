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
    isSubmitting: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, error, isSubmitting, handleChange, handleSubmit }) => (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send Me a Message</h3>

        {error && <div className="error-message" role="alert">{error}</div>}

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

        <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
    </form>
);

export default ContactForm;
export type { FormData, ContactFormProps };
