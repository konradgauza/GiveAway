import React, {useState} from 'react';
import Decoration from '../../../assets/Decoration.svg';
import { Link } from "react-router-dom";
import Organisations from './Organisations';
import LocalCollections from './LocalCollections';
import Foundations from './Foundations';


const AboutUsSection = () => {
    const [foundations, setFoundations] = useState(true);
    const [organisations, setOrganisations] = useState(false);
    const [localCollections, setLocalCollections] = useState(false);

    const showFoundations = () => {
        setOrganisations(false);
        setFoundations(true);
        setLocalCollections(false)
    };
    const showOrganisations = () => {
        setOrganisations(true);
        setFoundations(false);
        setLocalCollections(false)
    };
    const showLocalCollections = () => {
        setOrganisations(false);
        setFoundations(false);
        setLocalCollections(true)
    };


    return (
        <>
            <div className="who-are-we-helping" id="organisations">
                <p className="helping-title"> Komu pomagamy? </p>
                <div>
                    <img src={Decoration} alt="" className="helping-decoration"/>
                </div>
                <div className="helping-buttons">
                    <Link to="/" className="helping-btn" onClick={showFoundations}>Fundacjom</Link>
                    <Link to="/" className="helping-btn" onClick={showOrganisations}>Organizacjom pozarządowym</Link>
                    <Link to="/" className="helping-btn" onClick={showLocalCollections}>Lokalnym zbiórkom</Link>
                </div>
                {foundations ? (
                    <Foundations/>
                ) : ( <></> )}
                {organisations ? (
                    <Organisations/>
                ) : ( <></> )}
                {localCollections ? (
                    <LocalCollections/>
                ) : ( <></> )}

            </div>

        </>
    )
};

export default AboutUsSection;