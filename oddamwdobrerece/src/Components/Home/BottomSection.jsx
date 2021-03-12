import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Decoration from '../../assets/Decoration.svg';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';



const BottomSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [success, setSuccess] = useState('');

    const contact = {
        name: name,
        email: email,
        message: message
    };

    const clearErrors = () => {
        setNameError('');
        setEmailError('');
        setMessageError('')
    };

    const sendForm = (e) => {
        setSuccess('');
        clearErrors();
        e.preventDefault();
        if(name.indexOf(" ") !== -1 || name.length === 0 || message.length < 120 || email.indexOf("@") === -1 || email.length === 0) {
            if(name.indexOf(" ") !== -1 || name.length === 0) {
                setNameError('Podane imie jest nieprawidłowe');
            }

            if(message.length < 120) {
                setMessageError('Wiadomość musi mieć conajmniej 120 znaków');
            }

            if(email.indexOf("@") === -1 || email.length === 0) {
                setEmailError('Podany email jest nieprawidłowy')
            }
        } else {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: "POST",
                body: JSON.stringify(contact),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                setName('');
                setEmail('');
                setMessage('');
                setSuccess(`Wiadomość została wysłana.
                Wkrótce się skontaktujemy`)
            })
                .catch(err => console.log(err))
        }
    };


    return (
        <>
            <div className="bottom-section" id="contact">
                <div className="contact-handler">
                    <form className="contact-form">
                        <p className="form-title"> Skontaktuj się z nami </p>
                        <img src={Decoration} alt="" className="form-decoration"/>
                        <p className="form-success-message"> {success} </p>
                        <div className="personal-info">
                            <div className="input-handler">
                                <label htmlFor="">Wpisz swoje imię</label>
                                <input type="text" placeholder="Krzysztof" value={name} onChange={e => setName(e.target.value)}/>
                                <p className="errorMsg">{nameError}</p>
                            </div>
                            <div className="input-handler">
                                <label htmlFor="">Wpisz swój email</label>
                                <input type="text" placeholder="abc@xyz.pl" value={email} onChange={e => setEmail(e.target.value)}/>
                                <p className="errorMsg">{emailError}</p>
                            </div>
                        </div>
                        <div className="message-handler">
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea minLength="120" name="message" id="" cols="30" rows="4" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  value={message} onChange={e => setMessage(e.target.value)}/>
                            <p className="errorMsg">{messageError}</p>
                        </div>
                        <Link to="" onClick={sendForm}> Wyślij </Link>
                    </form>
                </div>
                <div className="footer">
                    <p className="footer-text">
                        Copyright by Coders Lab
                    </p>
                    <div className="social-media">
                        <img src={Facebook} alt=""/>
                        <img src={Instagram} alt=""/>
                    </div>

                </div>

            </div>

        </>
    )
};

export default BottomSection;