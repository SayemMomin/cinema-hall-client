import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const customStyles = {
    content: {
        top: '50%',
        width: '400px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const BookingForm = ({ modalIsOpen, closeModal, image, bookingOn, visitingHour, date }) => {
    const history = useHistory()
    const [loggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.cinemaName = bookingOn;
        data.img = image;
        data.name = loggedInUser.name;
        data.email = loggedInUser.email;
        data.time = visitingHour;
        data.date = date;
        data.created = new Date();
        console.log(data);

        fetch('http://localhost:20000/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
       
        if (data) {
            closeModal();
            alert('Your seat booking confirm successfully')
            history.push('/movies')
        }
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{bookingOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" defaultValue={loggedInUser.name} disabled placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" defaultValue={loggedInUser.email} disabled placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={visitingHour} disabled name="time" placeholder="Date" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default BookingForm;