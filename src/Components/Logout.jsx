import React from 'react';
import Decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Logout = () => {

    return (
        <>
            <div className="authentication-container">
                <div className="authentication-form">
                    <p className="form-title"> Wylogowanie nastąpiło <br /> pomyślnie! </p>
                    <img src={Decoration} alt="" className="form-decoration"/>
                    <Link to="/" className="authentication-home-btn"> Strona główna </Link>
                </div>
            </div>
        </>
    )
};

export default Logout;