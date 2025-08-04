import React from 'react';
import '../Styles/AllProjects.css'; // Create this CSS file too
import golImage from '../Images/Gameoflife.png';
import logoGame from '../Images/BCSPOTB_Logo.png';
import gameImage from '../Images/GameplayScreenshot.png';
import platImage from '../Images/PlatformImage.png';

// Expanded projects array with more projects
const allProjects = [
    {
        id: 1,
        title: "Game of Life",
        description: "Project focused on representing Conway's Game of Life. It's a simple, grid-based simulation that models how cells live, die, or reproduce over time based on a few rules.",
        technologies: ["C++", "wxWidgets"],
        imageUrl: golImage,
        liveUrl: golImage
    },
    {
        id: 2,
        title: "Bean Conquest: Spill of the Beans",
        description: "First person strategy videogame with the objective of conquering cities and battling enemies.",
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
                <p>Complete collection of my work and projects</p>
            </header>

            <section className="all-projects-grid-section">
                <div className="all-projects-container">
                    <div className="all-projects-grid">
                        {allProjects.map(project => (
                            <article key={project.id} className="all-project-card">
                                <img src={project.imageUrl} alt={project.title} />
                                <div className="all-project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="all-tech-tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                    </div>
                                    {project.liveUrl ? (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </a>
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