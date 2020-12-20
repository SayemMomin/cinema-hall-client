import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import BookingListDetails from './BookingListDetails';

const BookingList = () => {
    const [selectMovie, setSelectMovie] = useState([])
    const [loggedInUser] =useContext(UserContext)

    

    useEffect(() => {
        fetch('https://pacific-springs-57570.herokuapp.com/bookingList?email='+ loggedInUser.email, 
        )
        .then(res => res.json())
        .then(data => {
            setSelectMovie(data)
            console.log(data);
        })
    }, [])
    return (
        <div className="container">
            <h4>You have Booking: {selectMovie.length} Seats</h4>
            <div className="d-flex flex-wrap">
            {
                 selectMovie.map(movie => <BookingListDetails key={movie._id} selectMovie= {movie}></BookingListDetails> )
            }
           </div>
        </div>
    );
};

export default BookingList;