import React, { useEffect, useState } from 'react';
import About from '../About/About';

const Abouts = (props) => {
    // const url = `${https://i.ibb.co/M9bsytd/about.jpg}`;
    const [about , setAbout] = useState([]);
    
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAbout(data[0].extra) )
    },[])
    return (
        <div>

            <h2 className="fs-1 fw-bold text-info m-5 heading-text">About us _____</h2>
            <div className="">
                {
                    about.map(about=> <About
                        about = {about}
                    >

                    </About>)
                }
            
            </div>
        </div>
    );
};

export default Abouts;