import React from 'react';
import Decoration from '../../assets/Decoration.svg';
import Signature from '../../assets/Signature.svg';



const AboutUsSection = () => {


    return (
        <>
            <div className="about-us" id="about-us">
                <div className="about-us-content">
                    <p className="about-us-title"> O nas </p>
                    <img src={Decoration} alt="" className="about-us-decoration"/>
                    <p className="about-us-description">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <img src={Signature} alt="" className="about-us-signature"/>
                </div>
                <div className="about-us-photo"> </div>
            </div>

        </>
    )
};

export default AboutUsSection;