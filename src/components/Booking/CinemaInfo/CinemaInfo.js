import React from 'react';
import BookingDetails from '../BookingDetails/BookingDetails';


const CinemaInfo = ({date}) => {
    const bookingData = [
        {
            _id: '5e8df50be6e8231764dc23de',
            id: 1,
            subject: '1917',
            img: 'https://i.ibb.co/CwBbhxP/1917-cineplex.jpg',
            visitingHour: '9:00 AM - 11:00 AM',
            totalSpace: 40
        },
        {
            _id: '5e8df578e6e8231764dc23df',
            id: 2,
            subject: 'Rupsha Nodir Bake ',
            img: 'https://i.ibb.co/hFqLzfm/rupsha-nodir-bake.jpg',
            visitingHour: '12:30 AM - 3:30 AM',
            totalSpace: 40
        },
        {
            _id: '5e8df5aee6e8231764dc23e0',
            id: 3,
            subject: 'Unhinged',
            img: 'https://i.ibb.co/T8MFxnc/Unhinged-cineplex.jpg',
            visitingHour: '5:00 PM - 8:00 PM',
            totalSpace: 40
        },
        
    ]
    return (
        <section className="container">
            <h2 className="text-center text-brand">Available Booking on {date.toDateString()} </h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingDetails booking={booking} date={date} key={booking.id}></BookingDetails>)
                }
            </div>
        </section>
    );
};

export default CinemaInfo;