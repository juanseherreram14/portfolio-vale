import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Portfolio.css';
import fotoPerfil from '../Images/FotoVale.JPG';
//import simonSenseImage from '../Images/SimonSenseImage.jpg';
import smartPDImage from '../Images/SmartPillDispenser_Isometric.png';
import platImage from '../Images/6DOF_Platform_CAD_Isometric.png';
// import resume from '../Files/ValentinaHerreraMolano_Resume.pdf';
import luchito from '../Images/Luchito.jpg'
import roboticsCompetition from '../Images/RoboticsCompetition.jpg'
import fsProject from '../Images/fsProject.png'
import FS from '../Images/FS.jpg'
//import QM from '../Images/QM.png'
import MRT from '../Images/MRT_windowFrame.jpg'
import { motion } from 'framer-motion';

const projectsEn = [
  {
    id: 1,
    title: "Smart Pill Dispenser",
    description: "Assistive technology project of a gadget made to serve as a pill dispenser.",
    imageUrl: smartPDImage,
    liveUrl: "/MainProject2"
  },
  {
    id: 2,
    title: "Six Degrees of Freedom Platform",
    description: "Project focused on building and programming a six degrees of freedom platform to simulate movement.",
    imageUrl: platImage,
    liveUrl: "/MainProject1"
  },
  {
    id: 3,
    title: "Full Sail University Tech Building Mixed Reality Tour",
    description: "Project focused on developing an innovative tour of Full Sail's facilities using AR and VR technology.",
    imageUrl: MRT,
    liveUrl: "/MainProject4"
  }
];

