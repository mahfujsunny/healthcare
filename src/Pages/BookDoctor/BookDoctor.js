import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./BookDoctor.css"

const BookDoctor = () => {
    const {doctorid} = useParams();
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setBook(data[0].doctors))
    },[])

    
    const booking = book.find (data => parseInt(data.id) === parseInt(doctorid))
    return (
        <div className="container">

            <div className="card booking-doctor border border-danger">
               { booking && <>
                <img className="" src={booking?.image} alt="" />
                <div className="card-body">
                    <h2 className="">{doctorid}</h2>
                    <h2 >{booking?.name}</h2>
                    <p>{booking?.description}</p>
                </div>
                
               </>}
            </div>
        </div>
    );
};

export default BookDoctor;