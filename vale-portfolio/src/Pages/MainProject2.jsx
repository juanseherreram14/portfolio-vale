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

const textContentEn = [
    {
        title: "Overview",
        text: "**Time:** 1 month (June 2025 - July 2025).\n**Objective:** design a human-centered assistive technology product to help make the user’s life easier.\n**Tools:** SolidWorks, Adafruit Feather M0, Arduino IDE, C++, Eagle, 3D printer, CNC milling machine.\nThe idea was to work on an assistive technology project. I decided to go for a smart gadget to serve as a pill dispenser with alarm and clock functionality. There is a slot for each day of the week. It has an LED display where you can set up an alarm to have a reminder to take the pill. Then pushing a button will open the correct slot based on the day, the cover will turn certain degrees, wether it is for set up or to take the pill."
    },
    {
        title: "Process",
        text: "-**Design, assemble, and make motion study and animation** of the device in SolidWorks. I decided to make the design cylindrical so that the cover could work by turning on its own axis with a single servo motor. It also makes it practical to add the space needed for seven slots (one per day of week) with a circular pattern. The home position of the cover leaves open an extra slot designed to hold an LED diode and a buzzer that alert the user when it is time to take the pill. The main body is big enough to hold the circuit components, and it has a window for the LED display. The hole for the button is at a distance so that the user can look at the display and push it instinctively while holding the device.\n-**3D print the components.**\n-**Design PCB in Eagle and fabricate it.**\n-**Solder and mount electronic components to the PCB**.\n-**Make all the circuit connections.**\n-**Assemble 3D printed parts and PCB together.**"
    },
    {
        title: "Process",
        text: "-**Program Adafruit Feather M0 microcontroller** to control a servo motor that rotates by degrees to expose only one pill slot at a time, ensuring users access the correct medication. \n -**Build and program** user interface with LED display to allow access to motor control and alarm settings. The display shows current time and date captured from a real-time clock. It also gives the user visual feedback of the settings and alarm setup."
    },
    {
        title: "Results",
        text: "-Fully functional prototype.\n-Device displays current time and date, and has the capability to alert the user when it is time to take the pill.\n-Slots open correctly when needed.\n-Possible improvements: Size of the slots should be reconsidered for better comfort of the user."
    }
];

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** 1 mes (junio 2025 - julio 2025).\n**Objetivo:** diseñar un producto de tecnología asistiva centrado en el usuario para facilitarle la vida.\n**Herramientas:** SolidWorks, Adafruit Feather M0, Arduino IDE, C++, Eagle, impresora 3D, fresadora CNC.\nLa idea era trabajar en un proyecto de tecnología asistiva. Decidí crear un dispositivo inteligente para servir como dispensador de pastillas con función de alarma y reloj. Hay una ranura para cada día de la semana. Tiene una pantalla LED donde se puede configurar una alarma para recordar tomar la pastilla. Al presionar un botón se abrirá la ranura correcta según el día, la tapa girará ciertos grados, ya sea para configurar o para tomar la pastilla."
    },
    {
        title: "Proceso",
        text: "-**Diseñar, ensamblar y hacer estudio de movimiento y animación** del dispositivo en SolidWorks. Decidí hacer el diseño cilíndrico para que la tapa pudiera funcionar girando sobre su propio eje con un solo servomotor. También facilita agregar el espacio necesario para siete ranuras (una por cada día de la semana) con un patrón circular. La posición inicial de la tapa deja abierta una ranura extra diseñada para alojar un diodo LED y un buzzer que alertan al usuario cuando es hora de tomar la pastilla. El cuerpo principal es lo suficientemente grande para alojar los componentes del circuito y tiene una ventana para la pantalla LED. El agujero para el botón está a una distancia para que el usuario pueda mirar la pantalla y presionarlo instintivamente mientras sostiene el dispositivo.\n-**Imprimir los componentes en 3D.**\n-**Diseñar PCB en Eagle y fabricarlo.**\n-**Soldar y montar los componentes electrónicos en el PCB**.\n-**Hacer todas las conexiones del circuito.**\n-**Ensamblar las piezas impresas en 3D y el PCB juntos.**"
    },
    {
        title: "Proceso",
        text: "-**Programar el microcontrolador Adafruit Feather M0** para controlar un servomotor que gira por grados para exponer solo una ranura de pastilla a la vez, asegurando que los usuarios accedan al medicamento correcto. \n -**Construir y programar** la interfaz de usuario con pantalla LED para permitir el acceso al control del motor y la configuración de la alarma. La pantalla muestra la hora y fecha actual capturada desde un reloj en tiempo real. También brinda al usuario retroalimentación visual de la configuración y la alarma."
    },
    {
        title: "Resultados",
        text: "-Prototipo completamente funcional.\n-El dispositivo muestra la hora y fecha actual, y tiene la capacidad de alertar al usuario cuando es hora de tomar la pastilla.\n-Las ranuras se abren correctamente cuando es necesario.\n-Mejoras posibles: el tamaño de las ranuras debería reconsiderarse para mayor comodidad del usuario."
    }
];

const translations = {
    nav: {
      title: { en: 'Six Degrees of Freedom Platform', es: 'Plataforma de Seis Grados de Libertad' },
      demo: { en: 'CLICK HERE TO WATCH DEMO', es: 'HAGA CLIC AQUÍ PARA VER LA DEMO' },
      home: { en: 'Go back home', es: 'Volver al inicio' }
    }
};

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
                    <li><a href="https://youtu.be/ez2hItpm7Kg"
                        target="_blank"
                        rel="noopener noreferrer">{translations.nav.demo[lang]}</a></li>
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
                                {lang === 'en' ? 'Next' : 'Siguiente'}
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