const projectsEs = [
  {
    id: 1,
    title: "Dispensador de pastillas inteligente",
    description: "Proyecto de tecnología asistiva enfocado al desarrollo de un dispositivo diseñado para dispensar pastillas.",
    imageUrl: smartPDImage,
    liveUrl: "/MainProject2"
  },
  {
    id: 2,
    title: "Plataforma de seis grados de libertad",
    description: "Proyecto enfocado en construir y programar una plataforma de seis grados de libertad para simular movimiento.",
    imageUrl: platImage,
    liveUrl: "/MainProject1"
  },
  {
    id: 3,
    title: "Recorrido de realidad mixta - Full Sail University",
    description: "Proyecto para desarrollar un recorrido innovador de las instalaciones de Full Sail usando Realidad Virtual y Realidad Aumentada.",
    imageUrl: MRT,
    liveUrl: "/MainProject4"
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

const timelineDataEn = [
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
    title: "My path to Full Sail University\n2023",
    description: "**Designed** and **built** a small vehicle controlled with a Unity application through serial commands to apply for a scholarship at Full Sail University. My project was accepted and after going through the last stages I was awarded a **full tuition scholarship**.",
    image: fsProject,
  },
  {
    id: 4,
    title: "Bachelor of Science in Simulation and Visualization\n2025",
    description: "During my time in college, I advanced my **technical expertise** while also developing strong **time management** skills. More importantly, I learned to **perform effectively in fast-paced environments** and consistently meet demanding deadlines.",
    image: FS,
  }  // Add more items as needed
];

const timelineDataEs = [
  {
    id: 1,
    title: "Conoce a Luchito\n2018",
    description: "Comencé a aprender sobre **electrónica** y **prototipado rápido** cuando tenía **13** años. Obtuve el segundo lugar en el Concurso de Innovación Científica y Tecnológica para Adolescentes de China con Luchito, un **robot traductor de lengua de señas** capaz de signar todas las letras del alfabeto en español.",
    image: luchito,
  },
  {
    id: 2,
    title: "Robotic Minds\n2018-2023",
    description: "Formé parte de Robotic Minds, una escuela STEM, por casi **cinco años**. Aprendí mecatrónica y a trabajar en **proyectos en equipo** centrados en **resolución de problemas**, **adaptabilidad**, **liderazgo** y **comunicación**.",
    image: roboticsCompetition,
  },
  {
    id: 3,
    title: "Mi camino a Full Sail University\n2023",
    description: "**Diseñé** y **construí** un pequeño vehículo controlado con una aplicación de Unity mediante comandos seriales para participar para una beca en Full Sail University. Mi proyecto fue aceptado y me otorgaron una **beca de matrícula completa**.",
    image: fsProject,
  },
  {
    id: 4,
    title: "Bachelor of Science in Simulation and Visualization\n2025",
    description: "Durante la universidad, avancé mi **experiencia técnica** y desarrollé fuertes **habilidades de gestión del tiempo**. Aprendí a **desempeñarme eficazmente en entornos de ritmo rápido** y cumplir plazos exigentes.",
    image: FS,
  }
];



function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState('es');
  const timelineRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  const translations = {
    nav: {
      about: { en: 'About', es: 'Acerca' },
      projects: { en: 'Projects', es: 'Proyectos' },
      contact: { en: 'Contact', es: 'Contacto' }
    },
    hero: {
      subtitle: { en: 'Bachelor of Science in Simulation and Visualization - Engineering Portfolio', es: 'Bachelor of Science in Simulation and Visualization - Portafolio de Ingeniería' },
      summary: {
        en: `Hello and welcome to my portfolio!\nI’m a SolidWorks certified engineer skilled in CAD design, PCB design, object oriented programming, Unreal development and digital fabrication. \nFeel free to look at my work and contact me if you have any questions.`,
        es: `¡Hola y bienvenid@ a mi portafolio!\nSoy ingeniera certificada en SolidWorks, con habilidades en diseño CAD, diseño de PCBs, programación orientada a objetos, desarrollo en Unreal y fabricación digital. \nRevisa mi trabajo y contáctame si tienes preguntas.`
      }
    },
    sections: {
      journey: { en: 'My Journey', es: 'Mi Trayectoria' },
      featured: { en: 'Featured Projects', es: 'Proyectos Destacados' }
    },
    projectActions: { en: 'Show me', es: 'Ver proyecto' },
    viewAll: { en: 'View All Projects', es: 'Ver todos los proyectos' },
    contact: {
      title: { en: 'CONTACT ME', es: 'CONTÁCTAME' },
      phoneLabel: { en: 'Phone Number:', es: 'Teléfono:' },
      emailLabel: { en: 'Email:', es: 'Correo:' },
      linkedIn: { en: 'LinkedIn Profile', es: 'Perfil de LinkedIn' }
    },
    footer: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' }
  };

  const currentProjects = lang === 'en' ? projectsEn : projectsEs;
  const currentTimelineData = lang === 'en' ? timelineDataEn : timelineDataEs;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, currentTimelineData.length - itemsPerView);
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
          <li><a href="#about">{translations.nav.about[lang]}</a></li>
          <li><a href="#projects">{translations.nav.projects[lang]}</a></li>
          <li><a href="#contact">{translations.nav.contact[lang]}</a></li>
          <li>
            <button
              className="lang-button"
              onClick={() => setLang(prev => prev === 'en' ? 'es' : 'en')}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'Español' : 'English'}
            </button>
          </li>
          {/* <li><a href={resume} target="_blank" rel="noopener noreferrer" >Resume</a></li> */}
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
            <h2>{translations.hero.subtitle[lang]}</h2>
            <p className="summary" style={{ whiteSpace: 'pre-line' }}>
              {translations.hero.summary[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="trajectory-section" id="journey">
        <div className="trajectory-wrapper">
          <h3>{translations.sections.journey[lang]}</h3>

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
              disabled={currentIndex >= Math.max(0, currentTimelineData.length - itemsPerView)}
              aria-label="Next timeline item"
            >
              ›
            </button>

            {/* Timeline */}
            <div className="timeline" ref={timelineRef}>
              {currentTimelineData.length > 0 ? (
                currentTimelineData.map((item, index) => (
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
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-wrapper">
          <h3>{translations.sections.featured[lang]}</h3>
          <div className="projects-grid">
            {currentProjects.map(project => (
              <article key={project.id} className="project-card">
                <img src={project.imageUrl} alt={project.title} />
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  {project.liveUrl ? (
                    <a href={project.liveUrl}>
                      {translations.projectActions[lang]}
                    </a>
                  ) : (
                    <button disabled>{lang === 'en' ? 'Project in development' : 'Proyecto en desarrollo'}</button>
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
              {translations.viewAll[lang]}
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h3>{translations.contact.title[lang]}</h3>
        <div className="contact-grid">
          <div>
            <div className="info-block">
              <p>{translations.contact.phoneLabel[lang]} +1 689 298 7888</p>
              <a
                href="mailto:vhm110305@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "1rem" }}
              >
                {translations.contact.emailLabel[lang]} vhm110305@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/valentinaherreramolano/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "1rem" }}
              >
                {translations.contact.linkedIn[lang]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <footer>
        <p>© {new Date().getFullYear()} Valentina Herrera. {translations.footer[lang]}</p>
      </footer> */}
    </div>
  );
}

export default Main;