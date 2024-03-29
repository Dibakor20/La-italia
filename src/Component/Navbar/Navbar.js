import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-menu">
            <div class="container">
                <Link to="/home">
                    <img className="h-25 w-25" src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active px-md-4 text-white" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-md-4 text-white" href="#about">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-md-4 text-white" href="#menu">MENU</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-md-4 text-white" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;