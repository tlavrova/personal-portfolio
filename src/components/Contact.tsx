import React, { useEffect, useState } from 'react';
import './styles/Contact.css';
import ContactInfo from './ContactInfo';
import ContactForm, { FormData } from './ContactForm';
import SuccessMessage from './SuccessMessage';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset success message after 5 seconds
    useEffect(() => {
        if (!submitted) return;
        const timer = setTimeout(() => setSubmitted(false), 5000);
        return () => clearTimeout(timer);
    }, [submitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Clear any previous errors
        setError('');
        setIsSubmitting(true);

        // Create form data with additional fields to reduce spam filtering
        const enhancedFormData = {
            ...formData,
            _subject: `Portfolio Contact: ${formData.subject || 'New message'}`,
            _replyto: formData.email,
            _format: 'plain'
        };

        // Send form data to Formspree
        fetch('https://formspree.io/f/xrblbgnq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(enhancedFormData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            // Show success message
            setSubmitted(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        })
        .catch(error => {
            console.error('Error sending form:', error);
            setError('Failed to send message. Please try again later.');
        })
        .finally(() => setIsSubmitting(false));
    };

    return (
        <section
            id="contact"
            className="contact-section"
        >
            <div className="contact-content">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container">
                    <ContactInfo />
                    <div className="contact-form-container">
                        {submitted ? (
                            <SuccessMessage />
                        ) : (
                            <ContactForm
                                formData={formData}
                                error={error}
                                isSubmitting={isSubmitting}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
