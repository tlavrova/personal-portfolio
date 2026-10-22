import React, { useState } from 'react';
import './styles/Experience.css';
import { experiencesData } from './data/experiencesData';
import ExperienceCard from './ExperienceCard';

// Roles shown before "Show earlier roles"; the rest are collapsed
const RECENT_ROLES_COUNT = 2;

const Experience: React.FC = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  const recentRoles = experiencesData.slice(0, RECENT_ROLES_COUNT);
  const earlierRoles = experiencesData.slice(RECENT_ROLES_COUNT);

  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="experience-inner">
        <h2 className="section-title">Experience</h2>
        <ol className="experience-timeline">
          {recentRoles.map(exp => (
            <li key={exp.id} className="timeline-item">
              <ExperienceCard experience={exp} />
            </li>
          ))}
        </ol>

        {earlierRoles.length > 0 && (
          <>
            {showEarlier && (
              <ol id="earlier-roles" className="experience-timeline earlier" start={RECENT_ROLES_COUNT + 1}>
                {earlierRoles.map(exp => (
                  <li key={exp.id} className="timeline-item">
                    <ExperienceCard experience={exp} />
                  </li>
                ))}
              </ol>
            )}
            <div className="experience-toggle">
              <button
                type="button"
                className="earlier-roles-button"
                onClick={() => setShowEarlier(prev => !prev)}
                aria-expanded={showEarlier}
                aria-controls="earlier-roles"
              >
                {showEarlier ? 'Hide earlier roles' : `Show earlier roles (${earlierRoles.length})`}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;
