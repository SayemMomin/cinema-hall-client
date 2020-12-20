import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cinema2 from '../../../Images/1917-cineplex.jpg';


const BookingHeader = ({handleDateChange}) => {
    
    return (
        <section className="container mb-4">
            <div className="row ">
            <div className="d-flex align-items-center ">
            <div className="col-md-4 ">
                <h1 style={{ color: '#3A4256' }}>Booking</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 ml-auto">
                <img src={cinema2} alt="" className="img-fluid" />
            </div>
            </div>
            </div>
        </section>  
    );
};

export default BookingHeader;