import React from 'react';
import './WorkShowcase.css';

const WorkShowcase = ({ projects, kaggleCompetitions, certifications }) => {
  return (
    <section className="work-showcase">
      <h2>Projects</h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div key={index} className="work-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>

      <h2>Kaggle Competitions</h2>
      <div className="grid-container">
        {kaggleCompetitions.map((competition, index) => (
          <div key={index} className="work-item">
            <h3>{competition.title}</h3>
            <p>{competition.description}{competition.rank}</p>
            <a href={competition.link} target="_blank" rel="noopener noreferrer">View Competition</a>
          </div>
        ))}
      </div>

      <h2>Certifications</h2>
      <div className="grid-container">
        {certifications.map((certification, index) => (
          <div key={index} className="work-item">
            <h3>{certification.title}</h3>
            <p>{certification.description}</p>
            <a href={certification.link} target="_blank" rel="noopener noreferrer">View Certification</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;


