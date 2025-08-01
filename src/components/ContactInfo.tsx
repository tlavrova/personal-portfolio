import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles/Contact.css';

const ContactInfo: React.FC = () => (
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
            <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
            <div>
                <h4>Location</h4>
                <p>Amsterdam, Netherlands</p>
            </div>
        </div>

        <div className="social-links">
            <a href="https://linkedin.com/in/tlavrova230" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/tlavrova" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </div>
);

export default ContactInfo;
