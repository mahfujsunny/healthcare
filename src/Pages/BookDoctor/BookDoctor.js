import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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

            <div className="">
               { booking && <>
                <h2>{doctorid}</h2>
                <img src={booking?.image} alt="" />
                <h2>{booking?.name}</h2>
                <p>{booking?.description}</p>
               </>}
            </div>
        </div>
    );
};

export default BookDoctor;