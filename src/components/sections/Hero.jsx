import React from 'react';
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-main">
            <video autoPlay muted playsInline>
                <source src={window.innerWidth > 500 ? `/hero.mp4` : `/hero-m.MP4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="hero-buttons">
                <button className="hero-but try">Try Demo</button>
                <button className="hero-but contact">Contact Sales</button>
            </div>
        </div>
    );
};

export default Hero;