import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Portfolio.css';
import fotoPerfil from '../Images/FotoVale.JPG';
import simonSenseImage from '../Images/SimonSenseImage.jpg';
import smartPDImage from '../Images/SmartPillDispenser_Isometric.png';
import platImage from '../Images/6DOF_Platform_CAD_Isometric.png';
import resume from '../Files/ValentinaHerrera_Resume.pdf';
import luchito from '../Images/Luchito.jpg'
import roboticsCompetition from '../Images/RoboticsCompetition.jpg'
import fsProject from '../Images/fsProject.png'
import FS from '../Images/FS.jpg'
import QM from '../Images/QM.jpg'
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Six Degrees of Freedom Platform",
    description: "All around project focused on modeling and building a six dof platform to simulate movement.",
    imageUrl: platImage,
    liveUrl: "/MainProject1"
  },
  {
    id: 2,
    title: "Smart Pill Dispenser",
    description: "Assistive technology project of a gadget made to serve as a pill dispenser.",
    imageUrl: smartPDImage,
    liveUrl: "/MainProject2"
  },
  {
    id: 3,
    title: "PCB for Simon Sense",
    description: "Project focused on Printed Circuit Board design and fabrication.",
    imageUrl: simonSenseImage,
    liveUrl: "/MainProject3"
  }
];

const renderFormattedText = (text) => {
  if (!text) return null;

  // Split text by **bold** markers and create JSX elements
  const parts = text.split(/(\*\*.*?\*\*)/);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove ** markers and make bold
      const boldText = part.slice(2, -2);
      return <strong key={index}>{boldText}</strong>;
    }
    return part;
  });
};

const timelineData = [
  {
    id: 1,
    title: "Meet Luchito\n2018",
    description: "Started doing **electronics** and **rapid prototyping** when I was **13**. Got second place at the China Adolescents Science and Technology Innovation Contest with Luchito, a **sign language translator robot** capable of signing all the letters of the Spanish alphabet.",
    image: luchito,
  },
  {
    id: 2,
    title: "Robotic Minds\n2018-2023",
    description: "I was part of Robotic Minds, a STEM school, for almost **five years**. Not only did I learn about mechatronics, but I also learned to work on **team projects** focusing on **problem solving**, **adaptability**, **leadership**, and **communication**.",
    image: roboticsCompetition,
  },
  {
    id: 3,
    title: "My path to college\n2023",
    description: "**Designed** and **built** a small vehicle controlled with a game engine application through serial commands to apply for a scholarship at Full Sail University. My project was accepted and after going through the last stages I was awarded a **full tuition scholarship**.",
    image: fsProject,
  },
  {
    id: 4,
    title: "College Graduation\n2025",
    description: "During my time in college, I advanced my **technical expertise** while also developing strong **time management** skills. More importantly, I learned to **perform effectively in fast-paced environments** and consistently meet demanding deadlines.",
    image: FS,
  },
  {
    id: 5,
    title: "What is next?\n\n",
    description: "I’m excited for what’s ahead and **eager to apply and advance my skills** in the product development industry. My main goals are to make a **meaningful impact** and get **hands-on experience** while continuing to **learn and grow professionally**.",
    image: QM,
  }
  // Add more items as needed
];



function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, timelineData.length - itemsPerView);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // const handleIndicatorClick = (index) => {
  //   const maxIndex = Math.max(0, timelineData.length - itemsPerView);
  //   setCurrentIndex(Math.min(index, maxIndex));
  // };

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setItemsPerView(1);
      } else if (width <= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      const itemWidth = timelineRef.current.querySelector('.timeline-item')?.offsetWidth || 320;
      const gap = 32; // 2rem gap
      const translateX = -currentIndex * (itemWidth + gap);
      timelineRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex, itemsPerView]);
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
          <li><a href={resume} target="_blank" rel="noopener noreferrer" >Resume</a></li>
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

      <section className="trajectory-section" id="journey">
        <div className="trajectory-wrapper">
          <h3>My Journey</h3>

          <div className="timeline-container">
            {/* Navigation Buttons */}
            <button
              className="nav-button prev"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Previous timeline item"
            >
              ‹
            </button>

            <button
              className="nav-button next"
              onClick={handleNext}
              disabled={currentIndex >= Math.max(0, timelineData.length - itemsPerView)}
              aria-label="Next timeline item"
            >
              ›
            </button>

            {/* Timeline */}
            <div className="timeline" ref={timelineRef}>
              {timelineData.length > 0 ? (
                timelineData.map((item, index) => (
                  <div key={item.id || index} className="timeline-item">
                    <div className="timeline-point"></div>
                    <div className="timeline-content">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title || 'Timeline item'}
                          className="timeline-image"
                          loading="lazy"
                        />
                      )}
                      {item.date && (
                        <div className="timeline-date">{item.date}</div>
                      )}
                      {item.title && (
                        <h4 className="timeline-title" style={{ whiteSpace: 'pre-line' }}>{item.title}</h4>
                      )}
                      {item.description && (
                        <p className="timeline-description">
                          {renderFormattedText(item.description)}
                        </p>
                      )}
                      {item.skills && item.skills.length > 0 && (
                        <div className="timeline-skills">
                          {item.skills.map((skill, skillIndex) => (
                            <span key={skillIndex}>{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="timeline-item">
                  <div className="timeline-point"></div>
                  <div className="timeline-content">
                    <div className="timeline-title">No timeline data available</div>
                    <p className="timeline-description">
                      Add your journey milestones to the timelineData array.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Timeline Indicators
          <div className="timeline-indicators">
            {timelineData.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleIndicatorClick(index);
                  }
                }}
                aria-label={`Go to timeline item ${index + 1}`}
              />
            ))}
          </div> */}
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