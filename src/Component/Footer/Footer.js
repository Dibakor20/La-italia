import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer py-2">
            <div class="container">
                <div class="row py-4">
                    <div class="col-md-3 col-sm-12">
                        <h3 className="text-white">La-Italia</h3>
                        <p className="text-muted text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="font-icon active-icons" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="font-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="font-icon" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <h5 className="text-white">HELP FULL LINK</h5>
                        <ul className="list-unstyled">
                            <li className="py-2"><a  className="text-muted" href="#">About Us</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">FAQs</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Careers</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Latest Updates</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Phones</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <h5 className="text-white">SUPPORT</h5>
                        <ul className="list-unstyled">
                            <li className="py-2"><a  className="text-muted" href="#">About Me</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Contact Us</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Our Team</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Packages</a></li>
                            <li  className="py-2"><a  className="text-muted py-2" href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <h5 className="text-white">CONTACT US</h5>
                        <FontAwesomeIcon className="font-icon text-muted" icon={faLocationArrow} /><span className="text-muted ms-2">Vestibulum nulla libero, convallis vitae lacus ut, tincidunt suscipit diam, DC 20002</span>
                        <br /> <br />
                        <FontAwesomeIcon className="font-icon text-muted" icon={faPhone} /><span className="text-muted ms-2">+8801856773128</span>
                        <br /> <br />
                        <FontAwesomeIcon className="font-icon text-muted" icon={faEnvelopeOpen} /><span className="text-muted ms-2">iftekharemon703@gmail.com</span>
                    </div>
                </div>
            </div>
            <hr className="text-white" />
            <p className="text-center text-white">Copyright {(new Date()).getFullYear()} <a className="text-success" href="http://localhost:3000/">La-Italia</a> All Rights Reserved</p>
        </footer>
    );
};

export default Footer;