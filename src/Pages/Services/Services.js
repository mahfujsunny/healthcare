import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = (props) => {
    const [service , setService] = useState([]);
    
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setService(data[0].services) )
    },[])
    return (
        <div>
            
             <h2 className="fs-1 fw-bold text-info m-5 heading-text">Services</h2>
            <div className="row g-4">
                
            {
                service.map(service => <Service
                key={service.id}
                service={service}>

                </Service>)
            }
            
            </div>
        </div>
    );
};

export default Services;