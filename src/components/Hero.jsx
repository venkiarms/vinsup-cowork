import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Find Your Next <br /> Coworking Space</h1>
                <p className="hero-subtitle">
                    Discover a workspace that inspires you. Join a community of innovators and creators.
                </p>
                <div className="hero-btns">
                    <a href="#book" className="btn hero-btn-primary">Book a Tour</a>
                    <a href="#workspace" className="btn hero-btn-secondary">View Options</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
