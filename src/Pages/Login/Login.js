import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import useAuth from '../../Hooks/useAuth';



// initializeAuthentication();

const Login = () => {
    // const auth = getAuth();
    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const { user, googleSignIn, handleRegister, handleEmailChange, handlePasswordChange, error, toggle, isLogin, handleResetPassword, } = useAuth();



    return (
        <div className="container d-inline-block bg-info my-5">
            <h2 className="text-white">Please {isLogin ? "Login" : "Register"}</h2>
            <h2>{user.email}</h2>
            
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {!isLogin && <><Form.Control type="text" className="w-50 m-auto mb-3" onBlur={handleNameChange} placeholder="Your name" /></>}


                    
                    <Form.Control onBlur={handleEmailChange} type="email" className="w-50 m-auto" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control onBlur={handlePasswordChange} type="password" className="w-50 m-auto"placeholder="Password" />
                </Form.Group>

                <Form.Group onChange={toggle} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="text-danger" type="checkbox"  label={isLogin ? "Already Registered ?" : "Please Register"} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {isLogin ? "Login" : "Register"}
                </Button>
                <br /><br />
                <Button onClick={handleResetPassword} variant="primary" type="submit">
                    Reset password
                </Button>
            </Form>

            <p className="text-danger">{error}</p>
            <br /><br />
            <Button className="mb-3" onClick={googleSignIn} variant="primary"><i className="fab fa-google text-warning"></i> Google Sign In</Button>
        </div >
    );
};

export default Login;