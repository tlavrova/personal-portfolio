import React from 'react';
import './styles/Home.css';
import portfolioPhoto from '../assets/images/portfolio-photo.jpg';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="home-section"
    >
      <div className="home-content">
        <p className="open-to-work">
          <span className="open-to-work-dot" aria-hidden="true"></span>
          Open to Frontend &amp; AI Quality Engineering roles · Netherlands
        </p>
        <h1>Hello, I'm <span className="highlight">Tatiana Lavrova</span></h1>
        <h2>Frontend Developer</h2>
        <p className="intro-text">
          5+ years of experience with Angular, React and TypeScript. I've built AI-powered features, a design
          system with Storybook, and AI-driven code review tooling, always with a strong focus on quality.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
      <div className="profile-image-container">
        <div className="profile-image">
            <img src={portfolioPhoto} alt="Tatiana Lavrova" />
        </div>
      </div>
    </section>
  );
};

export default Home;
