//import { useLanguage } from '../LanguageContext';
import React, { useState } from 'react';
import '../Styles/AllProjects.css'; // Create this CSS file too
import platImage from '../Images/6DOF_Platform_CAD_Isometric.png';
import smartPDImage from '../Images/SmartPillDispenser_Isometric.png';
import simonSenseImage from '../Images/SimonSenseImage.jpg';
import GDShowcase from '../Images/GenevaDriveShowcase.png'
import FSProject from '../Images/fsProject.png'
import MRT from '../Images/MRT_windowFrame.jpg'

const allProjectsEn = [
    {
        id: 1,
        title: "Six Degrees of Freedom Platform (December 2024 - February 2025)",
        description: "All around project focused on modeling and building a six dof platform to simulate movement.",
        technologies: ["CAD design", "2D drawing", "PCB design", "3D printing", "PCB printing"],
        imageUrl: platImage,
        liveUrl: "/MainProject1"
    },
    {
        id: 2,
        title: "Smart Pill Dispenser (June 2025 - July 2025)",
        description: "Assistive technology project of a gadget made to serve as a pill dispenser.",
        //technologies: ["Product Design", "CAD design", "2D drawing", "PCB design", "3D printing", "PCB printing"],
        imageUrl: smartPDImage,
        liveUrl: "/MainProject2"
    },
    {
        id: 3,
        title: "PCB for Simon Sense (November 2024)",
        description: "Project focused on Printed Circuit Board design and fabrication.",
        //technologies: ["PCB design", "PCB printing"],
        imageUrl: simonSenseImage,
        liveUrl: "/MainProject3"
    },
    {
        id: 4,
        title: "Geneva Drive Reverse Engineering (December 2024)",
        description: "Modeled 3D printed version of the geneva drive mechanism.\n-Measured with calipers.\n-Designed and assembled parts in SolidWorks.\n-Did motion study.",
        //technologies: ["CAD design"],
        imageUrl: GDShowcase,
        liveUrl: "https://youtu.be/T8jMr-RRCVE"
    },
    {
        id: 5,
        title: "Small Vehicle Controlled with Game Engine (2023)",
        description: "-Designed vehicle parts in OnShape.\n-Laser cut pieces.\n-Assembled prototype.\n-Designed and integrated circuit of motors, motor driver and microcontroller.",
        //technologies: ["CAD design", "Circuit Integration",],
        imageUrl: FSProject,
        liveUrl: "https://youtu.be/wqM2bh4iJ4g?si=9wOKq7hgrXDQmG1s"
    },
    {
        id: 6,
        title: "Full Sail University Tech Building Mixed Reality Tour (May - June 2025)",
        description: "Project focused on developing an innovative tour of Full Sail's facilities using AR and VR technology.",
        //technologies: ["Mixed Reality Tech", "Meta Quest 3", "Unreal Engine"],
        imageUrl: MRT,
        liveUrl: "/MainProject4"
    }
];

const allProjectsEs = [
    {
        id: 1,
        title: "Plataforma de seis grados de libertad (Diciembre 2024 - Febrero 2025)",
        description: "Proyecto enfocado en modelar y construir una plataforma de seis grados de libertad para simular movimiento.",
        //technologies: ["Diseño CAD", "Dibujo 2D", "Diseño PCB", "Impresión 3D", "Impresión PCB"],
        imageUrl: platImage,
        liveUrl: "/MainProject1"
    },
    {
        id: 2,
        title: "Dispensador de pastillas inteligente (Junio 2025 - Julio 2025)",
        description: "Proyecto de tecnología asistiva enfocado al desarrollo de un dispositivo diseñado para dispensar pastillas.",
        //technologies: ["Diseño de producto", "Diseño CAD", "Dibujo 2D", "Diseño PCB", "Impresión 3D", "Impresión PCB"],
        imageUrl: smartPDImage,
        liveUrl: "/MainProject2"
    },
    {
        id: 3,
        title: "Recorrido de realidad mixta en Full Sail University (Mayo - Junio 2025)",
        description: "Proyecto enfocado en desarrollar un recorrido innovador de las instalaciones de Full Sail usando tecnología AR y VR.",
        //technologies: ["Tecnología de Realidad Mixta", "Meta Quest 3", "Unreal Engine"],
        imageUrl: MRT,
        liveUrl: "/MainProject4"
    },    
    {
        id: 4,
        title: "PCB para Simon Sense (Noviembre 2024)",
        description: "Proyecto enfocado en el diseño y fabricación de una placa de circuito impreso.",
        //technologies: ["Diseño PCB", "Impresión PCB"],
        imageUrl: simonSenseImage,
        liveUrl: "/MainProject3"
    },
    {
        id: 5,
        title: "Ingeniería inversa de Geneva Drive (Diciembre 2024)",
        description: "Modelo 3D impreso del mecanismo Geneva Drive.\n-Medición con calibradores.\n-Diseño y ensamblaje en SolidWorks.\n-Estudio de movimiento.",
        //technologies: ["Diseño CAD"],
        imageUrl: GDShowcase,
        liveUrl: "https://youtu.be/T8jMr-RRCVE"
    },
    {
        id: 6,
        title: "Vehículo pequeño controlado con motor de juego (2023)",
        description: "-Diseño de piezas en OnShape.\n-Corte láser de piezas.\n-Ensamblaje de prototipo.\n-Diseño e integración de circuito de motores, driver y microcontrolador.",
        //technologies: ["Diseño CAD", "Integración de circuitos"],
        imageUrl: FSProject,
        liveUrl: "https://youtu.be/wqM2bh4iJ4g?si=9wOKq7hgrXDQmG1s"
    },
];

function AllProjects() {
    //const { lang } = useLanguage();
    const [lang, setLang] = useState('es');
    const projects = lang === 'es' ? allProjectsEs : allProjectsEn;
    const t = {
        allProjects: { en: 'All Projects', es: 'Todos los Proyectos' },
        goBack: { en: 'Go back home', es: 'Volver al inicio' },
        view: { en: 'View Project', es: 'Ver Proyecto' },
        inDev: { en: 'Project in development', es: 'Proyecto en desarrollo' }
    };
    return (
        <div className="all-projects-page">
            <nav className="APnavbar APglass-navbar">
                <div className="APnavbar-left">
                    <h1 className="APnavbar-title"> </h1>
                </div>
                <ul className="APnavbar-right">
                    <li><a href="/#home">{t.goBack[lang]}</a></li>
                    <li>
                        <a
                            href="#toggle-lang"
                            className="MP1navbar-link"
                            style={{ cursor: 'pointer' }}
                            onClick={e => {
                                e.preventDefault();
                                setLang(prev => prev === 'en' ? 'es' : 'en');
                            }}
                            aria-label="Toggle language"
                        >
                            {lang === 'en' ? 'Español' : 'English'}
                        </a>
                    </li>                    
                </ul>
            </nav>

            <header className="all-projects-header">
                <h1>{t.allProjects[lang]}</h1>
            </header>

            <section className="all-projects-grid-section">
                <div className="all-projects-container">
                    <div className="all-projects-grid">
                        {projects.map(project => (
                            <article key={project.id} className="all-project-card">
                                <img src={project.imageUrl} alt={project.title} />
                                <div className="all-project-content" style={{ whiteSpace: 'pre-line' }}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="all-tech-tags">
                                        {/* {project.technologies.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))} */}
                                    </div>
                                    {project.liveUrl ? (
                                        <div className="all-project-button">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                {t.view[lang]}
                                            </a>
                                        </div>
                                    ) : (
                                        <button disabled>{t.inDev[lang]}</button>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AllProjects;