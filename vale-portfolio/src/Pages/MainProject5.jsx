import React, { useState } from 'react';
import '../Styles/MainProject1.css';
import mainVideo from '../Videos/SimonSenseDemo.mp4';
import SSPcb from '../Images/SimonSensePCB.png';
import SSPcbSch from '../Images/SimonSenseSchematic.png'
import SSPrint from '../Images/SimonSensePrint.jpg';
import SSDone from '../Images/SimonSenseDone.jpg';

const showcase = [
    {
        id: 1,
        imageUrl: SSPcbSch
    },
    {
        id: 2,
        imageUrl: SSPcb
    },
    {
        id: 3,
        imageUrl: SSPrint
    },
    {
        id: 4,
        imageUrl: SSDone
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

const textContent = [
    {
        title: "Overview",
        text: "**Time:** 1 week (November 2024).\n**Objective:** make PCB for Simon Sense.\n**Tools:** Eagle, CNC Router, Soldering station.\nMy professor Richard Arndt created a variation of the game Simon that instead of having buttons to get user feedback, it has LEDs used as light sensors. In his class we got to work on the whole process of fabricating a PCB for the game based on the mechanism he designed."
    },
    {
        title: "Process",
        text: "-Make PCB schematic and design board in Eagle.\n-Print board.\n-Mount and solder electronic components.\nTest for shorts with multimeter."
    },
    {
        title: "Results",
        text: "All connections of the PCB work correctly and it could be used to make a functional Simon Sense."
    }
];

function MainProject3() {
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
                    <h1 className="MP1navbar-title">PCB for Simon Sense (Class Project)</h1>
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

export default MainProject1point2;