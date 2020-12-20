import React from 'react';
import NavBar from '../ShareCom/NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../ShareCom/Footer/Footer';

const Home = () => {
    return (
        <div className=" text-white" style={{backgroundColor: 'hotpink'}}>
            <NavBar/>
            <Header/>
            <Footer/>
        </div>
    );
};

export default Home;