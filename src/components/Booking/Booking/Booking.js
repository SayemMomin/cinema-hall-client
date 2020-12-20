import React, { useState } from 'react';
import BookingHeader from '../BookingHeader/BookingHeader';
import CinemaInfo from '../CinemaInfo/CinemaInfo';
import NavBar from '../../ShareCom/NavBar/NavBar';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <NavBar/>
            <BookingHeader handleDateChange={handleDateChange} />
            <CinemaInfo date={selectedDate} />
        </div>
    );
};

export default Booking;