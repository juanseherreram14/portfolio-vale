import React from 'react';
import '../Styles/Portfolio.css';
import fotoPerfil from '../Images/FotoVale.JPG';
import simonSenseImage from '../Images/SimonSenseImage.jpg';
import smartPDImage from '../Images/SmartPillDispenser_Isometric.png';
import platImage from '../Images/6DOF_Platform_CAD_Isometric.png';
import resume from '../Files/ValentinaHerrera_Resume_ProductEngineering.pdf';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Six Degrees of Freedom Platform",
    description: "All around project focused on modeling and building a six dof platform to simulate movement during game.",
    technologies: [],
    imageUrl: platImage,
    liveUrl: "/MainProject1"
  },
  {
    id: 2,
    title: "Smart Pill Dispenser",
    description: "First person strategy videogame with the objective of conquering cities and battlieng enemies.",
    technologies: [],
    imageUrl: smartPDImage,
    liveUrl: "/MainProject2"
  },
  {
    id: 3,
    title: "PCB for Simon Sense",
    description: "Project focused on representing Conway's Game of Life. It’s a simple, grid-based simulation that models how cells live, die, or reproduce over time based on a few rules.",
    technologies: [],
    imageUrl: simonSenseImage,
    liveUrl: "/MainProject3"
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
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href= {resume} target="_blank" rel="noopener noreferrer" >Resume</a></li>
        </ul>
      </nav>
      <section className="hero-section" id="about">
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
            <h2>Product Engineering Portfolio</h2>
            <p className="summary">
              Hello and welcome to my portfolio!
              I’m a SolidWorks certified engineer specializing in CAD design, PCB design, and digital fabrication.
              With a strong foundation in creating functional and innovative solutions, I aim to contribute my skills to the product development industry, from concept to prototype to final production.
            </p>
          </motion.div>
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
                  {project.liveUrl ? (
                    <a href={project.liveUrl}>
                      Show me
                    </a>
                  ) : (
                    <button disabled>Project in development</button>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="view-all-projects">
            <a
              href="/all-projects"
              className="view-all-btn"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h3>CONTACT ME</h3>
        <div className="contact-grid">
          <div>
            <div className="info-block">
              <p>Phone Number: 689 298 7888</p>
              <a
                href="mailto:vhm110305@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "1rem" }}
              >
                Email: vhm110305@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/valentinaherreramolano/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "1rem" }}
              >
                LinkedIn Profile
              </a>
            </div>
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