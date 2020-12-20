import React from 'react';
import { FaFacebook, FaInstagramSquare, FaPinterest } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="container text-center mt-5">
            <h2>Find Us</h2>
            <div className="d-flex justify-content-center">
            <h3 className="mr-5"><FaFacebook/> </h3>
            <h3 className="mr-5"><FaInstagramSquare/> </h3>
            <h3><FaPinterest/> </h3>
            
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, expedita? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto esse animi voluptatibus quaerat expedita nemo. Ea repellendus nulla quidem.</p>
        </div>
    );
};

export default Footer;