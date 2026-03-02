import React, { useState } from 'react';
import '../Styles/MainProject.css';
import mainVideo from '../Videos/VMP_VideoLeftShort.MP4';
import VMP_UI from '../Images/VMP_UI.png';
import VMP_UI2 from '../Images/VMP_UI2.png';
import VMP_UI3 from '../Images/VMP_UI3.png';
import VMP_cube from '../Images/VMP_Cube.png';
import VMP_InstFull from '../Images/VMP_Intallation.jpeg';
import VMP_InstClose from '../Images/VMP_InstClose.jpeg';

const showcase = [
    {
        id: 1,
        imageUrl: VMP_cube
    },
    {
        id: 2,
        imageUrl: VMP_UI
    },
    {
        id: 3,
        imageUrl: VMP_UI2
    },
    {
        id: 4,
        imageUrl: VMP_UI3
    },
    {
        id: 5,
        imageUrl: VMP_InstFull
    },
    {
        id: 6,
        imageUrl: VMP_InstClose
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
        text: "**Time:** (February 2026 - In development).\n**Objective:** create an interactive installation of a Stewart motion platform controlled by voice commands.\n **Tools:** Unity Engine, Arduino IDE, C#, C++."
    },
    {
        title: "Process",
        text: "-**Voice recognition:** I started by implementing a basic script using KeyWordRecognizer in Unity to get voice input and trigger events based on specific commands. To test the functionality, I used a simple cube that would move in different directions based on the recognized commands.\n-**Command handling:** I then implemented a more complex command handling system that could add commands to a data structure and at the same tiem queue coroutines to execute the commands in order without overlap. This way, I could ensure that the platform would complete one movement before starting another, creating a smoother user experience. I decided to add a word to start \"listening\" for commands and one to execute the actual movement. For example, the user would have to say \"platform + the command name + go\" to trigger a command.\n-**Platform control:** Finally, I integrated the command handling system with the script controlling the platform's movement. Since each platform has different movement limits, I added a json configuration file to define the range of movement for each command. This way, I could easily adjust the movement parameters for each command without having to change the code."
    }
];

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** (Febrero 2026 - En desarrollo).\n**Objetivo:** crear una instalación interactiva de una plataforma Stewart de movimiento controlada por comandos de voz.\n **Herramientas:** Unity Engine, Arduino IDE, C#, C++."
    },
    {
        title: "Proceso",
        text: "-**Reconocimiento de voz:** Comencé implementando un script básico usando KeyWordRecognizer en Unity para obtener la entrada de voz y activar eventos basados en comandos específicos. Para probar la funcionalidad, usé un cubo simple que se movería en diferentes direcciones según los comandos reconocidos.\n-**Manejo de comandos:** Luego implementé un sistema de manejo de comandos más complejo que podía agregar comandos a una estructura de datos y al mismo tiempo encolar corrutinas para ejecutar los comandos en orden sin superposición. De esta manera, pude asegurarme de que la plataforma completara un movimiento antes de comenzar otro, creando una experiencia de usuario más fluida. Decidí agregar una palabra para comenzar a \"escuchar\" los comandos y otra para ejecutar el movimiento real. Por ejemplo, el usuario tendría que decir \"plataforma + el nombre del comando + ir\" para activar un comando.\n-**Control de plataforma:** Finalmente, integré el sistema de manejo de comandos con el script que controla el movimiento de la plataforma. Dado que cada plataforma tiene diferentes límites de movimiento, agregué un archivo de configuración json para definir el rango de movimiento para cada comando. De esta manera, pude ajustar fácilmente los parámetros de movimiento para cada comando sin tener que cambiar el código."
    }
];

const translations = {
    nav: {
        title: { en: 'Voice Controlled Motion Platform Installation', es: 'Instalación de Plataforma Controlada por Voz' },
        demo: { en: 'CLICK HERE TO WATCH DEMO', es: 'HAGA CLIC AQUÍ PARA VER DEMONSTRACIÓN' },
        home: { en: 'Go back home', es: 'Volver al inicio' }
    },
    controls: {
        next: { en: 'Next', es: 'Siguiente' }
    },
    comingSoon:{
        en: "In development - Video demonstration coming soon!",
        es: "¡En desarrollo - Demostración en video próximamente!"
    }
};

function MainProject6() {
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
                    <li><a href="https://youtu.be/s4VAiSve15w?si=6jVjkHaxRouxjI-f"
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

export default MainProject6;