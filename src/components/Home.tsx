import React from 'react';
import './styles/Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Tatiana Lavrova</span></h1>
        <h2>Frontend Software Engineer</h2>
        <p className="intro-text">
          I craft responsive websites where technology meets creativity.
          With a strong foundation in design and development, I create engaging digital experiences
          that help businesses achieve their goals.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
      <div className="profile-image-container">
        <div className="profile-image">
          {/* Replace with your actual image later */}
          <div className="placeholder-image">YN</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
