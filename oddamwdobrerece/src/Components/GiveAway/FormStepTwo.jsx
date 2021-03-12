import React from 'react';


const FormStepTwo = (props) => {
    const { numberOfBags, setNumberOfBags, setPage } = props;


    return (
        <div className="giveaway-container">
            <div className="giveaway-warning-container">
                <p className="giveaway-warning-title"> WAŻNE! </p>
                <p className="giveaway-warning-details"> Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ. </p>
            </div>
            <div className="giveaway-form-container">
                <p className="form-step-number"> Krok 2/4 </p>
                <div className="form-step-container">
                    <p className="form-step-title"> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </p>
                    <div className="form-select-handler">
                        <p className="form-select-text"> Liczba 60l worków: </p>
                        <select className="form-select" value={numberOfBags} onChange={e => setNumberOfBags(e.target.value)}>
                            <option> — wybierz — </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-step-buttons">
                    <a href="" className="form-step-btn-back" onClick={(e) => {e.preventDefault(); setPage(1)}}> Wstecz </a>
                    <a href="" className="form-step-btn" onClick={(e) => {e.preventDefault(); setPage(3)}}> Dalej </a>
                </div>
            </div>
        </div>
    )
};

export default FormStepTwo;