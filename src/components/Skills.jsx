import React from 'react';
import { skillsData } from '../data/Portfoliodata';

const Skills = () => {
  return (
    <div className="section">
      <div className="section-label">// toolkit</div>
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-chip">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;