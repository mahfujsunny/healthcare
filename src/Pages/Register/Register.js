import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    return (
        <div className="register-section">
            <form onSubmit="">
                <input type="Text" name="name" placeholder="Your Name" required />
                <br /> <br />
                <input type="email" name="email" placeholder="Your Email" required/>
                <br /> <br />
                <input type="password" name="password" placeholder="Create Password"required />
                <br /><br />
                <input type="password" name="password" placeholder="Re-enter Password" required/>
                <br /><br />
                <button className="btn btn-success rounded-pill">Register</button>
                <br /><br />
                <button className="btn btn-info">Google Signin</button>
            </form>
            <p className="text-success m-3">Already Have an Account ? <Link to="/login" className="text-decoration-none textr-danger">Sign In</Link></p>
        </div> 
    );
};

export default Register;