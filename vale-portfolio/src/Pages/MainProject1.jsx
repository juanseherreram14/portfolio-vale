import React, { useState } from 'react';
import '../Styles/MainProject1.css';
import mainVideo from '../Videos/StewP_Isometric_Animation.mp4';
import SPCad from '../Images/SP_CAD.png';
import SPPcb from '../Images/SP_PCB.png';
import SPPcb2 from '../Images/SP_PCB_Done.jpg'
import SPFinal from '../Images/SP_Final.jpg';

const showcase = [
    {
        id: 1,
        imageUrl: SPCad
    },
    {
        id: 2,
        imageUrl: SPPcb
    },
    {
        id: 3,
        imageUrl: SPPcb2
    },
    {
        id: 4,
        imageUrl: SPFinal
    }
];

const textContent = [
    {
        title: "Overview",
        text: "**Main Role:** Digital Fabrication Specialist and PCB Design Engineer.\n**Time:** 3 months (December 2024 - February 2025).\n**Objective:** Design, simulate and build prototype of a small scale motion platform.\n**Tools:** SolidWorks, Eagle, Arduino IDE, Unity, 3D printer, Laser cutter, CNC Router.\nFor this project I drafted and fabricated a platform that moves in the six degrees of freedom. The movement is given by the rotation of six servo motors controlled by a microcontroller. It is a scaled version of a motion platform used to simulate movement and create immersive experiences in various applications."
    },
    {
        title: "Method",
        text: "-**Draft and assemble 3D design**, then make motion study and animation in SolidWorks. The design was given to me by my professor. I drafted it and made the assembly to make a motion study and check mechanical accuracy and motion range before starting the fabrication process.\n-**3D print previously modeled components** and cut with laser the middle plate to have more accurate support holes.\n-**Design PCB in Eagle and print it.** The design is compact to fit the microcontroller and allow easy assembly. The bottom layer has most connection routes and both the top and bottom layers have a common ground plane to have an electrically robust circuit.\n-**Mount and solder electronic components to PCB.**\n-**Assemble all parts together.**\n-**Run tests to calibrate the platform correctly.**"
    },
    {
        title: "Results",
        text: "-Platform moves smoothly in all six degrees of freedom.\n-Fully functional prototype.\n-Finished product can be used to simulate movement for immersibve experiences in a small scale."
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


function MainProject1() {
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
                    <h1 className="MP1navbar-title">Six Degrees of Freedom Platform (Class Project)</h1>
                </div>
                <ul className="MP1navbar-right">
                    <li><a href="https://youtu.be/_bN-MrGRLHM"
                        target="_blank"
                        rel="noopener noreferrer">CLICK HERE TO WATCH DEMO</a></li>
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
                        <div className="text-block" style={{ whiteSpace: 'pre-line' }}>
                            <h3>{textContent[currentTextIndex].title}</h3>
                            <p>{renderFormattedText(textContent[currentTextIndex].text)}</p>
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

export default MainProject1;