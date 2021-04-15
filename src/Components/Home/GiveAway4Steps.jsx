import React from 'react';
import Decoration from '../../assets/Decoration.svg';
import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';
import {Link} from "react-router-dom";



const GiveAway4Steps = (props) => {
    const { user } = props;

    return (
        <>
            <div className="four-steps-container" >
                <div className="line-one">
                    <p className="line-one-title"> Wystarczą 4 proste kroki </p>
                    <img src={Decoration} alt=""/>
                </div>
                <div className="line-two">
                    <div className="line-two-container">
                        <img src={Icon1} alt="" className="line-two-icon"/>
                        <p className="line-two-title">Wybierz rzeczy</p>
                        <div className="stripe"></div>
                        <p className="line-two-description">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="line-two-container">
                        <img src={Icon2} alt="" className="line-two-icon"/>
                        <p className="line-two-title">Spakuj je</p>
                        <div className="stripe"></div>
                        <p className="line-two-description">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="line-two-container">
                        <img src={Icon3} alt="" className="line-two-icon"/>
                        <p className="line-two-title">Zdecyduj komu chcesz pomóc</p>
                        <div className="stripe"></div>
                        <p className="line-two-description">wybierz zaufane miejsce</p>
                    </div>
                    <div className="line-two-container">
                        <img src={Icon4} alt="" className="line-two-icon"/>
                        <p className="line-two-title">Zamów kuriera</p>
                        <div className="stripe last"></div>
                        <p className="line-two-description">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="line-three">
                    {user? (
                        <Link to="/oddaj-rzeczy" className="line-three-btn"> ODDAJ<br/> RZECZY </Link>
                    ) : (
                        <Link to="/logowanie" className="line-three-btn"> ODDAJ<br/> RZECZY </Link>
                    )}
                </div>

            </div>

        </>
    )
};

export default GiveAway4Steps;