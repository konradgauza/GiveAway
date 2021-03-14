import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom'
import firebaseData from './firebaseData';
import HamburgerMenu from 'react-hamburger-menu';
import Decoration from '../assets/Decoration.svg';

const Header = (props) => {
    const location = useLocation();
    const { user, setUser} = props;
    const [mobile, setMobile] = useState(window.innerWidth < 800);

    const handleLogout = () => {
        setUser('');
        firebaseData.auth().signOut();
        localStorage.clear();
    };

    const updateMedia = () => {
        setMobile(window.innerWidth < 800);
    };


    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <>

            {mobile ? (
                <div className="mobile-menubar">
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={toggleMenu}
                        width={36}
                        height={30}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                        className="burger-icon"
                    />
                    {open? (
                        <div className="mobile-menu">
                            <div className="mobile-menu-user">
                                {user ? (
                                        <div className="menu-user-buttons">
                                            <Link to="/oddaj-rzeczy" className="menu-user-btn" onClick={toggleMenu}> Oddaj rzeczy </Link>
                                            <Link to="/wylogowano" className="menu-user-btn" onClick={() => {toggleMenu(); handleLogout()}}> Wyloguj </Link>
                                        </div>
                                ) : (
                                        <div className="menu-user-buttons">
                                            <Link to="/logowanie" className="menu-user-btn" onClick={toggleMenu}> Zaloguj </Link>
                                            <Link to="/rejestracja" className="menu-user-btn" onClick={toggleMenu}> Załóż konto </Link>
                                        </div>
                                )}
                            </div>
                            <img src={Decoration} alt="" style={{margin: "2rem auto", width: "50%"}}/>
                            <div className="mobile-menu-links">
                                {location.pathname === "/" ? (
                                    <>
                                            <ScrollLink
                                                to="start"
                                                spy={true} smooth={true}
                                                duration={1000}
                                                className="menu-links-btn"
                                                onClick={toggleMenu}
                                            >
                                                Start
                                            </ScrollLink>
                                            <ScrollLink
                                                to="about-foundation"
                                                spy={true} smooth={true}
                                                duration={1000}
                                                className="menu-links-btn"
                                                onClick={toggleMenu}
                                            >
                                                O co chodzi
                                            </ScrollLink>
                                            <ScrollLink
                                                to="about-us"
                                                spy={true} smooth={true}
                                                duration={1000}
                                                className="menu-links-btn"
                                                onClick={toggleMenu}
                                            >
                                                O nas
                                            </ScrollLink>
                                            <ScrollLink
                                                to="organisations"
                                                spy={true} smooth={true}
                                                duration={1000}
                                                className="menu-links-btn"
                                                onClick={toggleMenu}
                                            >
                                                Fundacja i organizacje
                                            </ScrollLink>
                                            <ScrollLink
                                                to="contact"
                                                spy={true} smooth={true}
                                                duration={1000}
                                                className="menu-links-btn"
                                                onClick={toggleMenu}
                                            >
                                                Kontakt
                                            </ScrollLink>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/" className="home-button" onClick={toggleMenu}> Strona Główna </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : ( <></>)}
                </div>
                ) : (
                <div className="header">

                    <div className="user-bar">
                        {user ? (
                            <>
                                <p className="user-welcome"> Cześć {user.email} </p>
                                <Link to="/oddaj-rzeczy" className="register-btn"> Oddaj rzeczy </Link>
                                <Link to="/wylogowano" className="login-btn" onClick={handleLogout}> Wyloguj </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/logowanie" className="login-btn"> Zaloguj </Link>
                                <Link to="/rejestracja" className="register-btn"> Załóż konto </Link>
                            </>
                        )}


                    </div>

                    {location.pathname === "/" ? (
                        <div className="menu-bar">
                            <Link to="/" className="menu-btn"> Start </Link>
                            <Link to="/">
                                <ScrollLink to="about-foundation" spy={true} smooth={true} duration={1000} className="menu-btn">
                                    O co chodzi
                                </ScrollLink>
                            </Link>
                            <Link to="/">
                                <ScrollLink to="about-us" spy={true} smooth={true} duration={1000} className="menu-btn">
                                    O nas
                                </ScrollLink>
                            </Link>
                            <Link to="/">
                                <ScrollLink to="organisations" spy={true} smooth={true} duration={1000} className="menu-btn">
                                    Fundacja i organizacje
                                </ScrollLink>
                            </Link>
                            <Link to="/">
                                <ScrollLink to="contact" spy={true} smooth={true} duration={1000} className="menu-btn">
                                    Kontakt
                                </ScrollLink>
                            </Link>
                        </div>
                    ) : (
                        <div className="menu-bar">
                            <Link to="/" className="menu-btn"> Start </Link>
                        </div>
                    )}


                </div>
                )}
            </>
    )
};

export default Header;