import React, { useState } from 'react';
import '../Styles/MainProject.css';
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

const textContentEn = [
    {
        title: "Overview",
        text: "**Time:** 3 months (December 2024 - February 2025).\n**Objective:** Design and build a small scale Stewart motion platform.\n**Tools:** SolidWorks, Eagle, Arduino IDE, Unity, C#, 3D printer, Laser cutter, CNC milling machine.\nFor this project I drafted and fabricated a platform that moves in the six degrees of freedom. The movement is given by the rotation of six servo motors controlled by a Adafruit ESP32 microcontroller. It is a scaled version of a motion platform used to simulate movement and create immersive experiences in various applications."
    },
    {
        title: "Process",
        text: "-**Draft and assemble 3D design**, then make motion study and animation in SolidWorks. The design specifications were given to me by my professor. I drafted it and made the assembly to make a motion study and check mechanical accuracy and motion range before starting the fabrication process.\n-**3D print previously modeled components** and cut with laser the middle plate to have more accurate support holes.\n-**Design PCB in Eagle and fabricate it.** The design is compact to fit the microcontroller and allow easy assembly. The bottom layer has most connection routes and both the top and bottom layers have a common ground plane to have an electrically robust circuit.\n-**Mount and solder electronic components to PCB.**\n-**Assemble all parts together.**"
    },
    {
        title: "Process",
        text: "-**Program ESP32 microcontroller to configure serial communication with a unity app for testing and to calibrate the platform correctly.** After measuring the range of motion of all the servo motors, I saved the results in a matrix to make a program that handles the movement of the platform in the six degrees of freedom continuously, just as seen in the animation to the left. \n-**Develop game simulation for the platform** in Unity of a robot flying through traffic using C# scripts that handle serial communication and in game physics.\n -Connect two **touch sensors** that serve as controls for the user to move the platform and virtual robot synchronically. \n -Gather sensor data and stream it to the Unity app to create movement based on whether the user is touching the sensor and for how long."
    },
    {
        title: "Results",
        text: "-Platform moves smoothly in all six degrees of freedom.\n-Fully functional prototype.\n-Finished product generates an immersive and gamified experience for the user."
    }
];

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** 3 meses (Diciembre 2024 - Febrero 2025).\n**Objetivo:** Diseñar y construir una plataforma de movimiento Stewart de pequeña escala.\n**Herramientas:** SolidWorks, Eagle, Arduino IDE, Unity, C#, impresora 3D, cortadora láser, fresadora CNC.\nPara este proyecto diseñé y fabricqué una plataforma que se mueve en los seis grados de libertad. El movimiento es dado por la rotación de seis servo motores controlados por un microcontrolador Adafruit ESP32. Es una versión escalada de una plataforma de movimiento usada para simular movimiento y crear experiencias inmersivas en diversas aplicaciones."
    },
    {
        title: "Proceso",
        text: "-**Hacer modelado y ensamblaje del diseño 3D**, luego realizar estudio de movimiento y animación en SolidWorks. Lo diseñé e hice el ensamblaje para realizar un estudio de movimiento y verificar la precisión mecánica y el rango de movimiento antes de comenzar el proceso de fabricación.\n-**Imprimir componentes previamente modelados en 3D** y cortar con láser la placa intermedia para tener agujeros de soporte más precisos.\n-**Diseñar PCB en Eagle y fabricarlo.** El diseño es compacto para ajustarse al microcontrolador y permitir un ensamblaje sencillo. La capa inferior tiene la mayoría de las rutas de conexión y ambas capas superior e inferior tienen un plano común de tierra para tener un circuito eléctricamente robusto.\n-**Montar y soldar componentes electrónicos al PCB.**\n-**Ensamblar todas las partes juntas.**"
    },
    {
        title: "Proceso",
        text: "-**Programar microcontrolador ESP32 para configurar comunicación serial con una aplicación Unity para pruebas y calibración correcta de la plataforma.** Tras medir el rango de movimiento de todos los motores servo, guardé los resultados en una matriz para crear un programa que maneje el movimiento de la plataforma en los seis grados de libertad continuamente, tal como se ve en la animación a la izquierda. \n-**Desarrollar simulación del juego para la plataforma** en Unity con un robot volando a través del tráfico usando scripts en C# que manejan comunicación serial y física dentro del juego.\n -Conectar dos **sensores táctiles** que sirven como controles para que el usuario mueva la plataforma y robot virtual sincrónicamente. \n -Recopilar datos del sensor y transmitirlos a la aplicación Unity para crear movimiento basado en si el usuario está tocando el sensor o no, y durante cuánto tiempo."
    },
    {
        title: "Resultados",
        text: "-La plataforma se mueve suavemente en los seis grados de libertad.\n-Prototipo completamente funcional.\n-El producto terminado genera una experiencia inmersiva y gamificada para el usuario."
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


function MainProject1() {
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
                    <li><a href="https://youtu.be/_bN-MrGRLHM"
                        target="_blank"
                        rel="noopener noreferrer">{translations.nav.demo[lang]}
                    </a></li>
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

export default MainProject1;