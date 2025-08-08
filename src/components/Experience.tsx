import React from 'react';
import './styles/Experience.css';
import { experiencesData } from './data/experiencesData';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="experience-section"
      style={{
        backgroundColor: 'var(--color-bg)'
      }}
    >
      <div className="experience-inner">
        <h2>Experience</h2>
        <div className="experience-container">
          {experiencesData.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
