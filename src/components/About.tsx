import React from 'react';
import './styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import tsLogo from '../assets/images/typescript-logo.svg';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
    const { theme } = useTheme();

    return (
        <section
            id="about"
            className="about-section"
            style={{
                backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
            }}
        >
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I'm Tatiana Lavrova, a dedicated Frontend Software Engineer with a passion for creating exceptional web applications. Over the years, I've honed my skills in modern frontend technologies and frameworks, enabling me to build reliable, scalable, and aesthetically pleasing user interfaces.
                </p>
                <p>
                    I thrive on collaboration, constantly seeking new challenges and learning opportunities to further enhance my expertise. My projects reflect a blend of creativity and technical proficiency, aimed at delivering optimal user experiences.
                </p>
                <div className="skills-icons">
                    <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" />
                    <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" />
                    <FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript" />
                    <img src={tsLogo} alt="TypeScript" title="TypeScript" className="icon-image"/>
                    <FontAwesomeIcon icon={faReact} size="2x" title="React" />
                    <FontAwesomeIcon icon={faAngular} size="2x" title="Angular" />
                    <FontAwesomeIcon icon={faGitAlt} size="2x" title="Git" />
                    {/* Add more icons as needed */}
                </div>
            </div>
        </section>
    );
};

export default About;