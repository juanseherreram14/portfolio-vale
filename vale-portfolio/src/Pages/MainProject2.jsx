import React, { useState } from 'react';
import '../Styles/MainProject1.css';
import mainVideo from '../Videos/SmartPillDispenserAnimation.mp4';
import SPDCad from '../Images/SmartPillDispenser_CAD.png';
import SPDCircuit from '../Images/SmartPillDispenser_Circuit.jpg';
import SPDFinal from '../Images/SmartPillDispenser_Final.jpg';

const showcase = [
    {
        id: 1,
        imageUrl: SPDCad
    },
    {
        id: 2,
        imageUrl: SPDCircuit
    },
    {
        id: 3,
        imageUrl: SPDFinal
    },
    {
        id: 4,
        imageUrl: SPDFinal
    }
];

const textContent = [
    {
        title: "Overview",
        text: "I specialize in creating innovative solutions using cutting-edge technology. My projects range from game development to hardware simulation platforms."
    },
    {
        title: "Tools",
        text: "Proficient in C++, C#, Python, and Unity. I have experience with 3D modeling in Solidworks, PCB design, and embedded systems development."
    },
    {
        title: "Results",
        text: "I'm passionate about bridging the gap between digital simulation and real-world applications. I aim to contribute to teams working on innovative engineering solutions."
    },
    {
        title: "Education & Experience",
        text: "Currently pursuing a degree in Simulation and Visualization with hands-on experience in prototyping, digital fabrication, and creating virtual training environments."
    }
];

function MainProject2() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Function to change to the next text
    const changeText = () => {
        setCurrentTextIndex((prevIndex) =>
            prevIndex === textContent.length - 1 ? 0 : prevIndex + 1
        );
    };
    const selectText = (index) => {
        setCurrentTextIndex(index);
    };
    return (
        <div className="main-project1-page">
            <nav className="MP1navbar MP1glass-navbar">
                <div className="MP1navbar-left">
                    <h1 className="MP1navbar-title">Smart Pill Dispenser</h1>
                </div>
                <ul className="MP1navbar-right">
                    <li><a href="/#home">Go back home</a></li>
                </ul>
            </nav>
            <section classname="showcase-section">
                <div className="video-container">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="background-video"
                    >
                        <source src={mainVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="showcase-wrapper">
                    <div className="changing-text-container">
                        <div className="text-block">
                            <h3>{textContent[currentTextIndex].title}</h3>
                            <p>{textContent[currentTextIndex].text}</p>
                        </div>

                        <div className="text-controls">

                            {/* Optional: Individual buttons for each text */}
                            <div className="text-selector-buttons">
                                {textContent.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectText(index)}
                                        className={`selector-btn ${currentTextIndex === index ? 'active' : ''}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                            <button onClick={changeText} className="change-btn">
                                {'next'}
                            </button>
                        </div>
                    </div>
                    <div className="showcase-grid">
                        {showcase.map(showcase => (
                            <article key={showcase.id} className="showcase-card">
                                <img src={showcase.imageUrl} alt="" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainProject2;