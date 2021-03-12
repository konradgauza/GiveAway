import React from 'react';
import { Link } from 'react-router-dom'
import Decoration from '../../assets/Decoration.svg';

const WelcomeSection = (props) => {

    const { user } = props;

    return (
        <div className="welcome-section" id='start'>
            <div className="welcome-content-container">
                <p className="welcome-content-text">Zacznij pomagać!</p>
                <p className="welcome-content-text">Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={Decoration} alt="" className="welcome-content-decoration"/>
                <div className="welcome-section-buttons">
                    {user? (
                        <Link to="/oddaj-rzeczy" className="welcome-section-btn"> ODDAJ<br/> RZECZY </Link>
                    ) : (
                        <Link to="/logowanie" className="welcome-section-btn"> ODDAJ<br/> RZECZY </Link>
                    )}
                    <Link to="" className="welcome-section-btn"> ZORGANIZUJ ZBIÓRKĘ </Link>
                </div>
            </div>
        </div>
    )
};

export default WelcomeSection;


