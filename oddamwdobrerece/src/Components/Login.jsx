import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import Decoration from '../assets/Decoration.svg';
import firebaseData from './firebaseData';

const Login  = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        clearErrors();
        firebaseData
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then( () => history.push("/"))
            .catch(err => {
                switch(err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;

                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;

                    default:
                    //
                }
            });
    };


    return (
        <>
            <div className="authentication-container">
                <div className="authentication-form">
                    <p className="form-title"> Zaloguj się </p>
                    <img src={Decoration} alt="" className="form-decoration"/>
                    <div className="form-inputs">
                        <label htmlFor=""> Email </label>
                        <input type="text" className="extra-margin" value={email} required onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor=""> Hasło </label>
                        <input type="password" value={password} required onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-buttons">
                        <Link to="/rejestracja"  className="form-btn"> Załóż konto </Link>
                        <Link to="/"  className="form-btn" onClick={handleLogin}> Zaloguj się </Link>
                    </div>
                    <p className="errorMsg"> {emailError} {passwordError}</p>
                </div>

            </div>
        </>
    )
};

export default Login;