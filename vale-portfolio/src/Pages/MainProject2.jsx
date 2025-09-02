import React, { useState } from 'react';
import '../Styles/MainProject1.css';
import mainVideo from '../Videos/SmartPillDispenserAnimation.mp4';
import SPDCad from '../Images/SmartPillDispenser_CAD.png';
import SPDCircuit from '../Images/SmartPillDispenser_Circuit.jpg';
import SPDFinalFront from '../Images/SmartPillDispenser_FrontFinal.png.jpg'
import SPDFinalISO from '../Images/SmartPillDispenser_IsoFinal.png.jpg'

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
        imageUrl: SPDFinalFront
    },
    {
        id: 4,
        imageUrl: SPDFinalISO
    }
];

const textContent = [
    {
        title: "Overview",
        text: "Time: 1 month (June 2025).\nObjective: create prototype of a smart pill dispenser capable of making life easier for users who take pills frequently with an intuitive design that allows them to have access to the right pill at the right time.\nTools: SolidWorks, Arduino IDE, Eagle.\nThe idea was to work on an assistive technology project. I decided to go for a smart gadget to serve as a pill dispenser with alarm and clock functionality. There is a slot for each day of the week. It has an LED display where you can set up an alarm to have a reminder to take the pill. Then pushing a button will open the correct slot based on the day, the cover will turn certain degrees, wether it is for set up or to take the pill."
    },
    {
        title: "Method",
        text: "-Design, assemble, and make motion study animation of the device in SolidWorks.\n-3D print the components.\n-Design PCB in Eagle and print it.\n-Solder and mount electronic components to the PCB.\n-Make all the circuit connections.\n-Assemble 3D printed parts and PCB together.\n-Write code for microcontroller and test functionality."
    },
    {
        title: "Results",
        text: "-Fully functional prototype.\n-Device displays current time and date, and has the capability to alert the user when it is time to take the pill.\n-Slots open correctly when needed.\n-Possible improvements: Size of the slots should be reconsidered for better comfort of the user."
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
                    <li><a href="https://youtu.be/ez2hItpm7Kg"
                        target="_blank"
                        rel="noopener noreferrer">Demo</a></li>
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