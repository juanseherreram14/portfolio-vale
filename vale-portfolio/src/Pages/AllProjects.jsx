import React from 'react';
import '../Styles/AllProjects.css'; // Create this CSS file too
import platImage from '../Images/6DOF_Platform_CAD_Isometric.png';
import smartPDImage from '../Images/SmartPillDispenser_Isometric.png';
import simonSenseImage from '../Images/SimonSenseImage.jpg';
import GDShowcase from '../Images/GenevaDriveShowcase.png'

// Expanded projects array with more projects
const allProjects = [
    {
        id: 1,
        title: "Six Degrees of Freedom Platform",
        description: "All around project focused on modeling and building a six dof platform to simulate movement.",
        technologies: ["CAD design", "2D drawing", "PCB design", "3D printing", "PCB printing"],
        imageUrl: platImage,
        liveUrl: "/MainProject1"
    },
    {
        id: 2,
        title: "Smart Pill Dispenser",
        description: "Assistive technology project of a gadget made to serve as a pill dispenser.",
        technologies: ["Product Design", "CAD design", "2D drawing", "PCB design", "3D printing", "PCB printing"],
        imageUrl: smartPDImage,
        liveUrl: "/MainProject2"
    },
    {
        id: 3,
        title: "PCB for Simon Sense",
        description: "Project focused on Printed Circuit Board design and fabrication.",
        technologies: ["PCB design", "PCB printing"],
        imageUrl: simonSenseImage,
        liveUrl: "/MainProject3"
    },
    {
        id: 4,
        title: "Geneva Drive Reverse Engineering",
        description: "Modeled 3D printed version of the geneva drive mechanism.\n-Measured with calipers.\n-Designed and assembled parts in SolidWorks.\n-Did motion study.",
        technologies: ["CAD design"],
        imageUrl: GDShowcase,
        liveUrl: "https://youtu.be/T8jMr-RRCVE"
    },
    // Add more projects here
];

function AllProjects() {
    return (
        <div className="all-projects-page">
            <nav className="APnavbar APglass-navbar">
                <div className="APnavbar-left">
                    <h1 className="APnavbar-title"> </h1>
                </div>
                <ul className="APnavbar-right">
                    <li><a href="/#home">Go back home</a></li>
                </ul>
            </nav>

            <header className="all-projects-header">
                <h1>All Projects</h1>
            </header>

            <section className="all-projects-grid-section">
                <div className="all-projects-container">
                    <div className="all-projects-grid">
                        {allProjects.map(project => (
                            <article key={project.id} className="all-project-card">
                                <img src={project.imageUrl} alt={project.title} />
                                <div className="all-project-content" style={{ whiteSpace: 'pre-line' }}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="all-tech-tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                    </div>
                                    {project.liveUrl ? (
                                        <div className = "all-project-button"> 
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </a>
                                        </div>
                                    ) : (
                                        <button disabled>Project in development</button>
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