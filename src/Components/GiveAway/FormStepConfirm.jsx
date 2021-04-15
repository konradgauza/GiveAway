import React, { useState, useEffect } from 'react';
import Tshirt from '../../assets/Icon-1.svg';
import Recycling from '../../assets/Icon-4.svg';
import firebaseData from '../../firebaseData';


const FormStepFour = (props) => {
    const { setPage, pickUpCity, pickUpStreet, pickUpPostCode, pickUpPhone, pickUpDate, pickUpHour, comments, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8, checkbox9, checkbox10, city, organisation, numberOfBags,  } = props;

    const space = " ";
    const [gifts, setGifts] = useState([]);
    const [toWho, setToWho] = useState([]);

    useEffect(() => {
        if(checkbox1) {
            setGifts(gifts => [...gifts, ' ubrania w dobrym stanie'])
        }
        if(checkbox2) {
            setGifts(gifts => [...gifts, ' znoszone ubrania'])
        }
        if(checkbox3) {
            setGifts(gifts => [...gifts, ' zabawki'])
        }
        if(checkbox4) {
            setGifts(gifts => [...gifts, ' książki'])
        }
        if(checkbox5) {
            setGifts(gifts => [...gifts, ' inne'])
        }
        if(checkbox6) {
            setToWho(toWho => [...toWho, ' dzieci'])
        }
        if(checkbox7) {
            setToWho(toWho => [...toWho, ' samotnych matek'])
        }
        if(checkbox8) {
            setToWho(toWho => [...toWho, ' bezdomnych'])
        }
        if(checkbox9) {
            setToWho(toWho => [...toWho, ' niepełnosprawnych'])
        }
        if(checkbox10) {
            setToWho(toWho => [...toWho, ' osób starszych'])
        }

    }, []);

    const collection = {
        numberOfBags: numberOfBags,
        gifts: gifts,
        toWho: toWho,
        pickUpCity: pickUpCity,
        pickUpStreet: pickUpStreet,
        pickUpPostCode: pickUpPostCode,
        pickUpPhone: pickUpPhone,
        pickUpDate: pickUpDate,
        pickUpHour: pickUpHour,
        comment: comments,
    };

    const randomID = Math.random().toString(36).substr(2, 9);

    const addData = () => {
        firebaseData.firestore()
            .collection(`Users/${firebaseData.auth().currentUser.uid}/giftsCollection`)
            .doc(randomID)
            .set(collection)
            .then(() => console.log('success'))
            .catch(() => console.log('problem with connection, data not sent'));
    };

    return (

            <div className="summary-container">
                <p className="summary-main-title">Podsumowanie Twojej darowizny</p>
                <div className="giveaway-items-summary">
                    <p className="items-summary-title">Oddajesz: </p>
                    <div className="giveaway-items-holder">
                        <img src={Tshirt} alt="" className="items-icon"/>
                        <div className="items-text-holder">
                            <p className="items-text">Ilość worków: {space}{numberOfBags}</p>
                            <p className="items-text">Oddaję:
                                {gifts.map(gift => <p style={{display: "inline-block", marginLeft: 10}}> {gift}, </p>)}
                            </p>
                            <p className="items-text">Dla:
                                {toWho.map(item => <p style={{display: "inline-block", marginLeft: 10}}> {item}, </p>)}
                            </p>
                        </div>
                    </div>
                    <div className="giveaway-location-holder">
                        <img src={Recycling} alt="" className="location-icon"/>
                        <p className="location-text">dla lokalizacji: {city}</p>
                    </div>
                </div>

                <div className="pickup-summary">
                    <div className="pickup-summary-box">
                        <p className="summary-title"> Adres odbioru: </p>
                        <div className="line-holder">
                            <p className="line-title">Ulica</p>
                            <p className="line-text-filler">{pickUpStreet}</p>
                        </div>
                        <div className="line-holder">
                            <p className="line-title">Miasto</p>
                            <p className="line-text-filler">{pickUpCity}</p>
                        </div>
                        <div className="line-holder">
                            <p className="line-title">Kod pocztowy</p>
                            <p className="line-text-filler">{pickUpPostCode}</p>
                        </div>
                        <div className="line-holder">
                            <p className="line-title">Numer telefonu</p>
                            <p className="line-text-filler">{pickUpPhone}</p>
                        </div>
                    </div>
                    <div className="pickup-summary-box">
                        <p className="summary-title"> Termin odbioru: </p>
                        <div className="line-holder">
                            <p className="line-title">Data</p>
                            <p className="line-text-filler">{pickUpDate}</p>
                        </div>
                        <div className="line-holder">
                            <p className="line-title">Godzina</p>
                            <p className="line-text-filler">{pickUpHour}</p>
                        </div>
                        <div className="line-holder" style={{alignItems: "flex-start"}}>
                            <p className="line-title">Uwagi <br /> dla kuriera</p>
                            <div className="div-comment">{comments}</div>
                        </div>
                    </div>

                </div>

                <div className="form-step-buttons">
                    <a href="#" className="form-step-btn-back" onClick={(e) => {e.preventDefault(); setPage(4)}}> Wstecz </a>
                    <a href="#" className="form-step-btn" onClick={(e) => {e.preventDefault(); addData(); setPage(6)}}> Potwierdzam </a>
                </div>
            </div>
    )
};

export default FormStepFour;