import React, { useState } from 'react';
import './styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

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

        // Create form data with additional fields to reduce spam filtering
        const enhancedFormData = {
            ...formData,
            _subject: `Portfolio Contact: ${formData.subject || 'New message'}`,
            _replyto: formData.email, // Ensures proper reply-to header
            _format: 'plain' // Plain text format can help with spam filtering
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
        .then(data => {
            console.log('Success:', data);

            // Show success message
            setSubmitted(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        })
        .catch(error => {
            console.error('Error sending form:', error);
            setError('Failed to send message. Please try again later.');
        });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me for any inquiries or opportunities. I'm open to freelance work, full-time positions, and collaborations.</p>

                    <div className="info-item">
                        <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:tlavrova230@gmail.com">tlavrova230@gmail.com</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <FontAwesomeIcon icon={faPhone} className="info-icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+31 (6) 5877-6814</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
                        <div>
                            <h4>Location</h4>
                            <p>Amsterdam, Netherlands</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="contact-form-container">
                    {submitted ? (
                        <div className="success-message">
                            <h3>Thank you for your message!</h3>
                            <p>I'll get back to you as soon as possible.</p>
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
