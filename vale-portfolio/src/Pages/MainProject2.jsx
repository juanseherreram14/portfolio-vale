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
        text: "**Time:** 1 month (June 2025 - July 2025).\n**Objective:** design a human-centered assistive technology product to help make the user’s life easier.\n**Tools:** SolidWorks, Adafruit Feather M0, Arduino IDE, C++, Eagle, 3D printer, CNC milling machine.\nThe idea was to work on an assistive technology project. I decided to go for a smart gadget to serve as a pill dispenser with alarm and clock functionality. There is a slot for each day of the week. It has an LED display where you can set up an alarm to have a reminder to take the pill. Then pushing a button will open the correct slot based on the day, the cover will turn certain degrees, wether it is for set up or to take the pill."
    },
    {
        title: "Method",
        text: "-**Design, assemble, and make motion study and animation** of the device in SolidWorks. I decided to make the design cylindrical so that the cover could work by turning on its own axis with a single servo motor. It also makes it practical to add the space needed for seven slots (one per day of week) with a circular pattern. The home position of the cover leaves open an extra slot designed to hold an LED diode and a buzzer that alert the user when it is time to take the pill. The main body is big enough to hold the circuit components, and it has a window for the LED display. The hole for the button is at a distance so that the user can look at the display and push it instinctively while holding the device.\n-**3D print the components.**\n-**Design PCB in Eagle and fabricate it.**\n-**Solder and mount electronic components to the PCB**.\n-**Make all the circuit connections.**\n-**Assemble 3D printed parts and PCB together.**"
    },
    {
        title: "Method",
        text: "-**Program Adafruit Feather M0 microcontroller** to control a servo motor that rotates by degrees to expose only one pill slot at a time, ensuring users access the correct medication. \n -**Build and program** user interface with LED display to allow access to motor control and alarm settings. The display shows current time and date captured from a real-time clock. It also gives the user visual feedback of the settings and alarm setup."
    },
    {
        title: "Results",
        text: "-Fully functional prototype.\n-Device displays current time and date, and has the capability to alert the user when it is time to take the pill.\n-Slots open correctly when needed.\n-Possible improvements: Size of the slots should be reconsidered for better comfort of the user."
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
                    <h1 className="MP1navbar-title">Smart Pill Dispenser (Class Project)</h1>
                </div>
                <ul className="MP1navbar-right">
                    <li><a href="https://youtu.be/ez2hItpm7Kg"
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

export default MainProject2;