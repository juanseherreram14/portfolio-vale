import React, { useState } from 'react';
import '../Styles/MainProject1.css';
import mainVideo from '../Videos/MRT_ShortDemo.mp4';
import MRT_u1 from '../Images/MRT_u1.png';
import MRT_u2 from '../Images/MRT_u2.png';
import MRT_u3 from '../Images/MRT_u3.png';
import MRT_u4 from '../Images/MRT_u4.png';

const showcase = [
    {
        id: 1,
        imageUrl: MRT_u1
    },
    {
        id: 2,
        imageUrl: MRT_u2
    },
    {
        id: 3,
        imageUrl: MRT_u3
    },
    {
        id: 4,
        imageUrl: MRT_u4
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
        text: "**Time:** 2 months (May 2025 - June 2025).\n**Objective:**  build an interactive application guiding users on a tour of Full Sail’s Technology Building.\n **Tools:** Unreal Engine, C++, Blueprint, Meta Quest 3.\nThe guidelines for this project were to make the application for the Meta Quest 3 using Unreal. After a brainstorm session with my team we decided to implement virtual components that would enhance the user's experience while also showcasing the actual classroom and its real components. That way the tour would become an asset that makes the experience marketable and interesting."
    },
    {
        title: "My Role",
        text: "I was assigned two main tasks. My first responsibility on the team was to find a way to show a transition from passthrough to full virtual, first showcasing the actual classroom elements and then converting them into a virtual environment. After conducting research, I ended up creating a dynamic material with a configuration that allowed changing the passthrough level. Then I implemented a function in Unreal Blueprint that changed the material over time, ensuring a smooth transition over a specified number of seconds. I was then assigned to make the application applicable to multiple classrooms. So I implemented a singleton in a C++ script to move the blueprint instance based on positional anchors and to change the environment by updating the value of the placeholders in the script. The application is an eye-catching way to promote the school, making it marketable for potential new students."
    }
];

function MainProject4() {
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
                    <h1 className="MP1navbar-title">Full Sail University Mixed Reality Tour</h1>
                </div>
                <ul className="MP1navbar-right">
                    <li><a href="https://youtube.com/shorts/0Qw0hh6ZzSY?feature=share"
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

export default MainProject4;