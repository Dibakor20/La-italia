import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="text-center hero text-white" id="home">
            <h1 className="display-2 hero-text">RESTAURANT</h1>
            <h1 className="display-2 hero-text">Come Hungry, Leave Happy</h1>
            <button type="button" class="btn btn-success mt-3 px-5 py-3 rounded-pill">Explore Now</button>
        </div>
    );
};

export default Hero;