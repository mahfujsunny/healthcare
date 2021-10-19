import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/hc-logo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-container text-start">
                            <img src={logo} alt="" />
                            
                            <p className="mt-4"><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque accusamus ad recusandae dolore maxime a unde doloremque modi aliquid?</small>
                            </p>

                            <p><small>All rights reserved.</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <ul>
                                <li className="footer-menu">Location and Maps</li>
                                <li className="footer-menu">Campus Calender</li>
                                <li className="footer-menu">Help Center</li>
                                <li className="footer-menu">Contact us</li>
                                <li className="footer-menu">About us</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <div className="right-footer-container">
                            <h3>Sign up for the Book Doctor</h3>
                            <Link to="/Register">SignUp</Link>
                            
                            <div className="phone d-flex align-items-center justify-content-center mt-4">
                                
                                <div>
                                    <h5>+880175465635</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">
                                
                                <div>
                                    <p>
                                      Health Care
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;