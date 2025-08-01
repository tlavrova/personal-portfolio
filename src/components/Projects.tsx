import React from 'react';
import './styles/Projects.css';
import { projectsData } from './data/projectsData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="projects-section"
            style={{
                backgroundColor: 'var(--color-bg)',
            }}
        >
            <div className="projects-inner">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
