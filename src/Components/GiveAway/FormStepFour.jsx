import React from 'react';


const FormStepFour = (props) => {
    const { setPage, pickUpCity, setPickUpCity, pickUpStreet, setPickUpStreet, pickUpPostCode, setPickUpPostCode, pickUpPhone, setPickUpPhone, pickUpDate, setPickUpDate, pickUpHour, setPickUpHour, comments, setComments } = props;



    return (
        <div className="giveaway-step-four">
            <div className="giveaway-warning-container">
                <p className="giveaway-warning-title"> WAŻNE! </p>
                <p className="giveaway-warning-details"> Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ. </p>
            </div>
            <div className="step-four-body">
                <p className="form-step-number"> Krok 4/4 </p>
                <div className="step-four-form">
                    <p className="step-four-title"> Podaj adres oraz termin odbioru rzecz przez kuriera </p>
                    <div className="step-four-inputs">
                        <div className="input-inside-container">
                            <p className="input-inside-container-title"> Adres odbioru: </p>
                            <div className="input-holder">
                                <p className="input-title">Ulica</p>
                                <input type="text" className="text-input" value={pickUpStreet} onChange={e => setPickUpStreet(e.target.value)}/>
                            </div>
                            <div className="input-holder">
                                <p className="input-title">Miasto</p>
                                <input type="text" className="text-input" value={pickUpCity} onChange={e => setPickUpCity(e.target.value)}/>
                            </div>
                            <div className="input-holder">
                                <p className="input-title">Kod pocztowy</p>
                                <input type="text" className="text-input" value={pickUpPostCode} onChange={e => setPickUpPostCode(e.target.value)}/>
                            </div>
                            <div className="input-holder">
                                <p className="input-title">Numer telefonu</p>
                                <input type="text" className="text-input" value={pickUpPhone} onChange={e => setPickUpPhone(e.target.value)}/>
                            </div>
                        </div>
                        <div className="input-inside-container">
                            <p className="input-inside-container-title"> Termin odbioru: </p>
                            <div className="input-holder">
                                <p className="input-title">Data</p>
                                <input type="text" className="text-input" value={pickUpDate} onChange={e => setPickUpDate(e.target.value)}/>
                            </div>
                            <div className="input-holder">
                                <p className="input-title">Godzina</p>
                                <input type="text" className="text-input" value={pickUpHour} onChange={e => setPickUpHour(e.target.value)}/>
                            </div>
                            <div className="textarea-holder">
                                <p className="textarea-title">Uwagi <br /> dla kuriera</p>
                                <textarea className="textarea-input" value={comments} onChange={e => setComments(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-step-buttons">
                    <a href="#" className="form-step-btn-back" onClick={(e) => {e.preventDefault(); setPage(3)}}> Wstecz </a>
                    <a href="#" className="form-step-btn" onClick={(e) => {e.preventDefault(); setPage(5)}}> Dalej </a>
                </div>
            </div>
        </div>
    )
};



export default FormStepFour;