import React from 'react';
import { Experience } from './data/experiencesData';
import './styles/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { jobTitle, company, website, period, technologies, responsibilities } = experience;

  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{jobTitle}</h3>
        <span className="experience-period">{period}</span>
      </div>
      <div className="experience-company">
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer" className="company-link">
            {company} <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
          </a>
        ) : (
          <span className="company-name">{company}</span>
        )}
      </div>

      {technologies.length > 0 && (
        <div className="tech-badges">
          {technologies.map(tech => (
            <span key={tech} className="experience-tech-badge">{tech}</span>
          ))}
        </div>
      )}

      {responsibilities?.length > 0 && (
        <ul className="responsibilities-list">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="responsibility-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
