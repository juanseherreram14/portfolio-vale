import React, { useState } from 'react';
import '../Styles/MainProject.css';
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

const textContentEn = [
    {
        title: "Overview",
        text: "**Time:** 2 months (May 2025 - June 2025).\n**Objective:**  build an interactive application guiding users on a tour of Full Sail’s Technology Building.\n **Tools:** Unreal Engine, C++, Blueprint, Meta Quest 3.\nThe guidelines for this project were to make the application for the Meta Quest 3 using Unreal. After a brainstorm session with my team we decided to implement virtual components that would enhance the user's experience while also showcasing the actual classroom and its real components. That way the tour would become an asset that makes the experience marketable and interesting."
    },
    {
        title: "My Role",
        text: "I was assigned two main tasks. My first responsibility on the team was to find a way to show a transition from passthrough to full virtual, first showcasing the actual classroom elements and then converting them into a virtual environment. After conducting research, I ended up creating a dynamic material with a configuration that allowed changing the passthrough level. Then I implemented a function in Unreal Blueprint that changed the material over time, ensuring a smooth transition over a specified number of seconds. I was then assigned to make the application applicable to multiple classrooms. So I implemented a singleton in a C++ script to move the blueprint instance based on positional anchors and to change the environment by updating the value of the placeholders in the script. The application is an eye-catching way to promote the school, making it marketable for potential new students."
    }
];

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** 2 meses (mayo 2025 - junio 2025).\n**Objetivo:** construir una aplicación interactiva que guíe a los usuarios en un recorrido por el Edificio de Tecnología de Full Sail.\n **Herramientas:** Unreal Engine, C++, Blueprint, Meta Quest 3.\nLas pautas para este proyecto eran hacer la aplicación para Meta Quest 3 usando Unreal. Tras una sesión de lluvia de ideas con mi equipo, decidimos implementar componentes virtuales que mejorarían la experiencia del usuario y, al mismo tiempo, mostrarían el aula real y sus componentes reales. Así, el recorrido se convertiría en un recurso que hace que la experiencia sea comercializable e interesante."
    },
    {
        title: "Mi Rol",
        text: "Me asignaron dos tareas principales. Mi primera responsabilidad en el equipo fue encontrar una forma de mostrar una transición de passthrough a completamente virtual, primero mostrando los elementos reales del aula y luego convirtiéndolos en un entorno virtual. Después de investigar, terminé creando un material dinámico con una configuración que permitía cambiar el nivel de passthrough. Luego implementé una función en Blueprint de Unreal que cambiaba el material con el tiempo, asegurando una transición suave durante un número específico de segundos. Después me asignaron hacer que la aplicación fuera aplicable a múltiples aulas. Así que implementé un singleton en un script de C++ para mover la instancia del blueprint según anclas posicionales y cambiar el entorno actualizando el valor de los placeholders en el script. La aplicación es una forma llamativa de promocionar la escuela, haciéndola comercializable para posibles nuevos estudiantes."
    }
];

const translations = {
    nav: {
        title: { en: 'Full Sail University Mixed Reality Tour', es: 'Recorrido de Realidad Mixta - Full Sail University' },
        demo: { en: 'CLICK HERE TO WATCH DEMO', es: 'HAGA CLIC AQUÍ PARA VER LA DEMO' },
        home: { en: 'Go back home', es: 'Volver al inicio' }
    },
    controls: {
        next: { en: 'Next', es: 'Siguiente' }
    }
};

function MainProject4() {
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
                    <li><a href="https://youtube.com/shorts/0Qw0hh6ZzSY?feature=share"
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

export default MainProject4;