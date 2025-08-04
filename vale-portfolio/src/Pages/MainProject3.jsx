import React from 'react';
import '../Styles/MainProject1.css';
import mainVideo from '../Videos/StewP_Isometric_Animation.mp4';
import SPCad from '../Images/SP_CAD.png';
import SPPcb from '../Images/SP_PCB.png';
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
        imageUrl: SPFinal
    }
];

function MainProject3() {
    return (
        <div className="main-project1-page">
            <nav className="MP1navbar MP1glass-navbar">
                <div className="MP1navbar-left">
                    <h1 className="MP1navbar-title">Project Title - Date</h1>
                </div>
                <ul className="MP1navbar-right">
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
                    <div className="showcase-grid">
                        {showcase.map(showcase => (
                            <article key={showcase.id} className="showcase-card">
                                <img src={showcase.imageUrl} alt="" />
                            </article>
                        ))}
                    </div>
                    <div className="content-grid">
                        <article key={1} className="content-card">
                            <h1>What</h1>
                            <h2>This is the explanation.</h2>
                        </article>
                        <article key={2} className="content-card">
                            <h1>How</h1>
                            <h2>This is the explanation.</h2>                           
                        </article>   
                        <article key={3} className="content-card">
                            <h1>Results</h1>
                            <h2>This is the explanation.</h2>                            
                        </article>                                            
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainProject3;