import React from 'react';
import { Link } from 'react-router-dom';
import cinema from '../../Images/the-rental-cineplexbd.jpg';

const Header = () => {
     
    return (
        <main className="container" style={{height: "350px"}}>
            <div className="row d-flex align-items-center">
            <div className="col-md-5 ">
                <h1 style={{ fontSize: "50px"}}>Enjoy Your Favourite Movie</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores, minima eaque eum cupiditate eos.</p>
                <Link to='/booking'><button className="btn btn-primary mb-1">Booking Request</button></Link>
            </div>
            <div className="col-md-6 ml-auto">
                <img src={cinema} alt="" className="img-fluid"/>
            
            </div>
            </div>
        </main> 
    );
};

export default Header;