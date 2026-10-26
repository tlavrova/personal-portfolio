import React from 'react';
import './styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import tsLogo from '../assets/images/typescript-logo.svg';
import storybookLogo from '../assets/images/storybook-logo.svg';

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="about-section"
        >
            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                <p>
                    I'm Tatiana Lavrova, a Frontend Developer in Amsterdam with 5+ years of experience in Angular, React and TypeScript, and 12 years in software development overall.
                </p>
                <p>
                    At Visma Dialog, an HR SaaS platform, I've worked on AI-powered features: an AI coaching assistant, AI analysis of engagement surveys and AI-driven talent mapping. I also built the design system with Storybook and use Claude Code in my daily work, including custom skills for automated code review.
                </p>
                <p>
                    Before that, I worked in fintech at BUX and Forex Club, and started my career in ERP development. I'm now open to Frontend and AI-focused Quality Engineering roles in the Netherlands.
                </p>
                <div className="skills-icons">
                    <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" />
                    <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" />
                    <FontAwesomeIcon icon={faJsSquare} size="2x" title="JavaScript" />
                    <img src={tsLogo} alt="TypeScript" title="TypeScript" className="icon-image"/>
                    <FontAwesomeIcon icon={faReact} size="2x" title="React" />
                    <FontAwesomeIcon icon={faAngular} size="2x" title="Angular" />
                    <img src={storybookLogo} alt="Storybook" title="Storybook" className="icon-image"/>
                    <FontAwesomeIcon icon={faGitAlt} size="2x" title="Git" />
                </div>
            </div>
        </section>
    );
};

export default About;