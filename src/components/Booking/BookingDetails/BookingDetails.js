import React, { useState, useEffect } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import { FcFilm  } from 'react-icons/fc';


const BookingDetails = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:20000/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data)
              
            })
    }, [])
   
    return (
        <div className="col-md-4 mt-5 mb-3">
            <div className="card p-2">
                <div className="card-body text-center">
                    <h3 className="card-title text-brand">{booking.subject}</h3>
                    <img src={booking.img} alt="" className="img-fluid mb-2" />
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SEATS AVAILABLE</p>
                    {bookings.length < 40 ?
                        <button onClick={openModal} className="btn btn-brand text-uppercase">Click for Book <FcFilm /> </button> : <button>House full</button>
                    }
                    <BookingForm modalIsOpen={modalIsOpen} image={booking.img} bookingOn={booking.subject} closeModal={closeModal} visitingHour={booking.visitingHour} date={date}></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;