import React from 'react';


const FormStepThree = (props) => {
    const { city, setCity, setPage, organisation, setOrganisation, checkbox6, setCheckbox6, checkbox7, setCheckbox7, checkbox8, setCheckbox8, checkbox9, setCheckbox9, checkbox10, setCheckbox10, checkbox1 } = props;


    const toggleCheck6 = () => {
        setCheckbox6(!checkbox6);
    };
    const toggleCheck7 = () => {
        setCheckbox7(!checkbox7);
    };
    const toggleCheck8 = () => {
        setCheckbox8(!checkbox8);
    };
    const toggleCheck9 = () => {
        setCheckbox9(!checkbox9);
    };
    const toggleCheck10 = () => {
        setCheckbox10(!checkbox10);
    };




    return (
        <div className="giveaway-container">
            <div className="giveaway-warning-container">
                <p className="giveaway-warning-title"> WAŻNE! </p>
                <p className="giveaway-warning-details"> Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ. </p>
            </div>
            <div className="giveaway-form-container">
                <p className="form-step-number"> Krok 3/4 </p>
                <div className="form-step-container">
                    <p className="form-step-title"> Lokalizacja: </p>
                    <select className="form-select" value={city} onChange={e => setCity(e.target.value)}>
                        <option> — wybierz — </option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                    <p className="form-question"> Komu chcesz pomóc? </p>
                    <div className="form-step-checkboxes">
                        <input type="checkbox" className="checkbox-one" value={checkbox6} onChange={toggleCheck6}/>
                        <input type="checkbox" className="checkbox-two" value={checkbox7} onChange={toggleCheck7}/>
                        <input type="checkbox" className="checkbox-three" value={checkbox8} onChange={toggleCheck8}/>
                        <input type="checkbox" className="checkbox-four" value={checkbox9} onChange={toggleCheck9}/>
                        <input type="checkbox" className="checkbox-five" value={checkbox10} onChange={toggleCheck10}/>
                    </div>
                    <p className="form-question"> Wpisz nazwę konkretnej organizacji (opcjonalnie) </p>
                    <input type="text" className="form-text-input" value={organisation} onChange={e => setOrganisation(e.target.value)}/>
                </div>
                <div className="form-step-buttons">
                    <a href="" className="form-step-btn-back" onClick={(e) => {e.preventDefault(); setPage(2)}}> Wstecz </a>
                    <a href="" className="form-step-btn" onClick={(e) => {e.preventDefault(); setPage(4)}}> Dalej </a>
                </div>
            </div>
        </div>
    )
};

export default FormStepThree;