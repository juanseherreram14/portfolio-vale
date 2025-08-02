import React from 'react';
import '../Styles/Portfolio.css';
import fotoPerfil from '../Images/FotoVale.JPG';
import golImage from '../Images/Gameoflife.png';
import logoGame from '../Images/BCSPOTB_Logo.png';
import gameImage from '../Images/GameplayScreenshot.png';
import platImage from '../Images/PlatformImage.png';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Game of Life",
    description: "Project focused on representing Conway's Game of Life. It’s a simple, grid-based simulation that models how cells live, die, or reproduce over time based on a few rules.",
    technologies: ["C++", "wxWidgets"],
    imageUrl: golImage,
    liveUrl: golImage
  },
  {
    id: 2,
    title: "Bean Conquest: Spill of the Beans",
    description: "First person strategy videogame with the objective of conquering cities and battlieng enemies.",
    technologies: ["C#", "Unity"],
    imageUrl: logoGame,
    liveUrl: gameImage
  },
  {
    id: 3,
    title: "Flying Around",
    description: "All around project focused on modeling and building a six dof platform to simulate movement during game.",
    technologies: ["C++", "Solidworks", "PCB modeling", "Unity"],
    imageUrl: platImage,
    liveUrl: "https://youtu.be/_bN-MrGRLHM"
  }
];

function Main() {
  return (

    <div className="portfolio">
      <nav className="navbar glass-navbar">
        <div className="navbar-left">
          <h1 className="navbar-title"> </h1>
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
            <h1>Valentina Herrera Molano</h1>
            <h2>Hardware Engineering Portfolio</h2>
            <p className="summary">
              Hello and welcome to my portfolio!
              I’m a passionate engineer specializing in CAD design, PCB design, and digital fabrication. 
              With a strong foundation in creating functional and innovative solutions, I aim to contribute my skills to the product development industry, from concept to prototype to final production.
            </p>
          </motion.div>
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
                  <li>Solidworks 3D modeling</li>
                  <li>PCB modeling</li>
                </ul>
              </div>
              <div className="skills-block">
                <h4>Languages</h4>
                <ul>
                  <li>Spanish (Native)</li>
                  <li>English (Proficient)</li>
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