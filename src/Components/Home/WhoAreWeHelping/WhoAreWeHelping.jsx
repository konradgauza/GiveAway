import React, {useState} from 'react';
import Decoration from '../../../assets/Decoration.svg';
import { Link } from "react-router-dom";
import Page from './Page';

const AboutUsSection = () => {
    const [page, setPage] = useState('Foundations')

    const showPage = (pageType) => {
        setPage(pageType);
    };

    return (

            <div className="who-are-we-helping" id="organisations">
                <p className="helping-title"> Komu pomagamy? </p>
                <div>
                    <img src={Decoration} alt="" className="helping-decoration"/>
                </div>
                <div className="helping-buttons">
                    <Link to="/" className="helping-btn" onClick={() => showPage('Foundations')}>Fundacjom</Link>
                    <Link to="/" className="helping-btn" onClick={() => showPage('Organisations')}>Organizacjom pozarządowym</Link>
                    <Link to="/" className="helping-btn" onClick={() => showPage('LocalCollections')}>Lokalnym zbiórkom</Link>
                </div>
                <Page page={page}/>
            </div>
    )
};

export default AboutUsSection;