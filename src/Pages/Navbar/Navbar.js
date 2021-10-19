import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Navbar.css"

const Navbar = (props) => {
    const { user, logOut, name } = useAuth();
    return (
        <div className="menus">
                <Link className="menu-bar" to="/home">Home</Link>
                <Link className="menu-bar" to="/services">Services</Link>
                <Link className="menu-bar" to="/about">About</Link>
                <Link className="menu-bar" to="/doctors">Doctors Team</Link>
                {   
                    user?.email ? <button className="menu-bar" onClick={logOut}>LogOut</button>
                    :
                    <Link className="menu-bar" to="/login">Login</Link>

                }
                <p>
                     Name: <Link to="/login">{user?.displayName}</Link>
                </p>
        </div>
    );
};

export default Navbar;