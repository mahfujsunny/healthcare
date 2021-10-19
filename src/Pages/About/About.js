import React from 'react';
import "./About.css"

const About = (props) => {
    const {image} = props.about;
    return (
    <div>
        <div className="row about-section">
            <div className="col-md-6 col-12">
                <img src={image} alt="" />
            </div>
            <div className="col-md-6 col-12">

                <h1 className="text-info">We Are The Best To Take Care Of You</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fs-1 text-danger">Work</h3>
                        <p className="text-muted">The primary duty of all doctors is for the care and safety of patients. Whatever their role, doctors must do the following. Engage with colleagues2 to maintain and improve the safety and quality of patient care. Contribute to discussions and decisions about improving the quality of services and outcomes.</p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-1 text-danger">Our Mission</h3>
                        <p className="text-muted">Health care will provide an unparalleled experience as the most trusted partner for health care.” Mission: “To inspire hope and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education and research..</p>
                    </div>
                </div>
            </div>

        </div>    
    </div>
    );
};

export default About;