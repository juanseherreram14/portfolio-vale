import React, { useState } from 'react';
import '../Styles/MainProject.css';
import mainVideo from '../Videos/SmartPillDispenserCADDemo.mp4';
import SPDCadDraw1 from '../Images/SmartPillDispenser_CAD.png';
import SPDCadDraw2 from '../Images/SPD_CADDraw2.png';
import SPDCadISO from '../Images/SPD_ContainerISO.png';
import SPDCadTop from '../Images/SPD_Top.png';
import SPDPcbBrd from '../Images/SPD_PCB_Board.png';
import SPDPcbSch from '../Images/SPD_PCB_Sch.png';
import SPDCircuit from '../Images/SmartPillDispenser_Circuit.jpg';
import SPDFinalFront from '../Images/SmartPillDispenser_FrontFinal.png.jpg'
import SPDFinalISO from '../Images/SmartPillDispenser_IsoFinal.png.jpg'

const showcase = [
    {
        id: 1,
        imageUrl: SPDCadDraw1
    },
    {
        id: 2,
        imageUrl: SPDCadDraw2
    },    
    {
        id: 3,
        imageUrl: SPDCadISO
    },  
    {
        id: 4,
        imageUrl: SPDCadTop
    },    
    {
        id: 5,
        imageUrl: SPDPcbBrd
    },    
    {
        id: 6,
        imageUrl: SPDPcbSch
    },
    {
        id: 7,
        imageUrl: SPDCircuit 
    },
    {
        id: 8,
        imageUrl: SPDFinalFront
    },
    {
        id: 9,
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
    }
];

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** 1 mes (junio 2025 - julio 2025).\n**Objetivo:** diseñar un producto de tecnología asistiva centrado en el usuario para facilitarle la vida.\n**Herramientas:** SolidWorks, Adafruit Feather M0, Arduino IDE, C++, Eagle, impresora 3D, fresadora CNC.\nLa idea era trabajar en un proyecto de tecnología asistiva. Decidí crear un dispositivo inteligente para servir como dispensador de pastillas con función de alarma y reloj. Hay un espacio para cada día de la semana y tiene una pantalla LED donde se puede configurar una alarma para que el usuario recuerde tomar la pastilla. Al presionar el botón de la derecha, se abrirá el espacio correcto según el día. Esto es posible ya que la tapa gira ciertos grados, exponiendo el espacio, ya sea para poner o tomar la pastilla."
    },
    {
        title: "Proceso",
        text: "-**Diseñar, ensamblar y hacer estudio de movimiento y animación** del dispositivo en SolidWorks. Decidí hacer el diseño cilíndrico para que la tapa pudiera funcionar girando sobre su propio eje con un solo servomotor. También facilita el área necesaria para siete espacios (una por cada día de la semana) con un patrón circular. La posición inicial de la tapa deja abierto un espacio extra diseñado para situar un bombillo LED y una chicharra que alertan al usuario cuando es hora de tomar la pastilla. El cuerpo principal es lo suficientemente grande para alojar los componentes del circuito y tiene una ventana para la pantalla LED. El agujero para el botón está a una distancia determinada para que el usuario pueda mirar la pantalla y presionarlo instintivamente mientras sostiene el dispositivo.\n-**Imprimir los componentes en 3D.**\n-**Diseñar PCB en Eagle y fabricarlo.**\n-**Soldar y montar los componentes electrónicos en el PCB**.\n-**Hacer todas las conexiones del circuito.**\n-**Ensamblar las piezas impresas en 3D y el PCB juntos.**"
    },
    {
        title: "Proceso",
        text: "-**Programar el microcontrolador Adafruit Feather M0** para controlar un servomotor que gira por grados para exponer solo un espacio a la vez, asegurando que los usuarios accedan al medicamento correcto. \n -**Construir y programar** la interfaz de usuario con pantalla LED para permitir el acceso al control del motor y la configuración de la alarma. La pantalla muestra la hora y fecha actual capturada desde un reloj en tiempo real. También brinda al usuario retroalimentación visual de la configuración y la alarma."
    }
];

const translations = {
    nav: {
      title: { en: 'Smart Pill Dispenser', es: 'Dispensador de Pastillas Inteligente' },
      demo: { en: 'CLICK HERE TO WATCH DEMO', es: 'HAGA CLIC AQUÍ PARA VER DEMOSTRACIÓN' },
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