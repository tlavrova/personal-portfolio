import React from 'react';
import './styles/Home.css';
import portfolioPhoto from '../assets/images/portfolio-photo.jpg';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="home-section"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Tatiana Lavrova</span></h1>
        <h2>Frontend Software Engineer</h2>
        <p className="intro-text">
         I craft visually stunning and highly responsive web experiences. With a strong foundation in HTML, CSS, TypeScript, Angular,
          and React, I transform creative ideas into functional, user-friendly websites. My expertise lies in building interfaces that not
          only meet client expectations but also provide users with an intuitive and enjoyable journey. Explore my projects to see how I
          blend technology and design to bring web applications to life.
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
