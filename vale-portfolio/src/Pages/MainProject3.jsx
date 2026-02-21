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

const textContentEn = [
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

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** 1 semana (noviembre 2024).\n**Objetivo:** fabricar PCB para Simon Sense.\n**Herramientas:** Eagle, CNC Router, estación de soldadura.\nMi profesor Richard Arndt creó una variación del juego Simon que en vez de tener botones para recibir retroalimentación del usuario, tiene LEDs usados como sensores de luz. En su clase trabajamos en todo el proceso de fabricación de una PCB para el juego basado en el mecanismo que él diseñó."
    },
    {
        title: "Proceso",
        text: "-Hacer el esquema de la PCB y diseñar la placa en Eagle.\n-Imprimir la placa.\n-Montar y soldar los componentes electrónicos.\nProbar cortos con multímetro."
    },
    {
        title: "Resultados",
        text: "Todas las conexiones de la PCB funcionan correctamente y se podría usar para hacer un Simon Sense funcional."
    }
];

const translations = {
    nav: {
        title: { en: 'PCB for Simon Sense', es: 'PCB para Simon Sense' },
        home: { en: 'Go back home', es: 'Volver al inicio' }
    },
    controls: {
        next: { en: 'Next', es: 'Siguiente' }
    }
};

function MainProject3() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [lang, setLang] = useState('es');
    const currentTextContent = lang === 'en' ? textContentEn : textContentEs;

    // Function to change to the next text
    const changeText = () => {
        setCurrentTextIndex((prevIndex) =>
            prevIndex === currentTextContent.length - 1 ? 0 : prevIndex + 1
        );
    };
    const selectText = (index) => {
        setCurrentTextIndex(index);
    };
    return (
        <div className="main-project1-page">
            <nav className="MP1navbar MP1glass-navbar">
                <div className="MP1navbar-left">
                    <h1 className="MP1navbar-title">{translations.nav.title[lang]}</h1>
                </div>
                <ul className="MP1navbar-right">
                    <li><a href="/#home">{translations.nav.home[lang]}</a></li>
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
                            <h3>{currentTextContent[currentTextIndex].title}</h3>
                            <p>{renderFormattedText(currentTextContent[currentTextIndex].text)}</p>
                        </div>

                        <div className="text-controls">

                            {/* Optional: Individual buttons for each text */}
                            <div className="text-selector-buttons">
                                {currentTextContent.map((_, index) => (
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
                                {translations.controls.next[lang]}
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

export default MainProject3;