import React from 'react';
import Decoration from '../../assets/Decoration.svg'


const FormStepFinal = () => {


    return (
        <div className="final-step">
            <div className="content-holder">
                <p className="tekst-line">Dziękujemy za przesłanie formularza</p>
                <p className="tekst-line">Na maila prześlemy wszelkie</p>
                <p className="tekst-line">informacje o odbiorze.</p>
                <img src={Decoration} alt="" className="decoration"/>
            </div>
        </div>
    )
};

export default FormStepFinal;