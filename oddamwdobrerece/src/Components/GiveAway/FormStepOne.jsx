import React from 'react';


const FormStepOne = (props) => {
    const { checkbox1, setCheckbox1, checkbox2, setCheckbox2, checkbox3, setCheckbox3, checkbox4, setCheckbox4, checkbox5, setCheckbox5, setPage } = props;

    const toggleCheck1 = () => {
        setCheckbox1(!checkbox1);
    };
    const toggleCheck2 = () => {
        setCheckbox2(!checkbox2);
    };
    const toggleCheck3 = () => {
        setCheckbox3(!checkbox3);
    };
    const toggleCheck4 = () => {
        setCheckbox4(!checkbox4);
    };
    const toggleCheck5 = () => {
        setCheckbox5(!checkbox5);
    };


    return (
        <div className="giveaway-step-one">
            <div className="giveaway-warning-container">
                <p className="giveaway-warning-title"> WAŻNE! </p>
                <p className="giveaway-warning-details"> Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać. </p>
            </div>
            <div className="step-one-body">
                <p className="form-step-number"> Krok 1/4 </p>
                <div className="step-one-form">
                    <p className="step-one-title"> Zaznacz co chcesz oddać: </p>
                    <div className="form-checkbox-handler">
                        <input type="checkbox" className="checkbox" value={checkbox1} onChange={toggleCheck1}/>
                        <p className="checkbox-text"> ubrania, które nadają się do ponownego użycia</p>
                    </div>
                    <div className="form-checkbox-handler">
                        <input type="checkbox" className="checkbox" value={checkbox2}  onChange={toggleCheck2}/>
                        <p className="checkbox-text"> ubrania, do wyrzucenia</p>
                    </div>
                    <div className="form-checkbox-handler">
                        <input type="checkbox" className="checkbox" value={checkbox3}  onChange={toggleCheck3}/>
                        <p className="checkbox-text"> zabawki</p>
                    </div>
                    <div className="form-checkbox-handler">
                        <input type="checkbox" className="checkbox" value={checkbox4}  onChange={toggleCheck4}/>
                        <p className="checkbox-text"> ksiażki</p>
                    </div>
                    <div className="form-checkbox-handler">
                        <input type="checkbox" className="checkbox" value={checkbox5}  onChange={toggleCheck5}/>
                        <p className="checkbox-text"> inne </p>
                    </div>
                </div>
                <a href="" className="form-step-btn"  onClick={(e) => {e.preventDefault(); setPage(2)}}> Dalej </a>
            </div>
        </div>
    )
};

export default FormStepOne;