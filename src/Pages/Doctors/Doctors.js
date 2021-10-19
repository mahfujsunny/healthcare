import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor , setDoctor] = useState([]);
    
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setDoctor(data[0].doctors) )
    },[])
    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">Doctors Team</h2>
            <div className="row g-4">
                
            {
                doctor.map(doctor => <Doctor
                key={doctor.id}
                doctor={doctor}>

                </Doctor>)
            }
            
            </div>
        </div>
    );
};

export default Doctors;