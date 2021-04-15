import React, { useState } from 'react';
import Decoration from "../assets/Decoration.svg";
import {Link, useHistory} from "react-router-dom";
import firebaseData from '../firebaseData';

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };


    const handleSignUp = (e) => {
        clearErrors();
        e.preventDefault();
        password === passwordRepeat ? (
            firebaseData
                .auth().createUserWithEmailAndPassword(email, password)
                .then(() => firebaseData.firestore()
                    .collection(`Users`)
                    .doc(firebaseData.auth().currentUser.uid)
                    .set({
                        email: email,
                    }))
                .then( () => history.push("/zarejestrowano"))
                .catch(err => {
                    switch(err.code) {
                        case "auth/email-already-in-use":
                            setEmailError(err.message);
                            break;

                        case "auth/invalid-email":
                            setEmailError(err.message);
                            break;

                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
                    }
                })
        ) : (
                setPasswordError("Passwords do not match")
        )

    };


    return (
        <>
            <div className="authentication-container">
                <div className="authentication-form">
                    <p className="form-title"> Załóż konto </p>
                    <img src={Decoration} alt="" className="form-decoration"/>
                    <div className="form-inputs">
                        <label htmlFor=""> Email </label>
                        <input type="text" className="extra-margin" value={email} required onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor=""> Hasło </label>
                        <input type="password" className="extra-margin" value={password} required onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor=""> Powtórz hasło </label>
                        <input type="password" value={passwordRepeat} required onChange={e => setPasswordRepeat(e.target.value)}/>
                    </div>
                    <div className="form-buttons">
                        <Link to="/logowanie"  className="form-btn"> Zaloguj się </Link>
                        <Link to="/registered"  className="form-btn" onClick={handleSignUp}> Załóż konto </Link>
                    </div>
                    <p className="errorMsg"> {emailError} {passwordError}</p>

                </div>

            </div>
        </>
    )
};

export default Register;