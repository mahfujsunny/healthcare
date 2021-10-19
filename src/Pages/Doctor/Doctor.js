import React from 'react';
import { Link } from 'react-router-dom';
import "./Doctor.css"

const Doctor = (props) => {
    const {id, name , image, description} = props.doctor
    return (
            <div className="col-md-4 col-12 card-group">
                <div className="card custom-style">
                    <img src={image}className="card-img-top rounded-circle" alt="..."/>
                    <div className="card-body">
                     <h5 className="card-title text-danger fw-bold">{name}  </h5>
                     <p className="card-text text-muted">{description}</p>
                     
                    </div>
                    <div className="card-footer">
                        <Link to={`/bookDoctor/${id}`}>
                        <button className="btn btn-info">Book</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default Doctor;