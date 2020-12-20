import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
 
        <header className="container mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <a className="navbar-brand text-danger" href="#">New Cinema Hall</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active">
                            <Link className="nav-link text-info" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info" to="/login">Login</Link>
                        </li>
                       <li className="nav-item">
                            <Link className="nav-link  text-info" to="#">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-info" to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                </nav>
       </header>
    );
};

export default NavBar;