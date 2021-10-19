import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {

    const {id, name , image, description} = props.service

    return (
            <div className="col-md-3 col-12 card-group">
                <div className="card custom-style">
                    <img src={image}className="card-img-top" alt="..."/>
                    <div className="card-body">
                     <h5 className="card-title text-danger fw-bold">{name}</h5>
                     <p className="card-text text-muted">{description}</p>
                     
                    </div>
                    <div className="card-footer">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-info">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default Service;