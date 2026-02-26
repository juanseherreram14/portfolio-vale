import React, { useState } from 'react';
import '../Styles/MainProject.css';
//import mainImage from '../Images/GameMathMain.png';
import UVMap1 from '../Images/UVMap1.png';
import UVMap2 from '../Images/UVMap2.png';
import UVMap3 from '../Images/UVMap3.png';
import projEffect1 from '../Images/ProjectorEffect1.png';
import projEffect2 from '../Images/ProjectorEffect2.png';
import projEffect3 from '../Images/ProjectorEffect3.png';
import projEffect4 from '../Images/ProjectorEffect4.png';

const showcase = [
    {
        id: 1,
        imageUrl: UVMap1
    },
    {
        id: 2,
        imageUrl: UVMap2
    },
    {
        id: 3,
        imageUrl: UVMap3
    },
    {
        id: 4,
        imageUrl: projEffect1
    },
    {
        id: 5,
        imageUrl: projEffect2
    },
    {
        id: 6,
        imageUrl: projEffect3
    },
    {
        id: 7,
        imageUrl: projEffect4
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
        text: "**Time:** (January 2026 - In development).\n**Objective:** enhance user experience by implementing dynamic materials and effects to the 3D modeled calculator.\n **Tools:** Unreal Engine, Meta Quest 3."
    },
    {
        title: "Process",
        text: "-**Energy effect:** I began by creating a dynamic material for the portions of the calculator that project light. Then I made a function to handle the change of opacity with interpolation using a timeline in Unreal's blueprint. This way it creates the effect by changing the opacity parameter of the material over time.\n-**UV mapping:** Since the keys of the calculator had its own meshes, I decided to assign a number and letter to map an image based on the number of keys. Then I created a material specifically to only display a portion of the image based on the UV coordinates. Finally, I applied them to the calculator keys using material instances.\n -**Projection effect:** I made a material with a panner and noise node to create movement in the texture and then I applied it to a cone mesh. Since that didn't look quite right, I kept researching different ways to create this effect in Unreal. So finally, I ended up using Unreal's Simple Light Beam material and modifying it's parameters to achieve the desired look. Finally to reduce the static look of the effect, I created a function in blueprint to change the intensity of the light based on the movement of the calculator."
    }
];

const textContentEs = [
    {
        title: "Descripción general",
        text: "**Duración:** (Enero 2026 - En desarrollo).\n**Objetivo:** mejorar la experiencia del usuario implementando materiales dinámicos y efectos a la calculadora 3D modelada para la aplicación.\n **Herramientas:** Unreal Engine, Meta Quest 3."
    },
    {
        title: "Proceso",
        text: "-**Efecto de energía:** Comencé creando un material dinámico para las partes de la calculadora que proyectan luz. Luego hice una función para manejar el cambio de opacidad con interpolación usando una línea de tiempo en el blueprint de Unreal. De esta manera, se crea el efecto al cambiar el parámetro de opacidad del material a lo largo del tiempo.\n-**Mapeo UV:** Dado que las teclas de la calculadora tenían sus propias mallas, decidí asignar un número y letra para mapear una imagen basado en el número de teclas. Luego creé un material específicamente para mostrar solo una porción de la imagen basada en las coordenadas UV. Finalmente, los apliqué a las teclas de la calculadora usando instancias de materiales.\n -**Efecto de proyección:** Hice un material con un nodo panner y ruido para crear movimiento en la textura y luego lo apliqué a una malla cónica. Dado que eso no se veía del todo bien, seguí investigando diferentes formas de crear este efecto en Unreal. Así que finalmente, terminé usando el material Simple Light Beam de Unreal y modificando sus parámetros para lograr el aspecto deseado. Finalmente, para reducir el aspecto estático del efecto, creé una función en blueprint para cambiar la intensidad de la luz basada en el movimiento de la calculadora."   
    }
];

const translations = {
    nav: {
        title: { en: 'Game Math', es: 'Game Math' },
        //demo: { en: 'CLICK HERE TO WATCH DEMO', es: 'HAGA CLIC AQUÍ PARA VER LA DEMONSTRACIÓN' },
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

function MainProject5() {
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
                    {/* <article className="background-video">
                        {/* You can swap the image below for a video if needed }
                        <img src={mainImage} alt="Main Project Visual" style={{ width: '75%', height: '90%', objectFit: 'cover'}} />
                    </article> */}
                    {translations.comingSoon[lang]}
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

export default MainProject5;