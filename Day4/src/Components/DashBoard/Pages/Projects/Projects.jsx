import React from 'react';
import './Projects.css';
import Project1 from './admk.jpg';
import Project2 from './dmk1.jpg';
import Project3 from './bjp.png';
import Project4 from './congress.jpg';

export default function Projects() {
  return (
    <div className="projects-main-content">
      <div className='projects-welcome'>
        <h1>PARTIES</h1>
          </div>
      <div className='projects-projects'>
        <div className="projects-project-card">
          <img src={Project1} alt="Project 1" />
          <h3>Anna Dravida Munetra Kazhagam</h3>
        </div>
        <div className="projects-project-card">
          <img src={Project2} alt="Project 2" />
          <h3>Dravida Munetra Kazhagam</h3>
        </div>
        <div className="projects-project-card">
          <img src={Project3} alt="Project 3" />
          <h3>Bharathiya Janata Party</h3>
        </div>
        <div className="projects-project-card">
          <img src={Project4} alt="Project 4" />
          <h3>Indian National Congress</h3>
        </div>
      </div>
    </div>
  )
}
