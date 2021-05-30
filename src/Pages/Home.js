import React from 'react';
import About from '../Component/About/About';
import Contact from '../Component/Contact/Contact';
import Footer from '../Component/Footer/Footer';
import Hero from '../Component/Hero/Hero';
import Menu from '../Component/Menu/Menu';
import Navbar from '../Component/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Menu/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;