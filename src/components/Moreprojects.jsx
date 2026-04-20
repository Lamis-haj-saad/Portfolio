import React from 'react';
import { moreProjectsData } from '../data/Portfoliodata';

const ProjectCard = ({ project, index, total }) => {
  return (
    <div className="project-card">
      <div className="project-number">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
      <div className="project-title">{project.title}</div>
      <div className="project-desc">{project.desc}</div>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {project.github && (
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
            ↗ GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const MoreProjects = () => {
  return (
    <div className="section">
      <div className="section-label">// work</div>
      <h2 className="section-title">More Projects</h2>
      <div className="projects-grid">
        {moreProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            total={moreProjectsData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;