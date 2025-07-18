import React from 'react';
import './styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import portfolioPreview from '../assets/images/portfolio-preview.jpg';
import recipeFinder from '../assets/images/recipe-finder.png';
import weatherApp from '../assets/images/weather-app.png';
import todoList from '../assets/images/todo-list.png';

// Define a type for project objects
interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github?: string;
    liveDemo?: string;
}

const Projects: React.FC = () => {
    // Sample projects data - replace with your actual projects
    const projects: Project[] = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A personal portfolio website built to showcase my projects and skills.",
            technologies: ["React", "TypeScript", "CSS"],
            image: portfolioPreview,
            github: "https://github.com/tlavrova/personal-portfolio",
            liveDemo: "tlavrova.github.io/personal-portfolio/"
        },
        {
            id: 2,
            title: "Recipe Finder",
            description: "A web application that helps users discover recipes based on available ingredients.",
            technologies: ["React", "TypeScript", "HTML", "CSS", "GitHub Pages"],
            image: recipeFinder,
            github: "https://github.com/tlavrova/recipe-finder",
            liveDemo: "https://tlavrova.github.io/recipe-finder"
        },
        {
            id: 3,
            title: "Weather App",
            description: "A React-based weather application that allows users to search for weather information by city name or current location.",
            technologies: ["React", "TypeScript", "CSS", "OpenWeather API", "Geolocation API", "Local Storage"],
            image: weatherApp,
            github: "https://github.com/tlavrova/weather-app",
            liveDemo: "https://tlavrova.github.io/weather-app"
        },
        {
            id: 4,
            title: "Todo List Application",
            description: "A responsive React-based todo list application that allows users to create, manage, and track their tasks.",
            technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "GitHub Pages"],
            image: todoList,
            github: "https://github.com/tlavrova/todo-list",
            liveDemo: "https://tlavrova.github.io/todo-list"
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-inner">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FontAwesomeIcon icon={faGithub} /> Source
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
