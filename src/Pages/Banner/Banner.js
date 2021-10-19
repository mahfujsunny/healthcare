import React from 'react';
import Photo from "../../images/doctor.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="row banner">
            <div className="col-md-6 col-12 banner-part-1">
                <h2>Book Online Doctor's For Appointment</h2>
                <p>Skip the waiting room! Conveniently connect to a Healthcare Professional online from your phone, tablet or computer. We know that your priority is your health. It is the priority of our virtual providers too. That is why Meira Care provides you with quality healthcare services that include online booking, phone calls and video calls. To make sure we are aware of all your healthcare concerns, requests and queries we have introduced our online booking service so that you can connect to a medical provider online. Avoid long wait times and conveniently book an appointment online with ease.</p>
                <button className="btn btn-info">Contact Us</button>
            </div>
            <div className="col-md-6 col-12 banner-part-2">
                <img src={Photo} alt="" />
            </div>
        </div>
    );
};

export default Banner;