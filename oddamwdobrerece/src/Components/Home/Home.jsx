import React from 'react';
import WelcomeSection from './WelcomeSection';
import NumbersSection from './NumbersSection';
import GiveAway4Steps from './GiveAway4Steps';
import AboutUsSection from './AboutUsSection';
import WhoAreWeHelping from './WhoAreWeHelping/WhoAreWeHelping';
import BottomSection from './BottomSection';


const Home = (props) => {


    return (
        <>
            <div className="home-container">
                <WelcomeSection user={props.user}/>
                <NumbersSection/>
                <GiveAway4Steps user={props.user}/>
                <AboutUsSection/>
                <WhoAreWeHelping/>
                <BottomSection/>

            </div>

        </>
    )
};

export default Home;