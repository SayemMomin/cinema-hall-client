import React from 'react';

const BookingListDetails = ({selectMovie}) => {
    return (
        <div style={{backgroundColor: "gray"}}>
            <div className="card m-2 p-2" style={{width: '18rem'}}>
            <div className="card-body">
                <img src={selectMovie.img} alt=""className="img-fluid" />
            <h5 className="card-title">{selectMovie.name} </h5>
            <p className="card-text">Movie Name: {selectMovie.cinemaName} </p>
            <p className="card-text">Time: {selectMovie.time} </p>
            </div>
            </div>
        </div>
    );
};

export default BookingListDetails;