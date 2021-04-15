import React, {useState} from 'react';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormStepFour from './FormStepFour';
import FormStepConfirm from './FormStepConfirm';
import FormStepFinal from './FormStepFinal';

const GiveAwayFormSection = () => {
    const [checkbox1, setCheckbox1] = useState(false); //good clothes
    const [checkbox2, setCheckbox2] = useState(false); //broken clothes
    const [checkbox3, setCheckbox3] = useState(false); //toys
    const [checkbox4, setCheckbox4] = useState(false); //books
    const [checkbox5, setCheckbox5] = useState(false); //other
    const [checkbox6, setCheckbox6] = useState(false); //kids
    const [checkbox7, setCheckbox7] = useState(false); //mothers
    const [checkbox8, setCheckbox8] = useState(false); //homeless
    const [checkbox9, setCheckbox9] = useState(false); //disabled
    const [checkbox10, setCheckbox10] = useState(false); //old people
    const [city, setCity] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [pickUpCity, setPickUpCity] = useState('');
    const [pickUpStreet, setPickUpStreet] = useState('');
    const [pickUpPostCode, setPickUpPostCode] = useState('');
    const [pickUpPhone, setPickUpPhone] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpHour, setPickUpHour] = useState('');
    const [comments, setComments] = useState('');
    const [numberOfBags, setNumberOfBags] = useState(0);
    const [page, setPage] = useState(1);




    return (
        <>
            {page === 1 ? (
                <FormStepOne
                    checkbox1={checkbox1} setCheckbox1={setCheckbox1}
                    checkbox2={checkbox2} setCheckbox2={setCheckbox2}
                    checkbox3={checkbox3} setCheckbox3={setCheckbox3}
                    checkbox4={checkbox4} setCheckbox4={setCheckbox4}
                    checkbox5={checkbox5} setCheckbox5={setCheckbox5}
                    page={page} setPage={setPage}

                />
            ) : (<></>)}
            {page === 2 ? (
                <FormStepTwo numberOfBags={numberOfBags} setNumberOfBags={setNumberOfBags} page={page} setPage={setPage}/>
            ) : (<></>)}
            {page === 3 ? (
                <FormStepThree
                    checkbox6={checkbox6} setCheckbox6={setCheckbox6}
                    checkbox7={checkbox7} setCheckbox7={setCheckbox7}
                    checkbox8={checkbox8} setCheckbox8={setCheckbox8}
                    checkbox9={checkbox9} setCheckbox9={setCheckbox9}
                    checkbox10={checkbox10} setCheckbox10={setCheckbox10}
                    page={page} setPage={setPage}
                    organisation={organisation} setOrganisation={setOrganisation}
                    city={city} setCity={setCity} checkbox1={checkbox1}
                />
            ) : (<></>)}
            {page === 4 ? (
                <FormStepFour
                    page={page} setPage={setPage}
                    pickUpCity={pickUpCity} setPickUpCity={setPickUpCity}
                    pickUpStreet={pickUpStreet} setPickUpStreet={setPickUpStreet}
                    pickUpPostCode={pickUpPostCode} setPickUpPostCode={setPickUpPostCode}
                    pickUpPhone={pickUpPhone} setPickUpPhone={setPickUpPhone}
                    pickUpDate={pickUpDate} setPickUpDate={setPickUpDate}
                    pickUpHour={pickUpHour} setPickUpHour={setPickUpHour}
                    comments={comments} setComments={setComments}
                />
            ) : (<></>)}
            {page === 5 ? (
                <FormStepConfirm
                    setPage={setPage}
                    checkbox1={checkbox1} checkbox2={checkbox2} checkbox3={checkbox3} checkbox4={checkbox4} checkbox5={checkbox5}
                    checkbox6={checkbox6} checkbox7={checkbox7} checkbox8={checkbox8} checkbox9={checkbox9} checkbox10={checkbox10}
                    city={city} organisation={organisation} pickUpCity={pickUpCity} pickUpStreet={pickUpStreet}
                    pickUpPostCode={pickUpPostCode} pickUpPhone={pickUpPhone} pickUpDate={pickUpDate} pickUpHour={pickUpHour}
                    comments={comments} numberOfBags={numberOfBags}

                />
            ) : (<></>)}
            {page === 6 ? (
                <FormStepFinal
                    setPage={setPage}
                />
            ) : (<></>)}

        </>
    )
};

export default GiveAwayFormSection;