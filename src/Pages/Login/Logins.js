// import React from 'react';
// import { Link } from 'react-router-dom';
// // import useFirebase from '../../Hooks/useFirebase';
// import useAuth from '../../../hooks/useAuth';
// import "./Login.css"

// const Login = () => {
//     const {user, SignInUsingGoogle} = useFirebase();
//     return (
//         <div className="login-section">
//             <form >
//                 <input type="email" name="email" placeholder="Your Email" />
//                 <br /> <br />
//                 <input type="password" name="password" placeholder="Your Password"/>
//                 <br /><br />
//                 <button className="btn btn-success rounded-pill">Log In</button>
//                 <br /> <br />
//                 <button onClick={SignInUsingGoogle} className="btn btn-info">Google Signin</button>
//             </form>
//             <p className="text-success m-3">New In Health Care ? <Link to="/register" className="text-decoration-none text-danger">Create Account</Link></p>
//         </div>
//     );
// };

// export default Login;