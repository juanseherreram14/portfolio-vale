import React from 'react';
import '../Styles/Portfolio.css';
import fotoPerfil from '../Images/FotoVale.JPG';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Simulation Project",
    description: "University project developed with C++ and Unreal Engine",
    technologies: ["C++", "Unreal Engine"],
    imageUrl: "https://via.placeholder.com/400x250?text=Simulation+Project",
    liveUrl: "https://example-project-1.com"
  },
  {
    id: 2,
    title: "Data Visualization Application",
    description: "Tool for data structures visualization",
    technologies: ["C#", "Unity"],
    imageUrl: "https://via.placeholder.com/400x250?text=Data+Viz+App",
    liveUrl: "https://example-project-2.com"
  },
  {
    id: 3,
    title: "Quito AI Day Contribution",
    description: "Volunteered at AI event",
    technologies: ["Python", "AI"],
    imageUrl: "https://via.placeholder.com/400x250?text=AI+Day",
    liveUrl: "https://example-project-3.com"
  }
];

function Main() {
  return (

    <div className="portfolio">
           <nav className="navbar glass-navbar">
  <div className="navbar-left">
    <h1 className="navbar-title">Valentina Herrera</h1>
  </div>
  <ul className="navbar-right">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
 <section className="hero-section">
        <div className="hero-content-wrapper">
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={fotoPerfil} alt="Valentina Herrera" className="hero-image" />
          </motion.div>

          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Valentina Herrera</h1>
            <h2>Simulation and Visualization Student</h2>
            <p className="summary">
              Passionate college student pursuing a Bachelor's degree in Simulation and Visualization at Full Sail University. 
              Aiming to work as a Technical Program Manager at Google with my knowledge in programming with C++ and C#.
            </p>
            <address className="contact-info" id="contact">
              <div><i className="fas fa-phone" aria-hidden="true"></i><span>+1 689 298 7888</span></div>
              <div><i className="fas fa-envelope" aria-hidden="true"></i><span>vhm110305@gmail.com</span></div>
              <div><i className="fas fa-map-marker-alt" aria-hidden="true"></i><span>Orlando, Florida</span></div>
            </address>
            <div className="social-links" role="list">
              <a href="https://www.linkedin.com/in/valentina-herrera-molano" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/valentina-herrera-molano" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about" id="about">
        <h3>About</h3>
        <div className="about-grid">
          <div>
            <h4>Education</h4>
            <div className="info-block">
              <h5>Full Sail University</h5>
              <p>Bachelor of Science: Simulation and Visualization (In progress - 2025)</p>
              <ul>
                <li>Programming in C++ and C#</li>
                <li>Version control with Git</li>
                <li>Problem solving and critical thinking</li>
              </ul>
            </div>
            <div className="info-block">
              <h5>Sek Los Valles International School</h5>
              <p>International Baccalaureate Bilingual Diploma (2023)</p>
              <ul>
                <li>Collaborative group work</li>
                <li>Work under pressure and multitasking</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Experience</h4>
            <div className="info-block">
              <h5>Student Tour Guide - Full Sail University</h5>
              <p>February 2025 - Present</p>
              <ul>
                <li>Student ambassador during tours</li>
                <li>Supporting guide operations</li>
                <li>Sharpened communication skills</li>
              </ul>
            </div>
            <div className="info-block">
              <h5>Quito AI Day 2024</h5>
              <p>Volunteer at major AI event supporting organization and logistics</p>
            </div>
          </div>
        </div>
      </section>

<section className="skills-section" id="skills">
  <div className="skills-wrapper">
    <div className="skills-content">
      <h3>Skills</h3>
      <div className="skills-columns">
        <div className="skills-block">
          <h4>Technical</h4>
          <ul>
            <li>Data structures & algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Git Version Control</li>
            <li>C++ / C# / Python</li>
            <li>Unity / Unreal Engine</li>
          </ul>
        </div>
        <div className="skills-block">
          <h4>Soft</h4>
          <ul>
            <li>Critical thinking</li>
            <li>Problem solving</li>
            <li>Collaboration</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



     <section className="projects-section" id="projects">
  <div className="projects-wrapper">
    <h3>Featured Projects</h3>
    <div className="projects-grid">
      {projects.map(project => (
        <article key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Project</a>
            ) : (
              <button disabled>Project in development</button>
            )}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      <footer>
        <p>© {new Date().getFullYear()} Valentina Herrera. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Main;