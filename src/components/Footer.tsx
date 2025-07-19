import React from 'react';
import './styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: tlavrova230@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social-links">
            <a href="https://github.com/tlavrova" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/tlavrova230" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
