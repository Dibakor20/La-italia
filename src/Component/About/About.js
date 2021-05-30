import React from 'react';
import './About.css';
import chef from './../../../images/chef.png';
import sign from './../../../images/sign.png';

const About = () => {
    return (
        <div class="container py-5" id="about">
            <div class="row d-flex align-items-center">
                <div class="col-md-6">
                    <h2>Welcome to La-Italia!</h2>
                    <p className="paragraph">“Welcome to La-italia website. We want to bring feeling best for our customer. Our mission is to make everything from scratch. This means bringing in great product and treating it with the most care and creativity that it deserves.”</p>
                    <span>- Iftekhar Emon -</span>
                </div>
                <div class="col-md-6 text-center">
                    <img className="img-fluid" src={chef} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;