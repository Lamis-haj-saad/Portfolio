import React from 'react';
import { featuredProjectsData } from '../data/portfolioData';

const FeaturedProjectCard = ({ project, index, total }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '1.5rem auto' }}>
      <div className="project-detail-card">
        <div className="project-detail-inner" style={{ flexDirection: 'column' }}>
          <div className="project-detail-content">
            <div className="project-number">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>
            <div className="project-detail-title">{project.title}</div>
            <div className="project-detail-desc">{project.desc}</div>
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
          <div className="project-detail-media">
            {project.images.map((image, i) => (
              <React.Fragment key={i}>
                {project.comments[i] && (
                  <div className="project-detail-more">{project.comments[i]}</div>
                )}
                <img src={image} className="project-detail-img" alt={project.title} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <div className="section" id="projects">
      <div className="section-label">// work</div>
      <h2 className="section-title" style={{ margin: 0, padding: 0 }}>Projects</h2>
      <div>
        {featuredProjectsData.map((project, index) => (
          <FeaturedProjectCard
            key={index}
            project={project}
            index={index}
            total={featuredProjectsData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;