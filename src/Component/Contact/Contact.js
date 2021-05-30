import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="py-5" id="contact">
            <div className="row text-center">
                <h5 className="text-success">Want to know about our events?</h5>
                <h1>GET WEEKLY EMAIL</h1>
                <form action="#">
                    <input className="form-control col-md-5 m-auto py-4 text-center my-4" type="email" placeholder="Enter your email address" />
                    <br />
                    <div className="btn btn-success btn-sm px-5 py-3 rounded-pill">Subscribe</div>
                </form>
            </div>
        </div>
    );
};

export default Contact;